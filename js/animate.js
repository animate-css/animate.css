var Animate = function(el) {

	var _api = null,
		_el = el,
		_listeners = {},
		_initialClass = _el.className,
		_self = this;

	/* Adding/removing css classes*/
	var addClass = function(cls){
		if(_el.className.indexOf(cls) === -1)
			_el.className += ' ' + cls;
	}
	var removeClass = function(cls){
		var r = new RegExp(' ?' + cls, 'g')
		_el.className = _el.className.replace(r, '');
	}

	/* Validate element */
	var validateElement = function() {
		if(!_el) {
			throw Error('Element is ' + (typeof _el));
		}
	}

	/* Detecting animation end */
	var getEventName = function() {
	    var a;
	    var animations = {
	      'animation': ['animationend', 'transitionend'],
	      'OAnimation': ['oAnimationEnd', 'oTransitionEnd'],
	      'MozAnimation': ['animationend', 'transitionend'],
	      'WebkitAnimation': ['webkitAnimationEnd', 'webkitTransitionEnd']
	    }
	    for(a in animations){
	        if( el.style[a] !== undefined ){
	            return animations[a];
	        }
	    }
	}
	var registerEndEvent = function() {
		var eventNames = getEventName();
		var handler = function(e) {
			var type = e.animationName || e.propertyName;
			if(type && _listeners[type]) {
				var arr = [];
				for(var i=0; item=_listeners[type][i]; i++) {
					item.callback.apply(_api);					
					if(!item.once) arr.push(item);
				}
				_listeners[type] = arr;
			}
		}
		_el.addEventListener(eventNames[0], handler);
		_el.addEventListener(eventNames[1], handler);
	}

	/* API */
	var add = function(cls, callback) {
		if(callback && typeof callback === 'function') {
			end(cls, callback, true);
		}
		addClass(cls);
		return _api;
	}
	var remove = function(cls) {
		removeClass(cls)
		return _api;
	}
	var removeAll = function() {
		_el.className = _initialClass;
		return _api;
	}
	var end = function(type, callback, once) {
		if(!_listeners[type]) _listeners[type] = [];
		if(typeof callback === 'function') {
			_listeners[type].push({callback: callback, once: once});
		} else if(typeof callback === 'string') {
			_listeners[type].push({callback: function() {
				_api.remove(type).add(callback);
			}, once: true});
		}
		return _api;
	}
	var replace = function(clsA, clsB) {
		remove(clsB).add(clsA);
		return _api;
	}
	var sequence = function() {
		var types = [];
		for(var i=0; i<arguments.length; i++) { types.push(arguments[i]) };
		var type = types.shift();
		add(type, function() {
			remove(type);
			if(types.length > 0) sequence.apply(_self, types);
		});
		return _api;
	}

	/* boot */
	validateElement();
	registerEndEvent();

	return _api = {
		add: add,
		remove: remove,
		end: end,
		removeAll: removeAll,
		sequence: sequence,
		replace: replace
	}
}