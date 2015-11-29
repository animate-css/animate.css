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
animateCss.bounceInDown = function (e) {
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom")
    $(e).animate({
        marginTop: "-=1000",
        paddingBottom: "+=1000",
    }, 0)
    .animate({
        marginTop: mt,
        paddingBottom: mb
    }, 1000, "easeOutBounce")
}
animateCss.bounceInLeft = function (e) {
    var mt = $(e).css("marginLeft");
    var mb = $(e).css("paddingRight")
    $(e).animate({
        marginLeft: "-=1000",
        paddingRight: "+=1000",
    }, 0)
    .animate({
        marginLeft: mt,
        paddingRight: mb
    }, 1000, "easeOutBounce")
}
animateCss.bounceInRight = function (e) {
    var mt = $(e).css("marginRight");
    var mb = $(e).css("paddingLeft")
    $(e).animate({
        marginRight: "-=1000",
        paddingLeft: "+=1000",
    }, 0)
    .animate({
        marginRight: mt,
        paddingLeft: mb
    }, 1000, "easeOutBounce")
}
animateCss.bounceInUp = function (e) {
    var mt = $(e).css("marginBottom");
    var mb = $(e).css("paddingTop")
    $(e).animate({
        marginBottom: "-=1000",
        paddingTop: "+=1000",
    }, 0)
    .animate({
        marginBottom: mt,
        paddingTop: mb
    }, 1000, "easeOutBounce")
}