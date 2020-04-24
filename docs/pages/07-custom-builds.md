## Custom Builds

Animate.css is powered by npm/npx, postcss + postcss-preset-env, which means you can create custom builds pretty easily, using future CSS features safely. First of all, you’ll need Node and all other dependencies:

```sh
$ cd path/to/animate.css/
$ npm install
```

Next, run `npm start` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `./source/animate.css` file and keep only the animations `@import` you want to use.

```css
@import 'attention_seekers/bounce.css';
@import 'attention_seekers/flash.css';
@import 'attention_seekers/pulse.css';
@import 'attention_seekers/rubberBand.css';
@import 'attention_seekers/shake.css';
@import 'attention_seekers/headShake.css';
@import 'attention_seekers/swing.css';
@import 'attention_seekers/tada.css';
@import 'attention_seekers/wobble.css';
@import 'attention_seekers/jello.css';
@import 'attention_seekers/heartBeat.css';
```

It's possible to change animate's prefix on your custom build. Just change the `animateConfig`'s `prefix` property and rebuild it with `npm start`:

```json
"animateConfig": {
  "prefix": "ani__"
},
```
