module.exports = {
	bricks: {
		title: 'Bricks',
		tagline: 'Create justified image layouts like Google Images and Flickr.',
		client: 'Myself',
		whatIDid: 'Write a JavaScript plugin that allows you to create a responsive image layout where the images fit together like bricks.',
		description: 'Bricks allows you to take a group of images that are all different dimensions and fit them into a grid without distorting the aspect ratio of the image and fill up any gaps between or around the images. This type of image layout is commonly seen on Google Images and Flickr, my aim was to create a plugin with no dependencies and enough options to be able to fit into any project.',
		github: 'https://github.com/ArjanJ/bricks',
		live: 'http://bricks.arjanjassal.me/',
		tech: ['HTML5', 'CSS3, SCSS', 'JavaScript (ECMAScript 6)', 'Gulp'],
		process:[
			'<h3 class="u-heading-6">01. Research</h3>',
			'<p>The reason behind creating this project was due to searching for a plugin that could accomplish this kind of layout without depending on JQuery as well as having a lot of options for customization. I ended up finding a plugin that relied on JQuery but had great customizablity, and a plugin with no dependencies but no customizablity (without modifying the source). Naturally, this made me want to take the best aspects of both plugins and create my own.</p>',
			'<h3 class="u-heading-6">02. Setup</h3>',
			'<p>For small projects like this I believe it is important to keep the architecture and workflow simple while still being maintainable and efficient to work on.</p>',
			'<p>I tend to use new projects as opportunities to learn at least one new thing, for Bricks it was ECMAScript 6. I had played around with ES6 a little here and there but never really got into it properly and this was as good a time as any. As far as other tech goes I used Gulp as my task-runner and build tool because I&#39;m comfortable with it and it does what I need it to (compiling ES6 to ES5, SCSS to CSS, etc..).</p>',
			'<h3 class="u-heading-6">03. Development</h3>',
			'<p>The first thing I did when writing this plugin was create the plugin skeleton using the new ES6 <code>class</code> syntax. I chose to use the <code>class</code> syntax because of its ease-of-use and readability. Next I wanted to create the core functionality of the plugin, which is sizing the images so they fit perfectly in the container element. The actual algorithm that calculates the correct width and height of the image was written by <a href="https://github.com/ptgamr/google-image-layout" class="work__details-link">ptgamr</a>. I took this algorithm and built the rest of the plugin functionality around it.</p>',
			'<p>After successfully creating the core functionality and getting a group of images to behave correctly I began working on the plugin options and methods. I am a fan of UI animation so I had to include some options for animating in the images after they load. I accomplished that with adding a CSS class after the image is loaded, this way the animation can be customized in a stylesheet which is simple and quick. Having methods to add, remove, and reload images in an instance of Bricks seemed pretty useful if someone needs to load images later. The <code>.addNewImages()</code> method is simple as can be, simply accepting an array of strings which are paths to the images.</p>',
			'<h3 class="u-heading-6">04. Launch</h3>',
			'<p>This part is pretty straightforward, using Gulp I generated 2 different kind of build files. The first being a minified Bricks file that adds Bricks to the global scope, this is for when someone wants to use the plugin and they are not using a module bundler. The other way is pointing the <code>main</code> property in the <code>package.json</code> file to the compiled ES5 Bricks file, so when somone writes <code>var Bricks = require("bricks-layout")</code> Node will grab the correct file. Then it all gets published to NPM and the docs are on a <code>gh-pages</code> branch on Github.</p>'
		].join('')
	},
	abby: {
		title: 'Abby',
		tagline: 'A lightweight HTML/CSS boilerplate customizable with SCSS.',
		client: 'Myself',
		whatIDid: 'Build a lightweight HTML/CSS boilerplate that can be dropped into any project and customized.',
		description: 'Abby is lightweight project that came into being after repeatedly copying and pasting my CSS structure and styles from project to project. I decided I needed a solid base that I can use in each project, something lightweight, customizable, and unobtrusive.',
		github: 'https://github.com/ArjanJ/social-circles',
		live: 'http://socialcircles.arjanjassal.me/',
		tech: ['HTML5', 'CSS3, SCSS', 'Gulp'],
		process: [
			'<h3 class="u-heading-6">01. Research</h3>',
			'<p>Before getting to far into this project I looked at other CSS frameworks I had used in the past to see what I liked about them and what I disliked. One of my main influences behind Abby was the famous Skeleton boilerplate, it only provides the bare essentials which I like, but you can&#39;t customize it with SCSS which would make it perfect. I didn&#39;t want to create a full UI kit because each project has unique UI styles, and if I need to prototype something quickly I can just use one of the many UI frameworks already out there. I also wanted the class naming to follow BEMIT since it&#39;s one of the most powerful concepts in CSS and makes naming things so much easier and logical.</p>',
			'<h3 class="u-heading-6">02. Development</h3>',
			'<p>Development of this project was fairly straightforward. Each component has its own SCSS file so it&#39;s easy stay organized and edit. Since this is a SCSS project I wanted to include some useful mixins for things like clearfixing, transitions, and media queries. Those are things I found I would always end up including in any project so it made sense to incorporate them into Abby.</p>',
			'<h3 class="u-heading-6">03. Launch</h3>',
			'<p>I published this project to NPM so that I when in my projects I can simply <code>npm install abby</code> and bam I have my base CSS styles ready to go which I can quickly tailor to the project at hand. So far I have used Abby on this website, Readit, and Social Circles and it&#39;s been a really smooth process.</p>'
		].join('')
	},
	readit: {
		title: 'Readit',
		tagline: 'Browse Reddit with this slick single page application.',
		client: 'Myself',
		whatIDid: 'Use React + Alt.js and Node.js to create a single page application that displays data from Reddits API',
		description: 'Readit is a simple web app that lets you browse subreddits and posts from Reddit. The purpose of this project was for me to learn React.js along with some kind of Flux framework, oh and Webpack too.',
		github: 'https://github.com/ArjanJ/readit',
		live: 'http://readit.arjanjassal.me/',
		tech: ['HTML5', 'CSS3, SCSS', 'JavaScript (ECMAScript 6)', 'React.js', 'Node.js', 'Alt.js', 'Webpack'],
		process: [
			'<p>The process for this project was essentially one big learning experience, everything from React to Webpack to Node were things I was a little familiar with but never actually used in a project until Readit. Instead of breaking down the process into different stages of building Readit, I am going to explain my experiences learning each of the new tools for this project.</p>',
			'<h3 class="u-heading-6">01. React</h3>',
			'<p>After hearing so much about React I had to learn it. Coming from Angular, learing React had a larger learning curve since it is so fundamentally different to Angular. I decided to buy <a href="https://reactforbeginners.com/" target="_blank" class="work__details-link">The React for Beginners</a> course to see how to structure a React app, how to handle data, update state, pass props, and of course routing. At first I kept comparing my experience to Angular and thinking that the Angular way of doing things was better. As the course grew closer to an end I started liking React a lot more and seeing the benefits of JSX, one-way data flow, and components that fit together like building blocks in an app. It is also nice that React forces you to write a lot of good JavaScript which is great since it helped me learn more about JS which is always good.</p>',
			'<h3 class="u-heading-6">02. Flux (Alt.js)</h3>',
			'<p>I thought learning one of the Flux frameworks would be a lot harder than it actually was. The first thing I did was read some articles on what Flux actually is and how it differs from the traditional MVC. After gaining a basic understanding of the unidirectional dataflow from the action to dispatcher to store to view I felt I could start building Readit and grabbing data from Reddits API with an action, dispatching the data to stores, and having the views update based on the stores. This pattern made a lot of decisions easier to make because each "character" in the Flux pattern has such a well-defined role. Using Alt.js implementation of Flux was also great, it abstracted away a lot of ugly code and made things very simple and easy to read.</p>',
			'<h3 class="u-heading-6">03. Webpack</h3>',
			'<p>I am not going to lie, learning Webpack was a huge headache for me until I came across this <a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1" target="_blank" class="work__details-link">great article</a>. Webpack is really cool because unlike Gulp or Grunt it actually understands the structure of your project from a single entry point, so you do not have to write any <code>./**/**/*</code> paths in your config file. One thing I dislike about Webpack is how there has to be a production setup and a development setup, it is not a huge issue but it still irks me a little. As far as using Gulp again for developing a JS app, I would not go back, Webpack is actually simpler and more powerful for building JS apps. For small projects that do not need much JS I would probably use Gulp though.</p>',
			'<h3 class="u-heading-6">04. Node</h3>',
			'<p>Up until Readit the only experience I had with writing any JavaScript that would be exectuted by Node was Gulpfiles. The reason why I needed to write some Node for this app was to have pretty URLs. Without having the server serve the correct files for any URL the app would break because nothing would exist at <code>/page/</code> for example. With Node and the Express framework I setup some simple routing so that the <code>index.html</code> was always served for any route.</p>'
		].join('')
	},
	socialcircles: {
		title: 'Social Circles',
		tagline: 'An interactive infographic visualizing the size of social media networks.',
		client: 'Myself',
		whatIDid: 'Create an interactive infographic that visualizes the sizes of different social media networks.',
		description: 'This project originally started out as a school assignment where we had to take any kind of data and make it visual, whether it be a poster, video, or website, etc... I used this opportunity to learn some more JavaScript so I made an interactive infographic with jQuery and CSS. Of course looking back on the project the code was absolutely horrible but it was acceptable at the time. Now that I have a deeper understanding of JavaScript and experience with writing apps and plugins I wanted to rewrite this project in vanilla JavaScript and use the new skills I have learned.',
		github: 'https://github.com/ArjanJ/social-circles',
		live: 'http://socialcircles.arjanjassal.me/',
		tech: ['HTML5', 'CSS3, SCSS', 'JavaScript (ECMAScript 6)', 'Webpack'],
		process: [
			'<p>I rewrote this project after working with React and Flux so I was inspired by some of the concepts and wanted to use a few of those ideas without actually using a framework.</p>',
			'<h3 class="u-heading-6">State</h3>',
			'<p>The concept of state is not anything new, but I did enjoy the way React manages state. In this app there is not much state to manage, just the name of the active social network, total users of the network, and the list of countries. When a button is clicked the state object is updated and the DOM elements gets updated with the new state right after. This method of updating the view makes things easy to manage and debug.</p>',
			'<h3 class="u-heading-6">HTML in JS</h3>',
			'<p>Another thing I liked in React was JSX, the idea of writing HTML inside of your JavaScript seemed a bit odd at first but it&#39;s actually helpful when developing a JavaScript app because you can see the markup right next to the logic, and JavaScript also gives you much more power than trying to write logic inside HTML like Angular. I did not implement anything as complex as JSX but I did render the HTML of the app within an ES6 template string which made things really clean and easy to manage.'
		].join('')
	}
};