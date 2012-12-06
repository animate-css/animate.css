( function($) {

    //	Requires jQuery and animate.css

    var animate = function(parent, el, animation) {

      //  animation dependent upon: http://daneden.me/animate/
      parent.find(el).addClass('animated ' + animation);

    };

    //	use like this
    var heroAnimations = function() {

      var hero = $('.hero');

      animate(hero, '.content > *', 'fadeInLeft');

    };

    return {

      animate : animate

    }

  }(jQuery)); 