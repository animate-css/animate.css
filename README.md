# Animate.css [![GitHub release](https://img.shields.io/github/release/daneden/animate.css.svg)](https://github.com/daneden/animate.css/releases) [![CDNJS](https://img.shields.io/cdnjs/v/animate.css.svg)](https://cdnjs.com/libraries/animate.css) [![Build Status](https://travis-ci.com/daneden/animate.css.svg?branch=master)](https://travis-ci.com/daneden/animate.css) [![devDependencies Status](https://david-dm.org/daneden/animate.css/dev-status.svg)](https://david-dm.org/daneden/animate.css?type=dev) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animate-css/Lobby) [![npm version](https://badge.fury.io/js/animate.css.svg)](https://www.npmjs.com/package/animate.css)

_Just-add-water CSS animation_

`animate.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Installation

To install via Bower, simply do the following:

```bash
$ bower install animate.css --save
```

or you can install via npm:

```bash
$ npm install animate.css --save
```

## Basic Usage

1.  Include the stylesheet on your document's `<head>`

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```

Instead of installing you may use the remote version (hosted by [CDNJS](https://cdnjs.com/libraries/animate.css)):

```html
<head>
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
  <!-- or -->
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

You may [generate a SRI hash](https://www.srihash.org/) of that particular version and then use it to ensure the file's integrity; also you can make anonymous requests to CDN by setting the corresponding [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute:

```html
<head>
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
  integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw"
  crossorigin="anonymous">
  <!-- or -->
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
  integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw"
  crossorigin="anonymous">
</head>
```

2.  Add the class `animated` to the element you want to animate. You may also want to include the class `infinite` for an infinite loop.

3.  Finally you need to add one of the following classes:

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |
| `heartBeat`       |

Full example:

```html
<h1 class="animated infinite bounce delay-2s">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.css/)

## Usage

To use animate.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```

or use the version hosted by [CDNJS](https://cdnjs.com/libraries/animate.css)

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

You can do a whole bunch of other stuff with animate.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```

You can also detect when an animation ends:

<!--
Before you make changes to this file, you should know that $('#yourElement').one() is *NOT A TYPO*

http://api.jquery.com/one/
-->

```javascript
// See https://github.com/daneden/animate.css/issues/644
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$('#yourElement').one(animationEnd, doSomething);
```

[View a video tutorial](https://www.youtube.com/watch?v=CBQGl6zokMs) on how to use Animate.css with jQuery here.

**Note:** `jQuery.one()` is used when you want to execute the event handler at most _once_. More information [here](http://api.jquery.com/one/).

You can also extend jQuery to add a function that does it all for you:

```javascript
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
```

And use it like this:

```javascript
$('#yourElement').animateCss('bounce');
or;
$('#yourElement').animateCss('bounce', function() {
  // Do somthing after animation
});
```

You can change the duration of your animations, add a delay or change the number of times that it plays:

```css
#yourElement {
  -vendor-animation-duration: 3s;
  -vendor-animation-delay: 2s;
  -vendor-animation-iteration-count: infinite;
}
```

_Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)_

## Define _Delay_ and _Speed_ using Class

#### Delay Class

You can also add delays directly on the element's class attribute, just like this:

```html
<div class="animated bounce delay-2s">Example</div>
```

| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you want to add customized delays, you can add it directly to your css_

#### Slow, Slower, Fast, and Faster Class

You can control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animated bounce faster">Example</div>
```

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |

> _**Note**: The default speed is `1s` which is you don't need to put any class. If you want to add a custom duration, you can add it directly to your css instead_

## Custom Builds

Animate.css is powered by [gulp.js](http://gulpjs.com/), and you can create custom builds pretty easily. First of all, you’ll need Gulp and all other dependencies:

```sh
$ cd path/to/animate.css/
$ sudo npm install
```

Next, run `gulp` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

```javascript
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
```

## Accessibility

Animate.css supports the [`prefers-reduced-motion` media query](https://webkit.org/blog/7551/responsive-design-for-motion/) so that users with motion sensitivity can opt out of animations. On supported platforms (currently only OSX Safari and iOS Safari), users can select "reduce motion" on their operating system preferences and it will turn off CSS transitions for them without any further work required.

## License

Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. I only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That last one is important.
