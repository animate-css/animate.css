animateCss.rotateIn = function(e){
    console.log("called");
    $(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).fadeOut(0).fadeIn(700).animate({  asdf: 180 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: 360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}
//need to first flip it then animate it back

/*
animateCss.bounceIn = function (e) {
    $(e).animate({ asdf: 0 },0)
        .animate({asdf: 1}, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', "scale(" + now + ")");
        },
        duration: 1000,
        easing: "easeOutElastic"
    }, "easeOutElastic")
}

$('#myDiv').animate({ textIndent: 0 }, {
    step: function(go) {
      $(this).css('-moz-transform','rotate('+go+'deg)');
      $(this).css('-webkit-transform','rotate('+go+'deg)');
      $(this).css('-o-transform','rotate('+go+'deg)');
      $(this).css('transform','rotate('+go+'deg)');
    },
    duration: 500,
    complete: function(){ alert('done') }
});
*/