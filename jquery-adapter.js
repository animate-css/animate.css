/**
* jQuery animate
* //random in effect
* $("form:first").animate("show" | "hide" | "special" | "[animateClassName]", function(isVisible, className){
*     console.log(this, isVisible, className)
* })
*/
(function($, undefined){
    var Animate = function (el, className, callback) {
        var element = this.$element = $(el),
            animatedClass = "animated " + className,
            animationEndEvents = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend", 
            effects = this.effects,
            isShowing = effects.show.contains(className) || effects.special.contains(className) || false;

        //prepare callback
        callback = callback || $.noop;

        if (this.hasCssAnimations()) {
            //trigger start
            this.$element.trigger($.Event('animate:start', { "isShowing": isShowing, "className": className }));
            //on animate end
            element.on(animationEndEvents, function () {
                var $this = $(this),
                    isVisible = $this.is(':visible');
                //off animation end
                $this.off(animationEndEvents);
                //if showing, remove hide class
                if (!isShowing) { element.addClass("hide").hide(); }
                //remove animatedClass
                element.removeClass(animatedClass);
                //callback
                callback.apply(this, [isVisible, className]);
                //trigger end
                $this.trigger($.Event('animate:end', { "isShowing": isShowing, "className": className }));
            })
            .addClass(animatedClass);
            
            if (isShowing) { element.removeClass("hide").show(); }
        } else {
            //IE fallback
            if (effects.show.contains(className)) {
                element.fadeIn("slow", function () {
                    //callback
                    callback.apply(this, [true, "fadeIn"]);
                    //trigger
                    element.trigger( $.Event('animate:end', { "isShowing": isShowing, "className": className }) );
                });
            } else if (effects.hide.contains(className)) {
                element.fadeOut("slow", function () {
                    //callback
                    callback.apply(this, [false, "fadeOut"]);
                    //trigger
                    element.trigger( $.Event('animate:end', { "isShowing": isShowing, "className": className }) );
                });
            } else if (effects["attention"].contains(className)) {
                element.shake(1, 5, 50).done(function () {
                    //callback
                    callback.apply(this, [$(this).is(':visible'), "shake"]);
                    //trigger
                    element.trigger($.Event('animate:end', {"isShowing": isShowing, "className": className}));
                });
            }
        }
        return this;
    };
    Animate.prototype.hasCssAnimations = function () {
        if (this._hasCssAnimations !== undefined) return this._hasCssAnimations;

        var animation = false,
            animationstring = 'animation',
            keyframeprefix = '',
            domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
            pfx = '',
            elm = document.body;

        if (elm.style.animationName !== undefined) { animation = true; }

        if (animation === false) {
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                    pfx = domPrefixes[i];
                    animationstring = pfx + 'Animation';
                    keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    animation = true;
                    break;
                }
            }
        }
        this._hasCssAnimations = animation;
        return animation;
    };
    Animate.prototype.effects = ["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]
    
    Animate.prototype.effects.show = Animate.prototype.effects.filter(function (className) {
        return /In/g.test(className) ? className : false;
    });
    Animate.prototype.effects.hide = Animate.prototype.effects.filter(function (className) {
        return /Out/g.test(className) ? className : false;
    });
    Animate.prototype.effects.special = Animate.prototype.effects.filter(function (className) {
        return /Out|In/g.test(className) || className === "hinge" ? false : className;
    });

    //overwrite default jquery animate
    $.fn.__animate = $.fn.animate;
    $.fn.animate = function (className, callback, easing, complete) {
        return this.each(function () {
            var $this = $(this);
            //var args = Array.prototype.splice.call(arguments);
            
            var data = $this.data('jquery.animate');
            var effects = Animate.prototype.effects;

            if ($.isArray(className)) className = className.random();
            else if (/show/gi.test(className)) className = effects.show.random();
            else if (/hide/gi.test(className)) className = effects.hide.random();
            else if (/special/gi.test(className)) className = effects.special.random();
            //default call
            else if ($.isPlainObject(className)) 
            {
                //console.log("default animate", className, callback, easing, complete, args, arguments);
                return $this.__animate(className, callback, easing, complete);
            }
            else if (effects.contains(className) == false) throw "Invalid class name: " + className;

            //if (!data) $this.data('jquery.animate', (data = new Animate(this, className, callback)));
            $this.data('jquery.animate', (data = new Animate(this, className, callback)));
            //new Animate(this, className, callback);
        })
    };
    $.fn.animate.Constructor = Animate;
    /**
    * jQuery shake to unsupported browser animations
    */
    $.fn.shake = function (intShakes, intDistance, intDuration) {
        this.each(function () {
            $(this).css("position", "relative");
            for (var x = 1; x <= intShakes; x++) {
                $(this)
                    .animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
                    .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
                    .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
            }
        });
        return this;
    };    
}(window.jQuery));
