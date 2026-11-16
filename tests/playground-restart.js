// Run with Node after installing @playwright/test and its browsers.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {chromium, firefox, webkit} = require('@playwright/test');
const compileAnimationList = require('../docsSource/compileAnimationList');
const css = fs.readFileSync(path.join(__dirname, '../animate.css'), 'utf8');
const playground = fs
  .readFileSync(path.join(__dirname, '../docs/modules/playground.mjs'), 'utf8')
  .replace('export default playground;', 'playground();');

(async () => {
  for (const engine of [chromium, firefox, webkit]) {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage({reducedMotion: 'no-preference'});
      await page.setContent(`<style>${css}:root {--animate-duration: 30s}</style>
        <h1 class="callout-title animate__animated animate__zoomInDown">Animate.css</h1>
        <div class="animation-list">${compileAnimationList()}</div>`);
      await page.addScriptTag({content: playground});
      // Use real CSS animations; slow durations make consecutive clicks deterministic.
      for (const name of ['pulse', 'bounce']) {
        await page.locator(`[data-animation="${name}"] .animation-item--title`).click();
        const state = await page.locator('.callout-title').evaluate((el) => ({
          animation: getComputedStyle(el).animationName,
          classes: [...el.classList].filter(
            (c) => c.startsWith('animate__') && c !== 'animate__animated',
          ),
        }));
        assert.strictEqual(
          state.animation,
          name,
          'The most recent choice must win, regardless of CSS source order',
        );
        assert.deepStrictEqual(state.classes, ['animate__' + name]);
      }
      await page.evaluate(() => {
        window.previousAnimation = document.querySelector('.callout-title').getAnimations()[0];
      });
      await page.locator('[data-animation="bounce"] .animation-item--title').click();
      assert(
        await page.evaluate(
          () =>
            document.querySelector('.callout-title').getAnimations()[0] !==
            window.previousAnimation,
        ),
        'Selecting the same animation must restart it',
      );
      await page.locator('.callout-title').evaluate((el) => el.getAnimations()[0].finish());
      await page.waitForFunction(() => !document.documentElement.classList.contains('isPlaying'));
      assert.strictEqual(
        await page.locator('.callout-title').getAttribute('class'),
        'callout-title',
      );
      console.log(
        `PASS: ${engine.name()} intro interruption, switching, replay, completion cleanup`,
      );
    } finally {
      await browser.close();
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
