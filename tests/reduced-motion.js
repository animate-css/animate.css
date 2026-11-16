// Build with `npm start`, install @playwright/test locally, then run this file with Node.
// Optional argument: a built CSS file (defaults to all three distribution builds).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {chromium, firefox, webkit} = require('@playwright/test');

(async () => {
  const files = process.argv.slice(2);
  if (!files.length) files.push('animate.css', 'animate.min.css', 'animate.compat.css');
  for (const engine of [chromium, firefox, webkit]) {
    const browser = await engine.launch();
    try {
      for (const file of files) {
        const css = fs.readFileSync(path.resolve(file), 'utf8');
        const prefix = file.includes('compat') ? '' : 'animate__';
        const page = await browser.newPage();
        try {
          for (const mode of ['normal', 'reduce', 'print']) {
            await page.emulateMedia({
              media: mode === 'print' ? 'print' : 'screen',
              reducedMotion: mode === 'reduce' ? 'reduce' : 'no-preference',
            });
            await page.setContent(`<style>${css}</style>`);
            const result = await page.evaluate(
              async ({prefix, mode}) => {
                const el = document.createElement('div');
                el.textContent = 'Delayed content';
                el.className = `${prefix}animated ${prefix}fadeIn ${prefix}delay-5s`;
                let ended = false;
                el.addEventListener('animationend', () => {
                  ended = true;
                });
                document.body.appendChild(el);
                const delay = getComputedStyle(el).animationDelay;
                if (mode !== 'normal') {
                  await Promise.race([
                    new Promise((resolve) =>
                      el.addEventListener('animationend', resolve, {once: true}),
                    ),
                    new Promise((resolve) => setTimeout(resolve, 1500)),
                  ]);
                }
                return {delay, ended, opacity: getComputedStyle(el).opacity};
              },
              {prefix, mode},
            );
            assert.strictEqual(
              result.delay,
              mode === 'normal' ? '5s' : '0s',
              `${engine.name()} ${file} ${mode}`,
            );
            if (mode !== 'normal') {
              assert(result.ended, 'animationend should still fire promptly');
              assert.strictEqual(result.opacity, '1', 'Content should be visible');
            }
          }
        } finally {
          await page.close();
        }
      }
      console.log(`PASS: ${engine.name()} normal/reduced/print delays and completion`);
    } finally {
      await browser.close();
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
