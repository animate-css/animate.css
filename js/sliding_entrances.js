
animateCss.slideInUp = function (e){
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).animate({
        marginBottom: "-=95",
        paddingTop: "+=95",
    }, 5, "linear", function () {
        $(e).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 900,queue: false}, "linear",function(){
    });
    });
} 

animateCss.slideInDown = function (e) {
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).animate({
        marginTop: "-=95",
        paddingBottom: "+=95",
    }, 5, "linear", function () {
        $(e).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 900,queue: false}, "linear",function(){
    });
    });
} 

animateCss.slideInLeft = function (e) {
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).animate({
        marginLeft: "-=190",
        paddingRight: "+=190",
    }, 5, "linear", function () {
        $(e).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 900,queue: false}, "linear",function(){
    });
    });
} 

animateCss.slideInRight = function (e) {
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).animate({
        marginRight: "-=190",
        paddingLeft: "+=190",
    }, 5, "linear", function () {
        $(e).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 900,queue: false}, "linear",function(){
    });
    });
} 