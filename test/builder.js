$(document).ready(function(){
	/*
		Load all Animate.css effects 
	*/

	var animations = [];

	$('.js--animations option').each(function(){
		//Get option[value]
		var name = $(this).attr('value');

		animations.push(name);

	});

	/*
		Create checkbox for each animation
	*/

	for ( var a in animations ) {
		var animation = animations[a];

		var $checkGroup = $('<div class="checkbox-group"/>');

		var $checkbox = $('<input id="chk-' + animation + '" type="checkbox" name="' + animation + '" value="' + animation + '" class="input--checkbox">');
		var $label = $('<label for="chk-' + animation + '" class="checkbox--check"/>');
		var $span = $('<label for="chk-' + animation + '" class="checkbox--label">' + animation + '</label>');

		$checkGroup.append($checkbox);
		$checkGroup.append($label);
		$checkGroup.append($span);

		$('.js--builder button').before($checkGroup);

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

		var outputAnimateCSS = animateCSS;

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

		//PopUp(outputAnimateCSS);
		console.log(outputAnimateCSS);



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

	function PopUp(code){

		var newWindow = window.open("","Test","width=800,height=500,scrollbars=1,resizable=1");

		//read code from textbox placed in parent window
		var html = "<html><head></head><body><pre>" + code + "</pre></body></html>";


		newWindow .document.open();
		newWindow .document.write(html);
		newWindow .document.close;
    }

});