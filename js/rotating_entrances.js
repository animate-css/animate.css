animateCss.rotateIn = function (e) {
    animateCss.cssWithVendor(e, "transform-origin", "center");
    animateCss.cssWithVendor(e, "transform-origin", "rotateX(180deg)");

    $(e).fadeOut(
        {
            duration: 0,
            queue: false
        })
        .fadeIn({
            duration: 700,
            queue: false
        });
    animateCss.transform(e, "rotate", 0, 180, 10, "linear", function() {
        animateCss.transform(e, "rotate", 180, 360, 700, "linear");
    });
}
//need to first flip it then animate it back

animateCss.rotateInDownLeft = function(e){
    animateCss.cssWithVendor(e, "transform-origin", "left bottom");
    $(e).fadeOut(
        {
            duration: 0,
            queue: false
        })
        .fadeIn({
            duration: 900,
            queue: false
        });
    animateCss.transform(e, "rotate", 0, 315, 10, "linear", function () {
        animateCss.transform(e, "rotate", 315, 360, 700, "linear");
    });
}

animateCss.rotateInDownRight = function(e){
    animateCss.cssWithVendor(e, "transform-origin", "right bottom");
    $(e).fadeOut(
        {
            duration: 0,
            queue: false
        })
        .fadeIn({
            duration: 900,
            queue: false
        });
    animateCss.transform(e, "rotate", 0, -315, 10, "linear", function () {
        animateCss.transform(e, "rotate", -315, -360, 700, "linear");
    });
}

animateCss.rotateInUpLeft = function(e){
    animateCss.cssWithVendor(e, "transform-origin", "left bottom");
    $(e).fadeOut(
        {
            duration: 0,
            queue: false
        })
        .fadeIn({
            duration: 900,
            queue: false
        });
    animateCss.transform(e, "rotate", 0, -315, 10, "linear", function () {
        animateCss.transform(e, "rotate", -315, -360, 700, "linear");
    });
}

animateCss.rotateInUpRight = function(e){
    animateCss.cssWithVendor(e, "transform-origin", "right bottom");
    $(e).fadeOut(
        {
            duration: 0,
            queue: false
        })
        .fadeIn({
            duration: 900,
            queue: false
        });
    animateCss.transform(e, "rotate", 0, 315, 10, "linear", function () {
        animateCss.transform(e, "rotate", 315, 360, 700, "linear");
    });
}