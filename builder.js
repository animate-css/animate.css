/*
	Originally wrote by Igorxp5
 */
$(document).ready(function(){
	/*
		Load all Animate.css effects 
	*/

	var animations = [];

	$('.js--animations option').each(function(index, item){
		//Get option[value]
		var name = $(this).attr('value');

		animations.push(name);

	});

	//Sort animation items alphabetically (A-Z)
	animations.sort();
	animations.reverse();

	/*
		Create checkbox for each animation
	*/

	for ( var a in animations ) {
		var animation = animations[a];

		var $checkGroup = $('<div class="checkbox-group"/>');

		var $checkbox = $('<input id="chk-' + animation + '" type="checkbox" name="' + animation + '" value="' + animation + '" class="input--checkbox">');
		var $span = $('<label for="chk-' + animation + '" class="checkbox--label">' + animation + '</label>');

		$checkGroup.append($checkbox);
		$checkGroup.append($span);

		$('.js--builder').prepend($checkGroup);

	}

	/*
		Build Animate.css
	*/

	var animateCSS = '';
	var outputAnimateCSS = '';
	var outputAnimateCSSMin = '';
	
	$('.js--builder').submit(function(e){

		var selectedAnimation = [];

		$(this).find('.input--checkbox:checked').each(function(){

			var name = $(this).attr('value');

			selectedAnimation.push(name);

		});

		if ( animateCSS.length == 0 ) {

			$.get('https://raw.githubusercontent.com/daneden/animate.css/master/animate.css', function(data){
				animateCSS = data;
				removeUnnecessaryAnimations(selectedAnimation);
			});
			
		} else removeUnnecessaryAnimations(selectedAnimation);

		return false;

		e.preventDefault();
	});

	function removeUnnecessaryAnimations(selectedAnimation) {

		var unnecessaryAnimations = [];

		outputAnimateCSS = animateCSS;

		for ( var a in animations ) {
			var animation = animations[a];

			if ( selectedAnimation.indexOf(animation) == -1 ) {

				unnecessaryAnimations.push(animation);

				var rules = DetectRulesWithName( animation );

				for ( var r in rules ) {

					outputAnimateCSS = outputAnimateCSS.replace(rules[r], '');
				}

			}

		}

		//Replace multiples line breaks to single line
		outputAnimateCSS = outputAnimateCSS.replace(/\n\s*\n/g, '\n');

		//Create AnimateCSSMinify
		outputAnimateCSSMin = outputAnimateCSS.replace(/(?:\r\n|\r|\n)/g, '');
		outputAnimateCSSMin = outputAnimateCSSMin.replace(/\s{2,}/g, ' ');

		Modal(outputAnimateCSS);


	}

	function DetectRulesWithName( name ) {

		var rules = [];

		var re = new RegExp("^((\\@.*" + name + "\\s*\\{[^\\@]*\\}\\s*\\})|(\\." + name + "\\s*\\{[^\\@\\}]*\\}))", "gm");
		var m;
		 
		while ((m = re.exec(animateCSS)) !== null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		    
		    rules.push(m[0]);
		}

		return rules;


	}

	function Modal(code){

		var $overlay = $('<div class="modal__overlay animated fadeIn"/>');
		var $modal = $('<div class="modal__main animated zoomIn"/>');
		var $close = $('<a href="javascript:void(0);" class="modal__close"/>');
		var $code = $('<pre class="modal__code js--code-build" data-status="normal"/>');
		var $triggerMinify = $('<button class="modal__button js--trigger-minify" >Minified</button>');
		var $copyButton = $('<button class="modal__button js--copy-build">Copy to Clipboard</button>');

		//Puting code
		$code.html(code);

		//Add Event OnClicks
		$triggerMinify.click(function(){
			TriggerMinify();
		});

		$copyButton.click(function(){
			CopyToClipboard();
		});

		$close.click(function(){
			$modal.removeClass('zoomIn').addClass('zoomOut');
			$overlay.removeClass('fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$modal.remove();
				$overlay.remove();
			}, 600);
		});

		//Grouping Elements
		$modal.append($close);
		$modal.append($triggerMinify);
		$modal.append($code);
		$modal.append($copyButton);

		//Add to body document
		$('body').append($overlay);
		$('body').append($modal);

		//Show effect
		$overlay.css('display', 'block');
		$modal.css('display', 'block');


    }

    function TriggerMinify() {

    	var statusAvailable = {
    		normal: 'Normal',
    		minified: 'Minified'
    	};

    	var status = $('.js--code-build').data('status');
    	var triggerStatus = ( status == 'normal' ) ? 'minified' : 'normal';

    	$('.js--trigger-minify').text( statusAvailable[status] );

    	var code = ( triggerStatus == 'normal' ) ? outputAnimateCSS : outputAnimateCSSMin;

    	$('.js--code-build').data('status', triggerStatus);

    	$('.js--code-build').text(code);
    }

    function CopyToClipboard() {
    	$('.js--code-build').click();	
    	document.execCommand('copy');
    }

    // Click to ‘select all’ on the PRE element
    $(document).on('click', 'pre', function () {
		var doc = document
            , text = this
            , range, selection
        ;
        if (doc.body.createTextRange) { //ms
            range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { //all others
            selection = window.getSelection();
            range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }

	});

});