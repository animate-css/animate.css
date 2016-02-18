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

});