<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Arjan Jassal | {{ title || "Front-end Developer Vancouver" }}</title>
		<meta name="description" content="{{ description || "Vancouver based front-end developer, building web apps with JavaScript, CSS, and good ideas." }}">

		<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/assets/css/bundle.css">

		{% include "../partials/favicons.swig" %}

		<meta name="theme-color" content="#dd4056">
		<meta name="google-site-verification" content="GK0yaDwgJ2fsteMI1kxfJcFWn0J8WhLUgK0dA-PzHso" />

		<link rel="canonical" href="https://www.arjanjassal.me/">
	</head>

	<body>
		
		<main class="main">
			{% block content %}{% endblock %}
		</main>

		<script src="/js/bundle.js"></script>

		<script>
			var host = window.location.host;
			var isProduction = host.indexOf('arjanjassal.me') >= 0;

			if (isProduction) {
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-75018733-1', 'auto');
				ga('send', 'pageview');
			}
		</script>
	</body>
</html>