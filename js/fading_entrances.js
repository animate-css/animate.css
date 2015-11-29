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
    $(e).animate({
        marginTop: "-=2000",
        paddingBottom: "+=2000",
    }, 5, "linear", function () {
        $(e).fadeOut(5).fadeIn(1000).animate({
            marginTop: mt,
            paddingBottom: mb
        }, {duration: 'slow',queue: false}, "swing",function(){
    });
    });
}

animateCss.fadeInLeft = function (e){
    
}

animateCss.fadeInLeftBig = function (e){
    
}

animateCss.fadeInRight = function (e){
    
}

animateCss.fadeInRightBig = function (e){
    
}

animateCss.fadeInUp = function (e){
    
}

animateCss.fadeInUpBig = function (e){
    
}