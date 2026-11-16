// Run with Node after installing @playwright/test and its browsers.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {chromium, firefox, webkit} = require('@playwright/test');
const compileAnimationList = require('../docsSource/compileAnimationList');
const css = fs.readFileSync(path.join(__dirname, '../docs/style.css'), 'utf8');
const playground = fs
  .readFileSync(path.join(__dirname, '../docs/modules/playground.mjs'), 'utf8')
  .replace('export default playground;', 'playground();');

(async () => {
  for (const engine of [chromium, firefox, webkit]) {
    const browser = await engine.launch();
    // macOS WebKit uses Option-Tab to include buttons in keyboard navigation.
    const tab = engine === webkit && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
    try {
      for (const width of [1280, 768, 390]) {
        const page = await browser.newPage({viewport: {width, height: 900}});
        await page.setContent(`<style>${css}
          .animation-list {position:relative;left:auto;transform:none}
          </style><h1 class="callout-title">Animate.css</h1>
          <div class="animation-list">${compileAnimationList()}</div>`);
        await page.evaluate(() => {
          window.copied = [];
          Object.defineProperty(navigator, 'clipboard', {
            value: {
              writeText(text) {
                window.copied.push(text);
                return Promise.resolve();
              },
            },
          });
        });
        await page.addScriptTag({content: playground});
        await page.keyboard.press(tab);
        // Firefox also includes scrollable containers in the tab order.
        if (await page.evaluate(() => document.activeElement.className === 'animation-list')) {
          await page.keyboard.press(tab);
        }
        assert.strictEqual(
          await page.evaluate(() => document.activeElement.className),
          'animation-item--title',
          'Tab should reach the first animation',
        );
        for (const key of ['Enter', 'Space']) {
          await page.keyboard.press(key);
          assert(
            await page
              .locator('.callout-title')
              .evaluate((el) => el.classList.contains('animate__bounce')),
            key + ' should play bounce',
          );
          await page.locator('.callout-title').dispatchEvent('animationend');
        }
        await page.keyboard.press(tab);
        assert.strictEqual(
          await page.evaluate(() => document.activeElement.className),
          'copy-icon',
          'Copy should be the next tab stop',
        );
        const focus = await page
          .locator('.copy-icon')
          .first()
          .evaluate((el) => ({
            visibility: getComputedStyle(el).visibility,
            outline: getComputedStyle(el).outlineStyle,
            tooltip: getComputedStyle(el.querySelector('.tooltip')).visibility,
          }));
        assert.deepStrictEqual(focus, {
          visibility: 'visible',
          outline: 'solid',
          tooltip: 'visible',
        });
        await page.keyboard.press('Enter');
        assert.deepStrictEqual(await page.evaluate(() => window.copied), ['animate__bounce']);
        await page.locator('.animation-item--title').first().click();
        assert(
          await page
            .locator('.callout-title')
            .evaluate((el) => el.classList.contains('animate__bounce')),
          'Pointer interaction should still work',
        );
        await page.close();
      }
      console.log(`PASS: ${engine.name()} Tab, Enter, Space, copy, pointer at three widths`);
    } finally {
      await browser.close();
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
