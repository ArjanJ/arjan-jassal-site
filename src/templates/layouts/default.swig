<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Arjan Jassal | {{ title || "Front-end Developer Vancouver" }} </title>

		<meta name="description" content={{ description || "Vancouver based front-end developer, making things awesome with JavaScript, CSS, and lots of tea." }}>

		<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/assets/css/bundle.css">
	</head>

	<body>

		{% include "../partials/header.swig" %}

		{% block content %}{% endblock %}

		{% include "../partials/footer.swig" %}	

		<script src="/js/bundle.js"></script>
	</body>
</html>