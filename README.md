#Animate.less
*Cross-browser CSS3 animation library*

If you're a web hipster, and you're already using Twitter's Bootstrap like a whore, you're gonna love this.

`animate.less`, originally created by [Dan Eden](https://github.com/daneden/animate.css "Dan Eden"), is a bunch of cool, fun, and cross-browser animations converted into LESS for you to use in your Bootstrap projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

##Usage
###Files

`animate.css` is 64kb and `animate.min.css` is 48kb.

### Getting a Copy

You can use bower, npm, or [download a zip](https://github.com/machito/animate.less/archive/master.zip).

#### bower

```
bower --save install animate.less
```

#### npm
```
npm --save install animate.less
```


###Bootstrap/LESS
To use animate.less in your Bootstrap project, simply add the line below into `bootstrap.less`:

```css
@import "<PATH_TO_SOURCE>/animate.less";
```

###Inside your HTML
Add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

For example:

```html
<h1 id="logo" class="animated fadeIn">...</h1>
```

###Inside your stylesheet
Since we're using LESS, we can utilize our animation library by adding `.animated` and any of the many animation names as classes.

For example:

```css
h1#logo {
  float: left;
  font-family: 'Cubano', sans-serif;
  font-weight: normal;
  font-size: 3.5em;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  .animated; // Initiate animation library
  .bounce; // Initiate bounce effect
}
```

*Note: if you're having issues, try re-compiling `bootstrap.less` for changes to take effect.*

###Extending with jQuery
You can add more functionality to your animations with jQuery such as below:

```javascript
$("#logo").addClass('animated bounceOutLeft');
```

We can also bind these classes with events or triggers like below:

```javascript
$(document).ready(function(){
	$("#logo").click(function() {
		$("this").addClass("animated bounceOutLeft");
	});
});
```
###Editing an animation effect
You can

1. change the duration of your animations with the LESS varible `@animationDurationTime`
2. extend the delay with LESS varible `@animationDelayTime`
3. change the animation fill mode with the LESS variable `@animationFillMode` or
4. change the number of times that it plays.

If you do edit an animation effect, make sure you change them cross-browser.

```css
#logo {
	-vendor-animation-duration: 3s; // Change to Webkit, Mozilla, Opera, etc.
	-vendor-animation-delay: 2s;
	-vendor-animation-iteration-count: infinite;
	animation-duration 3s; // Default
	animation-delay: 2s; // Default
 	animation-iteration-count: infinite; // Default
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, ms, o).*

*Note: Safari in Mountain Lion (OS X 10.8) has a display glitch with the Flippers. They may not appear at all until the animation is completed, or the page may have other artifacting. One fix is to add overflow: hidden to the parent div.*

### Build a custom library

Head over to http://daneden.me/animate/build/ to select which animations you need. This will download a .css file, so just rename it to .less and use as described above.

You can also pick & choose which LESS files in your own LESS, just set the variables & import stuff (see animate.less for example):

```less
@animationDurationTime: 0.5s;
@animationDelayTime: 0s;
@animationFillMode: both;
@animationLessLocation: '../node_modules/animate.less/source';

@import "@{animationLessLocation}/animated.less";

@import "@{animationLessLocation}/bounce.less";
@import "@{animationLessLocation}/bounceIn.less";
@import "@{animationLessLocation}/bounceInDown.less";
@import "@{animationLessLocation}/bounceInLeft.less";
@import "@{animationLessLocation}/bounceInRight.less";
@import "@{animationLessLocation}/bounceInUp.less";
@import "@{animationLessLocation}/bounceOut.less";
@import "@{animationLessLocation}/bounceOutDown.less";
@import "@{animationLessLocation}/bounceOutLeft.less";
@import "@{animationLessLocation}/bounceOutRight.less";
@import "@{animationLessLocation}/bounceOutUp.less";
```


###Live demo

View the animation library in action over at http://daneden.me/animate/.

##Browser Support

Since we're using CSS3 here, we're limited to only modern browsers like Chrome, Safari, Mozilla, and Opera.

##License

Animate.css is licensed under the &#9786; license. (http://licence.visualidiot.com/)

##Future Development

I'll shortly be compiling an `animation-library.less` which will allow you to pick and choose which effects you need in your project.

Down the line, IE8/9 support hopefully.

##Learn more

You can learn more about animate.css over at http://daneden.me/animate and Twitter Bootstrap over at http://getbootstrap.com/

##Cheat Sheet

####Attention seekers:
flash
bounce
shake
tada
swing
wobble
wiggle
pulse

####Flippers (currently Webkit, Firefox, &amp; IE10 only):
flip
flipInX
flipOutX
flipInY
flipOutY

####Fading entrances:
fadeIn
fadeInUp
fadeInDown
fadeInLeft
fadeInRight
fadeInUpBig
fadeInDownBig
fadeInLeftBig
fadeInRightBig

####Fading exits:
fadeOut
fadeOutUp
fadeOutDown
fadeOutLeft
fadeOutRight
fadeOutUpBig
fadeOutDownBig
fadeOutLeftBig
fadeOutRightBig

####Bouncing entrances:
bounceIn
bounceInDown
bounceInUp
bounceInLeft
bounceInRight

####Bouncing exits:
bounceOut
bounceOutDown
bounceOutUp
bounceOutLeft
bounceOutRight

####Rotating entrances:
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight

####Rotating exits:
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight

####Lightspeed:
lightSpeedIn
lightSpeedOut

####Specials:
hinge
rollIn
rollOut

## Development

-  Type `npm install` to install the dev tools.
-  Type `npm run build` to build the CSS files. Check out `package.json` to see how to add these tools to your own LESS-based project.
