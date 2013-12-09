#animate-stylus
*Just-add-water CSS animation*

`animate-stylus` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

##Usage
To use animate-stylus in your website, just `@import animate-stylus` and reference the animations you want in your stylesheet. That's it! You've got a CSS animated element. Super!

```stylus
@import 'animate-stylus'

#yourElement
  animation-name: bounceOutLeft
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
```

You can do a whole bunch of other stuff with animate-stylus when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```stylus
.bounceOutLeft
  animation-name: bounce
  animation-duration: 1s;
  animation-fill-mode: both;
```

```javascript
$('#yourElement').addClass('bounceOutLeft');
```

You can also detect when an animation ends:

```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', doSomething());
```

##Include/Exclude Animations
There's no need to make custom builds because with Stylus you can import everything you want, and nothing you don't. For example, if you only use the `slideInDown` animation then don't `@import` the whole library - just `@import 'animate.css/sliders/slideInDown'`. Or, if you want all the sliders, you can `@import 'animate.css/sliders'`.

##Vendor Prefixes
I've left the code unprefixed so you can support whatever browsers you're targeting without having them choosen for you. I recommend using [nib](http://visionmedia.github.io/nib/) or [auto-prefixer](https://github.com/ai/autoprefixer) to add the prefixes.
