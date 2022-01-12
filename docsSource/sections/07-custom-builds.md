## Custom Builds

<p class="warning">Custom builds are not possible from a node_modules folder as we don't ship the building tools in the npm module.</p>

Animate.css is powered by npm, postcss + postcss-preset-env, which means you can create custom builds pretty easily, using future CSS with proper fallbacks.

First of all, you’ll need Node and all other dependencies:

```shell
$ git clone https://github.com/animate-css/animate.css.git
$ cd animate.css
$ npm install
```

Next, run `npm start` to compile your custom build. Three files will be generated:

- `animate.css`: raw build, easy to read and without any optimization
- `animate.min.css`: minified build ready for production
- `animate.compat.css`: minified build ready for production **without class prefix**. This should only be used as an easy path for migrations.

For example, if you'll only use some of the “attention seekers” animations, simply edit the `./source/animate.css` file, delete every `@import` and the ones you want to use.

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

Now, just run `npm start` and your highly optimized build will be generated at the root of the project.

### Changing the default prefix

It's pretty straight forward to change animate's prefix on your custom build. Change the `animateConfig`'s `prefix` property in the `package.json` file and rebuild the library with `npm start`:

```json
/* on Animate.css package.json */
"animateConfig": {
  "prefix": "myCustomPrefix__"
},
```

then:

```shell
$ npm start
```

Easy peasy!
