var animateCss = {}
animateCss.useJs = false;

(function ($) {

    $.fn.animateCss = function (animation, usejs) {
        if (usejs == null ? animateCss.useJs : usejs) {
            //console.log("We will now use javascript to show " + animation + " animation.")
            window["animateCss"][animation](this);
        } else {
            //console.log("We will now use css to show " + animation + " animation.")
            this.removeClass().addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass(animation + ' animated');
            });
        }
    }

}(jQuery));
