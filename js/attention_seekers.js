animateCss.bounce = function (e) {
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom")
    $(e).animate({
        marginTop: "-=30",
        paddingBottom: "+=30",
    }, 250, "easeInOutQuart")
    .animate({
        marginTop: mt,
        paddingBottom: mb
    }, 750, "easeOutBounce")
}

animateCss.flash = function (e) {
    $(e).fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250);
}

animateCss.pulse = function (e) {
    var mh  = $(e).css("height");
    var mw = $(e).css("width");
    console.log(mh);
    console.log(mw);
    $(e).animate({
        height: mh * 0.5,
        width: mw * 0.5
    }, 500)
    .animate({
        height: mh,
        width: mw
    }, 500)
}