var done = true;
animateCss.fadeIn = function (e) {
    $(e).fadeOut(5).fadeIn(1000);
}

animateCss.fadeInDown = function (e){
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom");
    $(e).animate({
        marginTop: "-=200",
        paddingBottom: "+=200",
    }, 5, "linear", function () {
        $(e).fadeOut(5).fadeIn(1500).animate({
            marginTop: mt,
            paddingBottom: mb
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });

}

animateCss.fadeInDownBig = function (e){
    var mt = $(e).css("marginTop");
    var mb = $(e).css("paddingBottom");
    $(e).fadeOut(1)
    $(e).animate({
        marginTop: "-=2000",
        paddingBottom: "+=2000",
    }, 1, "linear", function () {
        $(e).fadeIn(1000).animate({
            marginTop: mt,
            paddingBottom: mb
        }, {duration: 'slow',queue: false}, "swing",function(){
                done = true;
    });
    });
}

animateCss.fadeInLeft = function (e){
    var mt = $(e).css("marginLeft");
    var mb = $(e).css("paddingRight");
    $(e).animate({
        marginLeft: "-=700",
        paddingRight: "+=700",
    }, 1, "linear", function () {
        $(e).fadeOut(5).fadeIn(1000).animate({
            marginLeft: mt,
            paddingRight: mb
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInLeftBig = function (e){
    var mt = $(e).css("marginLeft");
    var mb = $(e).css("paddingRight");
    $(e).animate({
        marginLeft: "-=1200",
        paddingRight: "+=1200",
    }, 1, "linear", function () {
        $(e).fadeOut(5).fadeIn(1000).animate({
            marginLeft: mt,
            paddingRight: mb
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInRight = function (e){
    
}

animateCss.fadeInRightBig = function (e){
    
}

animateCss.fadeInUp = function (e){
    
}

animateCss.fadeInUpBig = function (e){
    
}