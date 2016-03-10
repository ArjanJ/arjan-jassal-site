{% extends "../layouts/default.swig" %}

{% block content %}

	<section class="home">
		<article class="u-wrapper">
			<h1 class="home__heading"><span>Arjan Jassal</span> — Vancouver based front-end developer and designer.</h1>
		</article>
	</section>

	<section class="work" id="work">
		<ul class="work__list">
			<li class="work__list-item work-item">
				<div class="u-wrapper">
					<h2 class="work-item__title">Bricks</h2>
					<p>Create justified image layouts like Google Images and Flickr.</p>
					<a class="work-item__button" href="https://github.com/ArjanJ/bricks" target="_blank">Github</a>
					<a class="work-item__button" href="http://bricks.arjanjassal.me/" target="_blank">Live</a>
				</div>
			</li>
			<li class="work__list-item work-item">
				<div class="u-wrapper">
					<h2 class="work-item__title">Readit</h2>
					<p>View subreddit posts and comments from Reddit with this React app.</p>
					<a target="_blank" class="work-item__button" href="https://github.com/ArjanJ/readit">Github</a>
					<a target="_blank" class="work-item__button" href="https://fierce-fortress-81623.herokuapp.com/">Live</a>
				</div>
			</li>
			<li class="work__list-item work-item">
				<div class="u-wrapper">
					<h2 class="work-item__title">Abby</h2>
					<p>A lightweight HTML/CSS boilerplate customizable with SCSS.</p>
					<a target="_blank" class="work-item__button" href="https://github.com/ArjanJ/abby">Github</a>
					<a target="_blank" class="work-item__button" href="http://abby.arjanjassal.me/">Live</a>
				</div>
			</li>
		</ul>
	</section>

	<section class="about" id="about">
		<div class="about__image"></div>
		<article class="about__article">
			<div class="u-wrapper">
				<h1>About me</h1>
				<p>My name's Arjan Jassal, I'm a front-end developer currently living in Vancouver. I strive to provide users with well-crafted, simple, and intuitive web experiences that help accomplish goals.</p>

				<p>Having graduated from New Media Design &amp; Web Development in 2014, I know front-end development involves much more than writing JavaScript, CSS, and HTML; it's where all divisions of the digital process come together as one entity known as a website. I believe it's my job to deliver an engaging user-experience, striking design, and code that performs fast and bug free.</p>
			</div>
		</article>
	</section>

{% endblock %}