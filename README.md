#Animate.less
*Cross-browser CSS3 animation library*

If you're a web hipster, and you're already using Twitter's Bootstrap like a whore, you're gonna love this.

`animate.less`, originally created by [Dan Eden](https://github.com/daneden/animate.css "Dan Eden"), is a bunch of cool, fun, and cross-browser animations converted into LESS for you to use in your Bootstrap projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

##Usage
###Files

`animate.less` is 60kb and `animate.min.less` is 48kb.

`bootstrap.less` file a straightforward example of how to implement this library with your Bootstrap project.

`animate.css` is 61kb and is an original copy by Dan Eden.


###Bootstrap
To use animate.less in your Bootstrap project, simply add the line below into `bootstrap.less`:

```css
@import "animate.less";
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
  .animated; // Attach animation library
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
You can 1) change the duration of your animations, 2) extend the delay, or 3) change the number of times that it plays. If you do edit an animation effect, make sure you change them cross-browser.

```css
#logo {
	-vendor-animation-duration: 3s; // Change to Webkit, Mozilla,
	-vendor-animation-delay: 2s;
	-vendor-animation-iteration-count: infinite;
	animation-duration 3s; // Default
	animation-delay: 2s; // Default
 	animation-iteration-count: infinite; // Default
}
```
###Live demo

View the animation library in action over at http://daneden.me/animate/

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, ms, o).*

*Note: Safari in Mountain Lion (OS X 10.8) has a display glitch with the Flippers. They may not appear at all until the animation is completed, or the page may have other artifacting. One fix is to add overflow: hidden to the parent div.*

##License
Animate.css is licensed under the &#9786; license. (http://licence.visualidiot.com/)

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
