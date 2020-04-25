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

element.addEventListener('animationend', function () {
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
animateCSS('.my-element', 'animate__bounce', function () {
  // Do something after animation
});
```

Notice that the examples are using ES6's `const` declaration, dropping support for IE10 and some aging browsers. If you prefer, switch the `const` to `var` declarations and IE10 and some old browsers will get support (they still have to provide [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) support, so do your [research](https://caniuse.com/#feat=classlist)).
