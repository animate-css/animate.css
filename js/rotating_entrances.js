animateCss.rotateIn = function(e){
    $(e).fadeOut(0).animate({
        step: function()
    });
}
//need to first flip it then animate it back

/*
animateCss.bounceIn = function (e) {
    $(e).animate({ asdf: 0 },0)
        .animate({asdf: 1}, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', "scale(" + now + ")");
        },
        duration: 1000,
        easing: "easeOutElastic"
    }, "easeOutElastic")
}
*/