animateCss.rotateIn = function(e){
    console.log("called");
    $(e).css('transform-origin','center');
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

animateCss.rotateInDownLeft = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'left bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: 315 }, {
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

animateCss.rotateInDownRight = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'right bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: -315 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}

animateCss.rotateInUpLeft = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'left bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: -315 }, {
    step: function(go) {
      $(this).css('-webkit-transform','rotate('+go+'deg)');
    },
    duration: 10,queue: false, easing: 'linear',
    complete: function(){ 
        $(e).animate({  asdf: -360 }, {
        step: function(go) {
            $(this).css('-webkit-transform','rotate('+go+'deg)');
        },
        duration: 700,queue: false, easing: 'linear',
        complete: function(){ }} 
        );
    }
    });

}

animateCss.rotateInUpRight = function(e){
    console.log("called");
    //$(e).css('-webkit-transform', "rotateX(180deg)");
    $(e).css('transform-origin', 'right bottom');
    $(e).fadeOut(0).fadeIn(900).animate({  asdf: 315 }, {
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