animateCss.fadeOut = function (e) {
    $(e).fadeOut(1000).fadeIn(1);
}

animateCss.fadeOutDown = function (e){
    var pt = $(e).css("paddingTop");
    var mb = $(e).css("marginBottom");
    console.log(pt);
    $(e).fadeOut(1000).animate({
            paddingTop: "+=100",
            marginBottom: "-=100"
        }, {duration: 1000,queue: false, easing: "swing", complete: fadeOutReset(e,pt,mb)});

}

function fadeOutReset(e,pt,mb){
    return function(){
                console.log(pt);
                $(e).css('paddingTop', pt);
                $(e).css('marginBottom',mb);
                $(e).fadeIn(1);
    }
}

animateCss.fadeOutDownBig = function (e){
    var pt = $(e).css("paddingTop");
    var mb = $(e).css("marginBottom");
    console.log(pt);
    $(e).fadeOut(1000).animate({
            paddingTop: "+=1000",
            marginBottom: "-=1000"
        }, {duration: 900,queue: false, easing: "swing", complete: fadeOutReset(e,pt,mb)});
}

animateCss.fadeOutLeft = function (e){
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

animateCss.fadeOutLeftBig = function (e){
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

animateCss.fadeOutRight = function (e){
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

animateCss.fadeOutRightBig = function (e){
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

animateCss.fadeOutUp = function (e){
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

animateCss.fadeOutUpBig = function (e){
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