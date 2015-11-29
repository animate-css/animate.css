var done = true;
animateCss.fadeIn = function (e) {
    $(e).fadeOut(5).fadeIn(1000);
}

animateCss.fadeInDown = function (e){
    var mt = $(e).css("marginTop");
    var pb = $(e).css("paddingBottom");
    $(e).fadeOut(1);
    $(e).animate({
        marginTop: "-=200",
        paddingBottom: "+=200",
    }, 5, "linear", function () {
        $(e).fadeIn(1500).animate({
            marginTop: mt,
            paddingBottom: pb
        }, {duration: 'slow',queue: false}, "swing",function(){
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
        }, {duration: 'slow',queue: false}, "swing",function(){
                done = true;
    });
    });
}

animateCss.fadeInLeft = function (e){
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).fadeOut(1);
    $(e).animate({
        marginLeft: "-=700",
        paddingRight: "+=700",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInLeftBig = function (e){
    var ml = $(e).css("marginLeft");
    var pr = $(e).css("paddingRight");
    $(e).fadeOut(1);
    $(e).animate({
        marginLeft: "-=1200",
        paddingRight: "+=1200",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginLeft: ml,
            paddingRight: pr
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInRight = function (e){
    var mr = $(e).css("marginRight");
    var pl = $(e).css("paddingLeft");
    $(e).fadeOut(1);
    $(e).animate({
        marginRight: "-=700",
        paddingLeft: "+=700",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginRight: mr,
            paddingLeft: pl
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInRightBig = function (e){
    
}

animateCss.fadeInUp = function (e){
    
}

animateCss.fadeInUpBig = function (e){
    
}