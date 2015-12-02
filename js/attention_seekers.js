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
    //animateCss.fade(e, 0, 250,null, function() {
    //    animateCss.fade(e, 1, 250, null, function () {
    //        animateCss.fade(e, 0, 250, null, function () {
    //            animateCss.fade(e, 1, 250, null, function () {
    //            });
    //        });
    //    });
    //});


    $(e).fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250);
}

animateCss.pulse = function (e) {
        animateCss.transform(e, "scale", 1, 1.05, 500,null, function() {
            animateCss.transform(e, "scale", 1.05, 1, 500);
        });
}

animateCss.shake = function (e) {
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight")
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft")

    $(e)
    .animate({
        marginLeft: "-=10",
        paddingRight: "+=10",
        }, 50).animate({
            marginLeft: "+=10",
            paddingRight: "-=10",
        }, 50)
    .animate({
        marginRight: "-=10",
        paddingLeft: "+=10",
    }, 50).animate({
        marginRight: "+=10",
        paddingLeft: "-=10",
    }, 50)
    .animate({
        marginLeft: "-=10",
        paddingRight: "+=10",
    }, 50).animate({
        marginLeft: "+=10",
        paddingRight: "-=10",
    }, 50)
    .animate({
        marginRight: "-=10",
        paddingLeft: "+=10",
    }, 50).animate({
        marginRight: "+=10",
        paddingLeft: "-=10",
    }, 50)
    .animate({
        marginLeft: "-=10",
        paddingRight: "+=10",
    }, 50).animate({
        marginLeft: "+=10",
        paddingRight: "-=10",
    }, 50)
    .animate({
        marginRight: "-=10",
        paddingLeft: "+=10",
    }, 50).animate({
        marginRight: "+=10",
        paddingLeft: "-=10",
    }, 50)
    .animate({
        marginLeft: "-=10",
        paddingRight: "+=10",
    }, 50).animate({
        marginLeft: "+=10",
        paddingRight: "-=10",
    }, 50)
    .animate({
        marginRight: "-=10",
        paddingLeft: "+=10",
    }, 50).animate({
        marginRight: "+=10",
        paddingLeft: "-=10",
    }, 50)
    .animate({
        marginLeft: "-=10",
        paddingRight: "+=10",
    }, 50).animate({
        marginLeft: "+=10",
        paddingRight: "-=10",
    }, 50)
    .animate({
        marginRight: "-=10",
        paddingLeft: "+=10",
    }, 50).animate({
        marginRight: "+=10",
        paddingLeft: "-=10",
    }, 50)
}