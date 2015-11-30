
animateCss.slideInUp = function (e){
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).animate({
        marginBottom: "-=90",
        paddingTop: "+=90",
    }, 5, "linear", function () {
        $(e).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
} 

animateCss.slideInDown = function (e) {
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).animate({
        marginTop: "-=90",
        paddingBottom: "+=90",
    }, 5, "linear", function () {
        $(e).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
} 

animateCss.slideInLeft = function (e) {
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).animate({
        marginLeft: "-=90",
        paddingRight: "+=90",
    }, 5, "linear", function () {
        $(e).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
} 

animateCss.slideInRight = function (e) {
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).animate({
        marginRight: "-=90",
        paddingLeft: "+=90",
    }, 5, "linear", function () {
        $(e).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
} 