animateCss.bounce = function (e) {
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom")
    $(e).animate({
        marginTop: "-=30",
        paddingBottom: "+=30",
    }, 300, "easeInOutQuart", function () {
        $(e).animate({
            marginTop: mt,
            paddingBottom: mb
        }, 800, "easeOutBounce")
    })
}

animateCss.flash = function (e) {
    $(e).fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250);
}