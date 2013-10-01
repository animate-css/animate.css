<?php
	$files = scandir('source');
	$nav = array();
	$toc;
	$legal;
	$shared;
	$css;
	$combined;
	$minified;
	
	/*	Create the Table of Contents
		We'll add the animations to it as we iterate through the
	 	source files, then we'll shore it up after we're done iterating
	*/
	$toc = 
		"/*------------------------------------*\\\n" .
		"\tCONTENTS\n" .
		"\\*------------------------------------*/\n" .
		"/*------------------------------------*\\\n" .
		"\tlegalese\t\tLicensure, Copyright, and other legal mumbo jumbo\n" .
		"\tshared\t\tStyles shared across all animations, may be bugfixes or just optimizations\n" .
		"\tanimations\tAll animations\n";
	
	foreach ($files as $f) {
		if ($f === 'legal.css') {
			$legal =
				"\n\n\n\n\n\n" .
				"/*------------------------------------*\\\n" .
				"\t\$legal\n" .
				"\\*------------------------------------*/\n" .
				file_get_contents('source/' . $f);
		
		} else if ($f === 'shared.css') {
			$shared =
				"\n\n\n\n\n\n" .
				"/*------------------------------------*\\\n" .
				"\t\$shared\n" .
				"\\*------------------------------------*/\n" .
				file_get_contents('source/' . $f);
		
		} else if ($f !== '.' && $f !== '..') {
			// Get the name of the animation
			$name = str_replace('.css', '', $f);
			
			// Get the contents of the file
			$content = file_get_contents('source/' . $f);
			
			// Remove comments
			$content = preg_replace('/(\.\w+)/', '.animated${1}', $content);
			
			// Add animation to the ToC
			$toc .= "\t\t" . $name . "\n";
			
			// Add animation header and content to the final output
			$css .=
				"\n\n\n\n\n\n" .
				"/*------------------------------------*\\\n" .
				"\t\$" . $name . "\n" .
				"\\*------------------------------------*/\n" .
				$content;
			
			$nav[$f] = array(
				'animName' => $name,
				'fileName' => $f
			);
		};
	};
	
	// Shore up the Table of Contents
	$toc .= "\\*------------------------------------*/";
	
	// Pull together all the source pieces
	$combined = $toc . $legal . $shared . $css;
	
	// Minify the source. Removes all spaces, tabs, newlines, comments, and trailing semicolons
	$minified = preg_replace(array('/\s|\t|\n/', '/\/\*.*?\*\//', '/;}/'), array('', '', '}'), $combined);
	
	// Rebuild the source if the button was clicked
	if (isset($_POST['rebuild'])) {
		// Update the source files
		$files = array(
			array(
				'name'=>'animate.css',
				'type'=>'combined'
			),
			array(
				'name'=>'animate.min.css',
				'type'=>'minified'
			)
		);
		
		foreach($files as $f) {
			// If the file currently exists, delete it
			if (file_exists($f['name'])) { unlink($f['name']); };
			
			// Attempt to open a new version of the file
			if (!$handle = fopen($f['name'], 'a')) {
				echo 'Couldn\'t open ' . $f['name'] . '.';
			} else {
				// Attempt to write the new contents to the file
				if (fwrite($handle,$$f['type']) === false) {
					echo 'Couldn\'t write to ' . $f['name'] . '.';
				};
			};
			
			// Close the file and movew on to the next one
			fclose($handle);
		};
	};
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link rel="stylesheet" type="text/css" href="animate.css">
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Raleway:100,400,700">
<style type="text/css">
/* Meyerweb Reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{	margin:0;	padding:0;	border:0;	font-size:100%;	font:inherit;	vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{	display:block;}body{	line-height:1;}ol,ul{	list-style:none;}blockquote,q{	quotes:none;}blockquote:before,blockquote:after,q:before,q:after{	content:'';	content:none;}table{	border-collapse:collapse;	border-spacing:0;}

* {
	   -moz-box-sizing:border-box;
	    -ms-box-sizing:border-box;
	     -o-box-sizing:border-box;
	-webkit-box-sizing:border-box;
	        box-sizing:border-box;
}

html,body {
	font-family:Raleway,Helvetica Neue,Helvetica,sans-serif;
	font-size:1rem;
	-webkit-font-smoothing:antialiased;
	font-smooth:always;
	height:100%;
	padding:.9rem;
	width:100%;
}

.notification {
	background:#000;
	border-bottom:1px dashed #c8e4f1;
	color:#eee;
	display:block;
	left:0;
	margin-bottom:2rem;
	padding:2rem;
	position:relative;
	right:0;
	text-align:center;
	top:0;
	z-index:100;
}

nav {
	float:left;
	height:100%;
	margin-right:1%;
	overflow:auto;
	width:19%;
}

input[type=submit] {
	border:none;
	font-family:Raleway,Helvetica Neue,Helvetica,sans-serif;
	font-size:1rem;
	margin:0;
}

input[type=submit], li {
	background:#e4f1f8;
	border-bottom:1px dashed #c8e4f1;
	color:#444;
	cursor:pointer;
	display:block;
	padding:1rem .5rem;
	text-align:left;
	width:100%;
}

li:nth-of-type(odd) {
	background:#f1f8fc;
}

li ul {
	max-height:0;
	overflow:hidden;
	transition:all 1.5s;
}

li:hover ul {
	max-height:9999px;
}

section {
	float:left;
	height:100%;
	overflow:auto;
	overflow-x:hidden;
	position:relative;
	width:80%;
	z-index:1;
}

.loading.section:before {
	background:rgba(255,255,255,.5);
	bottom:0;
	content:'';
	display:block;
	left:0;
	position:absolute;
	right:0;
	top:0;
}

pre {
	font-family:Consolas, "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", Monaco, "Courier New", monospace;
	font-size:.9rem;
	white-space:pre-wrap;
}
</style>
</head>

<body class="animated">
	<nav>
		<form method="post" action="build.php"><input type="submit" name="rebuild" value="Rebuild the Source"></form>
		<ul>
			<li data-href="animate.css">Full Source</li>
			<li data-href="animate.min.css">Minified Source</li>
			<li>Animations<ul>
				<?php foreach ($nav as $li) { ?><li data-href="source/<?php echo $li['fileName']; ?>"><?php echo $li['animName']; ?></li><?php }; ?>
			</ul></li>
		</ul>
	</nav>
	<section><?php if (isset($_POST['rebuild'])) { ?><div class="notification rebuilt">The source has been rebuilt.</div><?php };?><pre><?php echo $combined; ?></pre></section>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript">$(document).ready(function(){
		var	$section = $('section'),
			$notification = $('.notification')
		
		if ($notification) {
			$notification.slideDown('fast').delay(2000).slideUp('fast')
		}
		
		$('li').click(function(){
			if ($(this).attr('data-href')) {
				$section.addClass('loading')
				$.ajax({
					url:$(this).attr('data-href')
				}).done(function(response){
					$section.children('pre').empty().append(response).end().removeClass('loading')
				})
			}
		})
	});</script>
</body>
</html>