{% extends "../layouts/default.swig" %}

{% set title = "Error 404" %}

{% set description = "This page does not exist. Arjan Jassal's portfolio is located at https://www.arjanjassal.me/" %}

{% block content %}

	<section class="error">
		<div class="u-wrapper">
			<h1>You 404'd it man.</h1>
			<p class="u-heading-3">Were you looking for <a href="/" class="home__link">Arjan Jassal's</a> portfolio?</p>
		</div>
	</section>

{% endblock %}