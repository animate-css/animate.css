# Animate Stylus
*Just-add-water CSS animation*

`animate-stylus` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Usage
To use animate-stylus in your website, just `@import animate-stylus` and reference the animations you want in your style-sheet. That's it! You've got a CSS animated element. Super!

```stylus
@import 'animate-stylus'

#yourElement
  animation-name: bounceOutLeft
  animation-duration: 3s
  animation-delay: 2s
  animation-iteration-count: infinite
```

You can do a whole bunch of other stuff with animate-stylus when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```stylus
.bounceOutLeft
  animation-name: bounce
  animation-duration: 1s
  animation-fill-mode: both
```

```javascript
$('#yourElement').addClass('bounceOutLeft');
```

You can also detect when an animation ends:

```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', doSomething());
```

##Include/Exclude Animations
There's no need to make custom builds because with Stylus you can import everything you want, and nothing you don't. For example, if you only use the `slideInDown` animation then don't `@import` the whole library - just `@import 'animate-stylus/sliders/slideInDown'`. Or, if you want all the sliders, you can `@import 'animate-stylus/sliders/*'`. See the Stylus Docs for an explanation of [file globbing](http://learnboost.github.io/stylus/docs/import.html#file-globbing).

##Vendor Prefixes
I've left the code unprefixed so you can support whatever browsers you're targeting without having them chosen for you. I recommend using [nib](http://visionmedia.github.io/nib/) or [auto-prefixer](https://github.com/ai/autoprefixer) to add the prefixes.

##Adding Animations with Class Names
First off, making classes like `.bounce` is [unsemantic](http://css-tricks.com/semantic-class-names/) because it states the style (which is the job of CSS), rather than describing what the element is. Your HTML is for content, and your CSS is for style - thus, class names (a feature of HTML) should describe the content, not the style.

But I suppose you don't really care about proper semantics, or you wouldn't be trying to do this. So, if you're really determined, you can add this:

```stylus
//list of animations that we are using
animations = (bounce slideInDown slideOutUp)

.animated
  animation-duration: 1s
  animation-fill-mode: both

for animation_name in animations
  .{animation_name}
    @extends .animated
    animation-name: animation_name
```

And then adding animations to elements with class names will work:

```html
<div class="bounce">This is bouncing</div>
```

##What if I don't use Stylus?
Well, I feel very sorry for you because you are missing out on something great. But, you can still use this animation library - just compile `index.styl` and you'll get a big CSS file (called `index.css`) that you can use:

```bash
$ npm install stylus -g
$ cd directory/this/repo/is/in
$ stylus ./
```
