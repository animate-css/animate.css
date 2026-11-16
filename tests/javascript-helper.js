// Run with Node after installing @playwright/test and its browsers.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {chromium, firefox, webkit} = require('@playwright/test');
const markdown = fs.readFileSync(
  path.join(__dirname, '../docsSource/sections/04-javascript.md'),
  'utf8',
);
const snippet = [...markdown.matchAll(/```javascript\n([\s\S]*?)```/g)]
  .map((match) => match[1])
  .find((code) => code.includes('const animateCSS ='));
assert(snippet, 'Expected the documented animateCSS helper');

(async () => {
  for (const engine of [chromium, firefox, webkit]) {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage();
      await page.setContent('<div id="parent"><span id="child">Child</span></div>');
      await page.addScriptTag({content: snippet + '\nwindow.animateCSS = animateCSS;'});
      const result = await page.evaluate(async () => {
        const parent = document.querySelector('#parent');
        const child = document.querySelector('#child');
        let resolved = false;
        let bubbled = 0;
        document.body.addEventListener('animationend', () => bubbled++);
        const completion = window.animateCSS('#parent', 'bounce').then(() => {
          resolved = true;
        });
        child.dispatchEvent(
          new AnimationEvent('animationend', {bubbles: true, animationName: 'fadeIn'}),
        );
        await Promise.resolve();
        const afterChild = {
          resolved,
          animated: parent.classList.contains('animate__animated'),
          bubbled,
        };
        parent.dispatchEvent(
          new AnimationEvent('animationend', {bubbles: true, animationName: 'bounce'}),
        );
        await completion;
        parent.classList.add('animate__animated', 'animate__bounce');
        parent.dispatchEvent(
          new AnimationEvent('animationend', {bubbles: true, animationName: 'bounce'}),
        );
        return {
          afterChild,
          resolved,
          listenerRemoved: parent.classList.contains('animate__bounce'),
        };
      });
      assert.deepStrictEqual(result.afterChild, {resolved: false, animated: true, bubbled: 1});
      assert(result.resolved, 'The parent event should resolve the Promise');
      assert(result.listenerRemoved, 'The listener should be removed after the parent finishes');
      console.log(`PASS: ${engine.name()} child bubbling, parent completion and cleanup`);
    } finally {
      await browser.close();
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
