animateCss.zoomIn = function (e) {
	animateCss.transform(e, "scale", 0.33, 1, 1000, "easeOutQuad", function() {});
}    	

animateCss.zoomInDown = function (e) {
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).animate({
        marginTop: "-=245",
        paddingBottom: "+=245",
    }, 5, "linear", function () {
    	animateCss.transform(e, "scale", 0.1, 1, 750, "easeInQuart", function() {});
        $(e).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 750,queue: false}, "easeInQuart", function(){});
    });
}

animateCss.zoomInLeft = function (e) {
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).animate({
        marginLeft: "-=245",
        paddingRight: "+=245",
    }, 5, "linear", function () {
    	animateCss.transform(e, "scale", 0.1, 1, 750, "easeInQuart", function() {});
        $(e).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 750,queue: false}, "easeInQuart", function(){});
    });
}

animateCss.zoomInRight = function (e) {
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).animate({
        marginRight: "-=245",
        paddingLeft: "+=245",
    }, 5, "linear", function () {
    	animateCss.transform(e, "scale", 0.1, 1, 750, "easeInQuart", function() {});
        $(e).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 750,queue: false}, "easeInQuart", function(){});
    });
}

animateCss.zoomInUp = function (e) {
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).animate({
        marginBottom: "-=245",
        paddingTop: "+=245",
    }, 5, "linear", function () {
    	animateCss.transform(e, "scale", 0.1, 1, 750, "easeInQuart", function() {});
        $(e).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 750,queue: false}, "easeInQuart", function(){});
    });
}