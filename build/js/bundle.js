!function e(t,a,i){function n(r,s){if(!a[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(o)return o(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=a[r]={exports:{}};t[r][0].call(d.exports,function(e){var a=t[r][1][e];return n(a?a:e)},d,d.exports,e,t,a,i)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(e,t,a){(function(e){!function(e,i){"function"==typeof define&&define.amd?define([],i(e)):"object"==typeof a?t.exports=i(e):e.smoothScroll=i(e)}("undefined"!=typeof e?e:this.window||this.global,function(e){"use strict";var t,a,i,n,o,r={},s="querySelector"in document&&"addEventListener"in e,c={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,a=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],a++);for(var n=function(a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t&&"[object Object]"===Object.prototype.toString.call(a[i])?e[i]=l(!0,e[i],a[i]):e[i]=a[i])};i>a;a++){var o=arguments[a];n(o)}return e},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},u=function(e,t){var a,i,n=t.charAt(0),o="classList"in document.documentElement;for("["===n&&(t=t.substr(1,t.length-2),a=t.split("="),a.length>1&&(i=!0,a[1]=a[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===n)if(o){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===n&&e.id===t.substr(1))return e;if("["===n&&e.hasAttribute(a[0])){if(!i)return e;if(e.getAttribute(a[0])===a[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};r.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),i=a.length,n=-1,o="",r=a.charCodeAt(0);++n<i;){if(t=a.charCodeAt(n),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=t>=1&&31>=t||127==t||0===n&&t>=48&&57>=t||1===n&&t>=48&&57>=t&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?a.charAt(n):"\\"+a.charAt(n)}return"#"+o};var h=function(e,t){var a;return"easeInQuad"===e&&(a=t*t),"easeOutQuad"===e&&(a=t*(2-t)),"easeInOutQuad"===e&&(a=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(a=t*t*t),"easeOutCubic"===e&&(a=--t*t*t+1),"easeInOutCubic"===e&&(a=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(a=t*t*t*t),"easeOutQuart"===e&&(a=1- --t*t*t*t),"easeInOutQuart"===e&&(a=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(a=t*t*t*t*t),"easeOutQuint"===e&&(a=1+--t*t*t*t*t),"easeInOutQuint"===e&&(a=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),a||t},p=function(e,t,a){var i=0;if(e.offsetParent)do i+=e.offsetTop,e=e.offsetParent;while(e);return i=i-t-a,i>=0?i:0},f=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},g=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},m=function(t,a){e.history.pushState&&(a||"true"===a)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},w=function(e){return null===e?0:d(e)+e.offsetTop};r.animateScroll=function(a,r,s){var d=g(r?r.getAttribute("data-options"):null),u=l(t||c,s||{},d),b="[object Number]"===Object.prototype.toString.call(a)?!0:!1,y=b?null:"#"===a?e.document.documentElement:e.document.querySelector(a);if(b||y){var v=e.pageYOffset;i||(i=e.document.querySelector(u.selectorHeader)),n||(n=w(i));var k,S,I=b?a:p(y,n,parseInt(u.offset,10)),j=I-v,A=f(),L=0;b||m(a,u.updateURL);var x=function(t,i,n){var o=e.pageYOffset;(t==i||o==i||e.innerHeight+o>=A)&&(clearInterval(n),b||y.focus(),u.callback(a,r))},T=function(){L+=16,k=L/parseInt(u.speed,10),k=k>1?1:k,S=v+j*h(u.easing,k),e.scrollTo(0,Math.floor(S)),x(S,I,o)},C=function(){clearInterval(o),o=setInterval(T,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var b=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var a=u(e.target,t.selector);if(a&&"a"===a.tagName.toLowerCase()){e.preventDefault();var i=r.escapeCharacters(a.hash);r.animateScroll(i,a,t)}}},y=function(e){a||(a=setTimeout(function(){a=null,n=w(i)},66))};return r.destroy=function(){t&&(e.document.removeEventListener("click",b,!1),e.removeEventListener("resize",y,!1),t=null,a=null,i=null,n=null,o=null)},r.init=function(a){s&&(r.destroy(),t=l(c,a||{}),i=e.document.querySelector(t.selectorHeader),n=w(i),e.document.addEventListener("click",b,!1),i&&e.addEventListener("resize",y,!1))},r})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,a){var i=function(t,a){function i(e){return a.querySelector(e)}function n(e){return[].slice.call(a.querySelectorAll(e))}function o(){I.items.forEach(function(e,t){e.addEventListener("click",c.bind(null,t))}),j.closeBtn.forEach(function(e){e.addEventListener("click",function(){t.history.back(),r()})}),t.addEventListener("popstate",function(e){m(),r()})}function r(){a.title="Arjan Jassal | Front-end Developer Vancouver"}function s(e){j.title.innerHTML=k[e].title,j.client.innerHTML=k[e].client,j.whatIDid.innerHTML=k[e].whatIDid,j.tagline.innerHTML=k[e].tagline,j.tag.innerHTML=k[e].tag,j.description.innerHTML=k[e].description,j.github.href=k[e].github,j.live.href=k[e].live,j.process.innerHTML=k[e].process;var t=k[e].tech.map(function(e){return'<li class="c-list__item">'+e+"</li>"}).join("");j.tech.innerHTML=t}function c(e){t.requestAnimationFrame(l.bind(null,e))}function l(e){I.items[e].classList.add("active"),I.activeItem=I.items[e],I.activeBg=I.bgs[e],I.tagline[e].classList.add("hide");var i=I.activeItem.getAttribute("data-work");t.history.pushState({title:i},i,i),i=i.replace(/\_/g," "),a.title="Arjan Jassal | "+i[0].toUpperCase()+i.substr(1,i.length-1),s(I.activeItem.getAttribute("data-work")),d(I.activeItem,I.activeBg),j.container.classList.remove("theme-1","theme-2","theme-3","theme-4"),j.container.classList.add("theme-"+parseInt(e+1)),h(I.activeItem.querySelector(".work__item-heading")),p(I.activeItem.querySelector(".work__item-tag")),u()}function d(e,a){var i=t.getComputedStyle(e,null),n=i.getPropertyValue("background-color");j.container.style.backgroundColor=n,a.style[L]=g(a),b(a,function(){j.container.classList.add("active"),y()})}function u(){S.header.classList.toggle("hide")}function h(e){var t=j.title,a=f(t,e),i="translate("+a.x+"px, "+a.y+"px)";e.style[L]=i}function p(e){var t=j.tag,a=f(t,e),i="translate("+a.x+"px, "+a.y+"px)";e.style[L]=i}function f(e,t){var a=e.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:a.left-i.left,y:a.top-i.top}}function g(e){var a=t.innerWidth,i=t.innerHeight,n=a/2,o=i/2,r=(t.pageYOffset,e.getBoundingClientRect()),s=r.width,c=r.height,l=s/2,d=c/2,u=Math.round(n-r.left-l),h=Math.round(0+o-r.top-d),p=a/s,f=i/c,g="translate("+u+"px,"+h+"px) scale("+p+","+f+")";return g}function m(){t.requestAnimationFrame(w)}function w(){function e(){I.activeBg.removeAttribute("style"),t.removeAttribute("style"),i.removeAttribute("style"),j.container.classList.remove("active","hide"),u(),v(),b(I.activeBg,function(){I.activeItem.classList.remove("active"),I.activeItem={},I.activeBg={},a.classList.remove("hide"),j.container.scrollTop=0})}var t=I.activeItem.querySelector(".work__item-heading"),a=I.activeItem.querySelector(".work__item-tagline"),i=I.activeItem.querySelector(".work__item-tag");j.container.classList.add("hide"),b(j.container,e,350)}function b(e,t,a){var i=function(){setTimeout(function(){t()},a||0),e.removeEventListener(H,i)};e.addEventListener(H,i)}function y(){a.body.style.overflow="hidden"}function v(){a.body.removeAttribute("style")}var k=e("./workData"),S={header:i("header.header")},I={items:n(".work__item"),bgs:n(".work__item-bg"),tagline:n(".work__item-tagline"),tag:n(".work__item-tag"),activeItem:{},activeBg:{}},j={title:i("[data-work-title]"),client:i("[data-work-client]"),whatIDid:i("[data-work-what-i-did]"),tagline:i("[data-work-tagline]"),tag:i("[data-work-tag]"),description:i("[data-work-description]"),github:i("[data-work-github]"),live:i("[data-work-live]"),tech:i("[data-work-tech]"),process:i("[data-work-process]"),closeBtn:n(".work-details-close"),container:i(".work-details")},A=!1,L="transform",x="Webkit Moz ms".split(" "),T="",C=a.createElement("div");if(void 0!==C.style[L]&&(A=!0),A===!1)for(var E=0;E<x.length;E++)if(void 0!==C.style[x[E]+"Transform"]){T=x[E],L=T+"Transform",A=!0;break}var H,M={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},C=a.createElement("div");for(var _ in M)if("undefined"!=typeof C.style[_]){H=M[_];break}return{init:o}}(window,document);t.exports=i},{"./workData":10}],3:[function(e,t,a){var i=function(){function e(){window.addEventListener("scroll",t)}function t(){window.requestAnimationFrame(a)}function a(){var e=window.pageYOffset,t=window.innerHeight-n;e>t&&!i.classList.contains(o)&&i.classList.add(o),t>e&&i.classList.contains(o)&&i.classList.remove(o)}var i=document.querySelector("header.header"),n=i.offsetHeight,o="header--scrolled";return{init:e}}();t.exports=i},{}],4:[function(e,t,a){var i=function(){function e(){window.innerWidth>=768&&window.addEventListener("scroll",t)}function t(){window.pageYOffset<window.innerHeight&&window.requestAnimationFrame(a)}function a(){var e=window.pageYOffset,t=e/2,a=1-e/700;i.style.transform="translateY("+t+"px)",i.style.opacity=a}var i=document.querySelector(".home__wrapper");return{init:e}}();t.exports=i},{}],5:[function(e,t,a){var i=function(e){function t(t){t.preventDefault(),o.classList.toggle("c-hamburger--close"),r.classList.toggle("nav--active"),setTimeout(function(){s.forEach(function(t){e.requestAnimationFrame(i.bind(null,t))})},75),n()}function a(){o.addEventListener("click",t),c.forEach(function(e){e.addEventListener("click",t)})}function i(e){e.classList.toggle("nav__item--active")}function n(){o&&r&&(r.classList.contains("nav--active")?(o.setAttribute("aria-expanded","true"),r.setAttribute("aria-hidden","false")):(o.setAttribute("aria-expanded","false"),r.setAttribute("aria-hidden","true")))}var o=document.querySelector("button.c-hamburger"),r=document.querySelector("nav.nav"),s=[].slice.call(r.querySelectorAll("li.nav__item")),c=[].slice.call(r.querySelectorAll("[data-link]"));return{init:a}}(window);t.exports=i},{}],6:[function(e,t,a){var i=e("./isInViewport"),n=function(){function e(){window.addEventListener("scroll",t),window.addEventListener("load",t)}function t(){window.requestAnimationFrame(a)}function a(){n.forEach(function(e){i(e,e.getAttribute("data-add-class-offset")||0)&&e.classList.add(e.getAttribute("data-add-class"))})}var n=[].slice.call(document.querySelectorAll("[data-add-class]"));window;return{init:e}}();t.exports=n},{"./isInViewport":9}],7:[function(e,t,a){var i=function(){function e(){t(),window.addEventListener("resize",i(a,200))}function t(){for(var e=window.innerHeight,t=0;t<o.length;t++)o[t].style.minHeight=e+"px"}function a(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(n)||t()}function i(e,t,a){var i;return function(){var n=this,o=arguments,r=function(){i=null,a||e.apply(n,o)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,o)}}var n=navigator.userAgent,o=document.querySelectorAll("[data-full-height]");return{init:e}}();t.exports=i},{}],8:[function(e,t,a){var i=e("./HeadingScrollAnimation"),n=e("smooth-scroll"),o=e("./Nav"),r=e("./addClassWhenInViewport"),s=e("./ExpandProject"),c=e("./HeaderScroll"),l=e("./fullHeight");document.addEventListener("DOMContentLoaded",function(){i.init(),o.init(),r.init(),s.init(),n.init({speed:500,offset:54}),c.init(),l.init()})},{"./ExpandProject":2,"./HeaderScroll":3,"./HeadingScrollAnimation":4,"./Nav":5,"./addClassWhenInViewport":6,"./fullHeight":7,"smooth-scroll":1}],9:[function(e,t,a){function i(e,t){t=t?t:0;var a=e.getBoundingClientRect(),i=a.top>=0&&a.top<window.innerHeight-t,n=a.bottom>0&&a.bottom<=window.innerHeight-t;return i||n?!0:!1}t.exports=i},{}],10:[function(e,t,a){t.exports={bricks:{title:"Bricks",tagline:"Create justified image layouts like Google Images and Flickr.",tag:"JavaScript",client:"Myself",whatIDid:"Write a JavaScript plugin that allows you to create a responsive image layout where the images fit together like bricks.",description:"Bricks allows you to take a group of images that are all different dimensions and fit them into a grid without distorting the aspect ratio of the image and fill up any gaps between or around the images. This type of image layout is commonly seen on Google Images and Flickr, my aim was to create a plugin with no dependencies and enough options to be able to fit into any project.",github:"https://github.com/ArjanJ/bricks",live:"http://bricks.arjanjassal.me/",tech:["HTML5","CSS3, SCSS","JavaScript (ECMAScript 6)","Gulp"],process:['<h3 class="u-heading-6">01. Research</h3>',"<p>The reason behind creating this project was due to searching for a plugin that could accomplish this kind of layout without depending on JQuery as well as having a lot of options for customization. I ended up finding a plugin that relied on JQuery but had great customizablity, and a plugin with no dependencies but no customizablity (without modifying the source). Naturally, this made me want to take the best aspects of both plugins and create my own.</p>",'<h3 class="u-heading-6">02. Setup</h3>',"<p>For small projects like this I believe it is important to keep the architecture and workflow simple while still being maintainable and efficient to work on.</p>","<p>I tend to use new projects as opportunities to learn at least one new thing, for Bricks it was ECMAScript 6. I had played around with ES6 a little here and there but never really got into it properly and this was as good a time as any. As far as other tech goes I used Gulp as my task-runner and build tool because I&#39;m comfortable with it and it does what I need it to (compiling ES6 to ES5, SCSS to CSS, etc..).</p>",'<h3 class="u-heading-6">03. Development</h3>','<p>The first thing I did when writing this plugin was create the plugin skeleton using the new ES6 <code>class</code> syntax. I chose to use the <code>class</code> syntax because of its ease-of-use and readability. Next I wanted to create the core functionality of the plugin, which is sizing the images so they fit perfectly in the container element. The actual algorithm that calculates the correct width and height of the image was written by <a href="https://github.com/ptgamr/google-image-layout" class="work-details__link">ptgamr</a>. I took this algorithm and built the rest of the plugin functionality around it.</p>',"<p>After successfully creating the core functionality and getting a group of images to behave correctly I began working on the plugin options and methods. I am a fan of UI animation so I had to include some options for animating in the images after they load. I accomplished that with adding a CSS class after the image is loaded, this way the animation can be customized in a stylesheet which is simple and quick. Having methods to add, remove, and reload images in an instance of Bricks seemed pretty useful if someone needs to load images later. The <code>.addNewImages()</code> method is simple as can be, simply accepting an array of strings which are paths to the images.</p>",'<h3 class="u-heading-6">04. Launch</h3>','<p>This part is pretty straightforward, using Gulp I generated 2 different kind of build files. The first being a minified Bricks file that adds Bricks to the global scope, this is for when someone wants to use the plugin and they are not using a module bundler. The other way is pointing the <code>main</code> property in the <code>package.json</code> file to the compiled ES5 Bricks file, so when somone writes <code>var Bricks = require("bricks-layout")</code> Node will grab the correct file. Then it all gets published to NPM and the docs are on a <code>gh-pages</code> branch on Github.</p>'].join("")},abby:{title:"Abby",tagline:"A lightweight HTML/CSS boilerplate customizable with SCSS.",tag:"CSS/SCSS",client:"Myself",whatIDid:"Build a lightweight HTML/CSS boilerplate that can be dropped into any project and customized.",description:"Abby is lightweight project that came into being after repeatedly copying and pasting my CSS structure and styles from project to project. I decided I needed a solid base that I can use in each project, something lightweight, customizable, and unobtrusive.",github:"https://github.com/ArjanJ/abby",live:"http://abby.arjanjassal.me/",tech:["HTML5","CSS3, SCSS","Gulp"],process:['<h3 class="u-heading-6">01. Research</h3>',"<p>Before getting to far into this project I looked at other CSS frameworks I had used in the past to see what I liked about them and what I disliked. One of my main influences behind Abby was the famous Skeleton boilerplate, it only provides the bare essentials which I like, but you can&#39;t customize it with SCSS which would make it perfect. I didn&#39;t want to create a full UI kit because each project has unique UI styles, and if I need to prototype something quickly I can just use one of the many UI frameworks already out there. I also wanted the class naming to follow BEMIT since it&#39;s one of the most powerful concepts in CSS and makes naming things so much easier and logical.</p>",'<h3 class="u-heading-6">02. Development</h3>',"<p>Development of this project was fairly straightforward. Each component has its own SCSS file so it&#39;s easy stay organized and edit. Since this is a SCSS project I wanted to include some useful mixins for things like clearfixing, transitions, and media queries. Those are things I found I would always end up including in any project so it made sense to incorporate them into Abby.</p>",'<h3 class="u-heading-6">03. Launch</h3>',"<p>I published this project to NPM so that in my projects I can simply <code>npm install abby</code> and bam I have my base CSS styles ready to go which I can quickly tailor to the project at hand. So far I have used Abby on this website, and Readit, and it&#39;s been a really effective process for me.</p>"].join("")},readit:{title:"Readit",tagline:"Browse Reddit with this slick single page application.",tag:"React, Flux",client:"Myself",whatIDid:"Use React + Alt.js and Node.js to create a single page application that displays data from Reddits API",description:"Readit is a simple web app that lets you browse subreddits and posts from Reddit. The purpose of this project was for me to learn React.js along with some kind of Flux framework, oh and Webpack too.",github:"https://github.com/ArjanJ/readit",live:"http://readit.arjanjassal.me/",tech:["HTML5","CSS3, SCSS","JavaScript (ECMAScript 6)","React.js","Node.js","Alt.js","Webpack"],process:["<p>The process for this project was essentially one big learning experience, everything from React to Webpack to Node were things I was a little familiar with but never actually used in a project until Readit. Instead of breaking down the process into different stages of building Readit, I am going to explain my experiences learning each of the new tools for this project.</p>",'<h3 class="u-heading-6">01. React</h3>','<p>After hearing so much about React I had to learn it. Coming from Angular, learing React had a larger learning curve since it is so fundamentally different to Angular. I decided to buy <a href="https://reactforbeginners.com/" target="_blank" class="work-details__link">The React for Beginners</a> course to see how to structure a React app, how to handle data, update state, pass props, and of course routing. At first I kept comparing my experience to Angular and thinking that the Angular way of doing things was better. As the course grew closer to an end I started liking React a lot more and seeing the benefits of JSX, one-way data flow, and components that fit together like building blocks in an app. It is also nice that React forces you to write a lot of good JavaScript which is great since it helped me learn more about JS which is always good.</p>','<h3 class="u-heading-6">02. Flux (Alt.js)</h3>','<p>I thought learning one of the Flux frameworks would be a lot harder than it actually was. The first thing I did was read some articles on what Flux actually is and how it differs from the traditional MVC. After gaining a basic understanding of the unidirectional dataflow from the action to dispatcher to store to view I felt I could start building Readit and grabbing data from Reddits API with an action, dispatching the data to stores, and having the views update based on the stores. This pattern made a lot of decisions easier to make because each "character" in the Flux pattern has such a well-defined role. Using Alt.js implementation of Flux was also great, it abstracted away a lot of ugly code and made things very simple and easy to read.</p>','<h3 class="u-heading-6">03. Webpack</h3>','<p>I am not going to lie, learning Webpack was a huge headache for me until I came across this <a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1" target="_blank" class="work-details__link">great article</a>. Webpack is really cool because unlike Gulp or Grunt it actually understands the structure of your project from a single entry point, so you do not have to write any <code>./**/**/*</code> paths in your config file. One thing I dislike about Webpack is how there has to be a production setup and a development setup, it is not a huge issue but it still irks me a little. As far as using Gulp again for developing a JS app, I would not go back, Webpack is actually simpler and more powerful for building JS apps. For small projects that do not need much JS I would probably use Gulp though.</p>','<h3 class="u-heading-6">04. Node</h3>',"<p>Up until Readit the only experience I had with writing any JavaScript that would be exectuted by Node was Gulpfiles. The reason why I needed to write some Node for this app was to have pretty URLs. Without having the server serve the correct files for any URL the app would break because nothing would exist at <code>/page/</code> for example. With Node and the Express framework I setup some simple routing so that the <code>index.html</code> was always served for any route.</p>"].join("")},social_circles:{title:"Social Circles",tagline:"An interactive infographic visualizing the size of social media networks.",tag:"JavaScript",client:"Myself",whatIDid:"Create an interactive infographic that visualizes the sizes of different social media networks.",description:"This project originally started out as a school assignment where we had to take any kind of data and make it visual, whether it be a poster, video, or website, etc... I used this opportunity to learn some more JavaScript so I made an interactive infographic with jQuery and CSS. Of course looking back on the project the code was absolutely horrible but it was acceptable at the time. Now that I have a deeper understanding of JavaScript and experience with writing apps and plugins I wanted to rewrite this project in vanilla JavaScript and use the new skills I have learned.",github:"https://github.com/ArjanJ/social-circles",live:"http://socialcircles.arjanjassal.me/",tech:["HTML5","CSS3, SCSS","JavaScript (ECMAScript 6)","Webpack"],process:["<p>I rewrote this project after working with React and Flux so I was inspired by some of the concepts and wanted to use a few of those ideas without actually using a framework.</p>",'<h3 class="u-heading-6">State</h3>',"<p>The concept of state is not anything new, but I did enjoy the way React manages state. In this app there is not much state to manage, just the name of the active social network, total users of the network, and the list of countries. When a button is clicked the state object is updated and the DOM elements gets updated with the new state right after. This method of updating the view makes things easy to manage and debug.</p>",'<h3 class="u-heading-6">HTML in JS</h3>',"<p>Another thing I liked in React was JSX, the idea of writing HTML inside of your JavaScript seemed a bit odd at first but it&#39;s actually helpful when developing a JavaScript app because you can see the markup right next to the logic, and JavaScript also gives you much more power than trying to write logic inside HTML like Angular. I did not implement anything as complex as JSX but I did render the HTML of the app within an ES6 template string which made things really clean and easy to manage."].join("")}}},{}]},{},[8]);
//# sourceMappingURL=bundle.js.map
