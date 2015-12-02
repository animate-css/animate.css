animateCss.bounceOut = function (e) {
    animateCss.transform(e, "scale", 1, 0.9, 70, null, function() {
        animateCss.transform(e, "scale", 0.9, 0, 650, "easeInBack");
    });
}
animateCss.bounceOutDown = function (e) {
    var mt = $(e).css("marginBottom");
    var mb = $(e).css("paddingTop")
    $(e).animate({
        marginBottom: "-=20",
        paddingTop: "+=20",
    }, 100, "swing")
    .animate({
        marginBottom: "+=20",
        paddingTop: "-=20",
    }, 100, "swing")
    .delay(100)
    .animate({
        marginBottom: "-=1000",
        paddingTop: "+=1000",
    }, 700, "swing")
    .animate({
        marginBottom: mt,
        paddingTop: mb
    }, 0)
}
animateCss.bounceOutLeft = function (e) {
    var mt = $(e).css("marginLeft");
    var mb = $(e).css("paddingRight")
    $(e).animate({
        marginLeft: "-=1000",
        paddingRight: "+=1000",
    }, 1000, "easeInBack")
    .animate({
        marginLeft: mt,
        paddingRight: mb
    }, 0)
}
animateCss.bounceOutRight = function (e) {
    var mt = $(e).css("marginRight");
    var mb = $(e).css("paddingLeft")
    $(e).animate({
        marginRight: "-=1000",
        paddingLeft: "+=1000",
    }, 1000, "easeInBack")
    .animate({
        marginRight: mt,
        paddingLeft: mb
    }, 0)
}
animateCss.bounceOutUp = function (e) {
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom")
    $(e).animate({
        marginTop: "-=20",
        paddingBottom: "+=20",
    }, 100, "swing")
    .animate({
        marginTop: "+=20",
        paddingBottom: "-=20",
    }, 100, "swing")
    .delay(100)
    .animate({
        marginTop: "-=1000",
        paddingBottom: "+=1000",
    }, 700, "swing")
    .animate({
        marginTop: mt,
        paddingBottom: mb
    }, 0)
}