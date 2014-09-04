<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);

		html, body { height: 100%; }

		body {
			width: 100%; /* needed for FF */
			margin: 0;
			font-family:'Lato', sans-serif;
			text-align:center;
			color: #999;
			
			/* Flexbox hawtness */
			display: flex;
			align-items: center;
		}

		.file {
			
			margin: 1em auto;
			text-align: center;
		}

		.file h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}

		.downloadButton {
			-moz-box-shadow: 0px 10px 14px -7px #3e7327;
			-webkit-box-shadow: 0px 10px 14px -7px #3e7327;
			box-shadow: 0px 10px 14px -7px #3e7327;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #77b55a), color-stop(1, #72b352));
			background:-moz-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-webkit-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-o-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-ms-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#77b55a', endColorstr='#72b352',GradientType=0);
			background-color:#77b55a;
			-moz-border-radius:4px;
			-webkit-border-radius:4px;
			border-radius:4px;
			border:1px solid #4b8f29;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:arial;
			font-size:28px;
			font-weight:bold;
			padding:17px 35px;
			text-decoration:none;
			text-shadow:0px 1px 0px #5b8a3c;
		}
		.downloadButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #72b352), color-stop(1, #77b55a));
			background:-moz-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-webkit-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-o-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-ms-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#72b352', endColorstr='#77b55a',GradientType=0);
			background-color:#72b352;
		}
		.downloadButton:active {
			position:relative;
			top:1px;
		}

		.downloadButton {
			-moz-box-shadow: 0px 10px 14px -7px #3e7327;
			-webkit-box-shadow: 0px 10px 14px -7px #3e7327;
			box-shadow: 0px 10px 14px -7px #3e7327;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #77b55a), color-stop(1, #72b352));
			background:-moz-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-webkit-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-o-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:-ms-linear-gradient(top, #77b55a 5%, #72b352 100%);
			background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#77b55a', endColorstr='#72b352',GradientType=0);
			background-color:#77b55a;
			-moz-border-radius:4px;
			-webkit-border-radius:4px;
			border-radius:4px;
			border:1px solid #4b8f29;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:arial;
			font-size:28px;
			font-weight:bold;
			padding:17px 35px;
			text-decoration:none;
			text-shadow:0px 1px 0px #5b8a3c;
		}
		.downloadButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #72b352), color-stop(1, #77b55a));
			background:-moz-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-webkit-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-o-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:-ms-linear-gradient(top, #72b352 5%, #77b55a 100%);
			background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#72b352', endColorstr='#77b55a',GradientType=0);
			background-color:#72b352;
		}
		.downloadButton:active {
			position:relative;
			top:1px;
		}

		.shareButton {
			-moz-box-shadow: 0px 10px 14px -7px #5D6FFF;
			-webkit-box-shadow: 0px 10px 14px -7px #5D6FFF;
			box-shadow: 0px 10px 14px -7px #5D6FFF;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));
			background:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
			background:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
			background:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
			background:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
			background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
			background-color:#2dabf9;
			-moz-border-radius:4px;
			-webkit-border-radius:4px;
			border-radius:4px;
			border:1px solid #5D6FFF;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:arial;
			font-size:28px;
			font-weight:bold;
			padding:17px 35px;
			text-decoration:none;
			text-shadow:0px 1px 0px #263666;
		}
		.shareButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));
			background:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
			background:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
			background:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
			background:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
			background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
			background-color:#0688fa;
		}
		.shareButton:active {
			position:relative;
			top:1px;
		}


		a {
			text-decoration: none;
			color: #000;
		}

		div.buttons {
			margin-top: 50px; 
			<?php if($seconds > 0) : ?>margin-bottom: 50px;<?php endif; ?>
		}

		

	</style>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	<script src="/scripts/countdown/countdown.js"></script>

	<script type="text/javascript" src="/scripts/colorbox/colorbox-min.js"></script>
	<link rel="stylesheet" type="text/css" href="/scripts/colorbox/colorbox.css" />
	<script>
        jQuery(document).ready(function () {
            jQuery('a.pdf').colorbox({iframe:true, opacity:0.8, maxWidth: "90%", maxHeight: "90%", scalePhotos: true });
        });
    </script>

</head>
<body>
	<div class="file">
		<a class='pdf' href=<?php echo $path;?>><img src='/images/pdf.png'></a>
		<h1><?php echo $name?></h1>
		<div class"buttons" style="margin-top: 50px">
			<a href=<?php echo $path?> class="downloadButton" download>DOWNLOAD</a>
			<span style="margin-left: 30px;"><a href=<?php echo $path?> class="shareButton" download>SHARE</a></span>
		</div>
		<?php if($seconds > 0) : ?>
			<h1 style="margin-bottom: 10px;">TIME LEFT</h1>
			<script>var myCountdown1 = new Countdown({	
				rangeHi: "hour", 
			 	time:<?php echo $seconds; ?>,
			 	inline: true,
			    numbers		: 	{
				font 	: "Lato",
				color	: "#FFFFFF",
				bkgd	: "#000000",
				rounded	: 0.15,				
				shadow	: {
							x : 0,			
							y : 3,			
							s : 4,			
							c : "#000000",	
							a : 0.4			
							}
				},	
				labels		: 	{
				font 	: "Lato",
				color	: "#000000",
				weight	: "normal",
				offset  : 5,
				textScale : 1.0	
				}	
			});
			</script>
		<?php endif; ?>
	</div>


</div>
</body>
</html>
