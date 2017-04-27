# JavaScript controller

## The initialization

Just include [*animate.js*](https://github.com/krasimir/animate.css/blob/master/js/animate.js) in your HTML and do the following:

    var el = document.querySelector(".your-element-class");
    var controller = Animate(el);

## Adding a class (i.e. starting animation)

    controller
    .add('animated')
    .add('bounceOutLeft')

The *add* method append CSS class to the *className* property of the element. The function also accepts second parameter - handler which is called once the animation finishes.

    controller.add("flipInY", function() {
        alert("flipInY finishes");
    });

## Removing a class (i.e. returning to the initial state)

    controller.remove('bounceOutLeft');

Normally when you use the *Out* methods your element is hidden at the end. If you want to return it to the initial state use *remove* method.

## Catching the end of an animation

All the function in the controller's API return the API itself. This means that you can create a functional chain like for example:

    controller
    .add("rotateOutUpRight")
    .end("rotateOutUpRight", function() {
        alert("rotateOutUpRight");
    });

You may have nested closures and to keep the readability will be good to use the *end* method. It accepts name of a class and handler notifying you about the end of the animation.

Very often I needed to start new animation once another finishes. And instead of doing that in a closure I changed the *end* method a bit. It also accepts a string as a second parameter, which is actually new *Animate.css* class.

    controller
    .add("flipInY")
    .end("flipInY", 'rotateInDownLeft')
    .end("rotateInDownLeft", 'bounceOutDown');

## Removing all the added animation.css classes

Sometimes you will need to remove everything and start adding new classes. The following method could be used:

    controller.removeAll();

## Running animations in sequence

    controller.sequence('flip', 'flipInX', 'flipOutX', 'flipOutY', 'fadeIn', 'fadeInUp');

I think that this method is self-explanatory. Have in mind that every animation class is removed before to add a new one.