var done = true;
animateCss.fadeIn = function (e) {
    $(e).fadeOut(5).fadeIn(1000);
}

animateCss.fadeInDown = function (e){
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).fadeOut(1);
    $(e).animate({
        marginTop: "-=90",
        paddingBottom: "+=90",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });

}

animateCss.fadeInDownBig = function (e){
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).fadeOut(1)
    $(e).animate({
        marginTop: "-=2000",
        paddingBottom: "+=2000",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 910,queue: false}, "swing",function(){
                done = true;
    });
    });
}

animateCss.fadeInLeft = function (e){
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).fadeOut(1);
    $(e).animate({
        marginLeft: "-=200",
        paddingRight: "+=200",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 900,queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInLeftBig = function (e){
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).fadeOut(1);
    $(e).animate({
        marginLeft: "-=1500",
        paddingRight: "+=1500",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 900,queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInRight = function (e){
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).fadeOut(1);
    $(e).animate({
        marginRight: "-=200",
        paddingLeft: "+=200",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 900,queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInRightBig = function (e){
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).fadeOut(1);
    $(e).animate({
        marginRight: "-=1500",
        paddingLeft: "+=1500",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 900,queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInUp = function (e){
    var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).fadeOut(1);
    $(e).animate({
        marginBottom: "-=90",
        paddingTop: "+=90",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 1000,queue: false}, "swing",function(){
    });
    });
} 

animateCss.fadeInUpBig = function (e){
        var mb = $(e).css("marginBottom");
    var pt = $(e).css("paddingTop");
    $(e).fadeOut(1);
    $(e).animate({
        marginBottom: "-=2000",
        paddingTop: "+=2000",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginBottom: mb,
            paddingTop: pt
        }, {duration: 910,queue: false}, "swing",function(){
    });
    });
}