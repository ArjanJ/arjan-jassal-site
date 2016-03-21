{% extends "../layouts/default.swig" %}

{% block content %}

	{% include "home.swig" %}

	{% include "work.swig" %}

	{% include "about.swig" %}

	<footer class="footer">
		<span class="footer__text">Say <a href="mailto:hello@arjanjassal.com">hello@arjanjassal.com</a></span>
	</footer>

	{# {% include "../partials/border.swig" %} #}

{% endblock %}