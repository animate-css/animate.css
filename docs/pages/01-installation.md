## Installation and usage

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
