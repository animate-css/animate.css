# Animate.css [![GitHub release](https://img.shields.io/github/release/daneden/animate.css.svg)](https://github.com/daneden/animate.css/releases) [![CDNJS](https://img.shields.io/cdnjs/v/animate.css.svg)](https://cdnjs.com/libraries/animate.css) [![Build Status](https://travis-ci.com/daneden/animate.css.svg?branch=master)](https://travis-ci.com/daneden/animate.css) [![devDependencies Status](https://david-dm.org/daneden/animate.css/dev-status.svg)](https://david-dm.org/daneden/animate.css?type=dev) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animate-css/Lobby) [![npm version](https://badge.fury.io/js/animate.css.svg)](https://www.npmjs.com/package/animate.css)

> **We need your help!** animate.css v4 is in the work with lots of improvements and some breaking changes, including CSS custom properties support (aka CSS variables) and classes prefix for a safer use. We need **your feedback**! You can follow the development on the [`dev`](https://github.com/daneden/animate.css/tree/dev) branch and give your feedback on the [issue tracker](https://github.com/daneden/animate.css/issues). **Every feedback is welcome!**

_Just-add-water CSS animation_

`animate.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Installation

Install with npm:

```shell
$ npm install animate.css --save
```

Install with yarn:

```shell
$ yarn add animate.css
```

## Usage

To use animate.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animate__animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```html
<head>
  <link rel="stylesheet" href="animate.min.css" />
</head>
```

or use a CDN hosted version by [CDNJS](https://cdnjs.com/libraries/animate.css)

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />
</head>
```

### Animations

To animate an element, add the class `animate__animated` to an element. You can include the class `animate__infinite` for an infinite loop. Finally you need to add one of the following classes to the element (adding the `animate__` prefix before it):

| Class Name           |                     |                     |                      |
| -------------------- | ------------------- | ------------------- | -------------------- |
| `bounce`             | `flash`             | `pulse`             | `rubberBand`         |
| `shake`              | `headShake`         | `swing`             | `tada`               |
| `wobble`             | `jello`             | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`       | `bounceInRight`     | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`      | `bounceOutLeft`     | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`             | `fadeInDown`        | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`      | `fadeInRight`       | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`        | `fadeOut`           | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`        | `fadeOutLeftBig`    | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`          | `fadeOutUpBig`      | `fadeInTopLeft`     | `fadeInTopRight`     |
| `fadeInBottomLeft`   | `fadeInBottomRight` | `fadeOutTopLeft`    | `fadeOutTopRight`    |
| `fadeOutBottomRight` | `fadeOutBottomLeft` | `flipInX`           | `flipInY`            |
| `flipOutX`           | `flipOutY`          | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`           | `rotateInDownLeft`  | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight`    | `rotateOut`         | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft`    | `rotateOutUpRight`  | `hinge`             | `jackInTheBox`       |
| `rollIn`             | `rollOut`           | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`         | `zoomInRight`       | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`        | `zoomOutLeft`       | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`        | `slideInLeft`       | `slideInRight`      | `slideInUp`          |
| `slideOutDown`       | `slideOutLeft`      | `slideOutRight`     | `slideOutUp`         |
| `backInDown`         | `backInLeft`        | `backInRight`       | `backInUp`           |
| `backOutDown`        | `backOutLeft`       | `backOutRight`      | `backOutUp`          |
| `heartBeat`          |

Full example:

```html
<h1 class="animate__animated animate__infinite animate__bounce animate__delay-2s">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.css/)

It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

## CSS Custom Properties (CSS Variables)

Since version 4, animate.css makes use of custom properties (also known as CSS variables) to define the animations duration, delay and speed. This makes it easy to change all your animations time contrained properties on the fly. It means that you can have a slowmotion or timelapse effect with an one-liner javascript:

```javascript
// All animations will take twice the time to acomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to acomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');
```

It's possible to overwrite the variables with pure CSS too:

```css
/* This will overide all animations duration */
:root {
  --animate-duration: 2s;
}

/* This will overide only this animation duration */
.animate__bounce {
  --animate-duration: 3s;
}
```

Even though custom properties are not supported by some older browsers - like IE 10+ - you can use it safely as animate is powered by postcss, providing a proper fallback.

## Usage with Javascript

You can do a whole bunch of other stuff with animate.css when you combine it with Javascript. A simple example:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');
```

You can also detect when an animation ends:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');

element.addEventListener('animationend', function() {
  doSomething();
});
```

You can use this simple function to add and remove the animations:

```javascript
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animate__animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animate__animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}
```

And use it like this:

```javascript
animateCSS('.my-element', 'animate__bounce');

// or
animateCSS('.my-element', 'animate__bounce', function() {
  // Do something after animation
});
```

Notice that the examples are using ES6's `const` declaration, dropping support for IE10 and some aging browsers. If you prefer, switch the `const` to `var` declarations and IE10 and some old browsers will get support (they still have to provide [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) support, so do your [research](https://caniuse.com/#feat=classlist)).

## Setting _Delay_ and _Speed_

### Delay Class

It's possible to add delays directly on the element's class attribute, just like this:

```html
<div class="animate__animated bounce delay-2s">Example</div>
```

| Class Name          | Delay Time |
| ------------------- | ---------- |
| `animate__delay-2s` | `2s`       |
| `animate__delay-3s` | `3s`       |
| `animate__delay-4s` | `4s`       |
| `animate__delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

### Slow, Slower, Fast, and Faster Class

It's possible to control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animate__animated animate__bounce animate__faster">Example</div>
```

| Class Name        | Speed Time |
| ----------------- | ---------- |
| `animate__slow`   | `2s`       |
| `animate__slower` | `3s`       |
| `animate__fast`   | `800ms`    |
| `animate__faster` | `500ms`    |

> _**Note**: The `animate__animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._

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

## Accessibility

Animate.css supports the [`prefers-reduced-motion` media query](https://webkit.org/blog/7551/responsive-design-for-motion/) so that users with motion sensitivity can opt out of animations. On supported platforms (currently Firefox, OSX Safari and iOS Safari), users can select "reduce motion" on their operating system preferences and it will turn off CSS transitions for them without any further work required.

## License

Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [callmeelton@gmail.com](mailto:callmeelton@gmail.com).

## Contributing

Pull requests are the way to go here. We only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That **last one is important**.
