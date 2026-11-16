# Reduced-motion regression

Build the CSS with `npm install` and `npm start`. Install the optional browser
runner with `npm install --no-save --package-lock=false @playwright/test`, then
run `npx playwright install chromium firefox webkit` and
`node tests/reduced-motion.js`.

The check covers all three distribution builds, normal/reduced-motion/print
media, visible entrance content, and delivery of `animationend`.
An optional CSS filename can be passed to test a previous build.

For a manual reproduction, open `tests/reduced-motion.html` after building and
toggle the operating system's reduced-motion preference (or emulate it in
browser developer tools), then reload. Check print preview as well.
