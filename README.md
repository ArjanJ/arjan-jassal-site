# Arjan Jassal

My website to showcase side projects, work experience, and myself. 

## What kind of website is it, from a tech standpoint?
It's a static website. I choose to go the static website route because there isn't any dynamic content, nor is there any complex state to manage. Using a CMS would be overkill, and using a JS framework or lib (like React) would also be overkill. Static websites, if done right, are the fastest to load and most accessible.

## What build tool did you use?
I used Parcel to compile everything. Parcel's a simple alternative to Webpack and Rollup that really shines for simple use cases like a static website. There was nothing to configure, which is rare these days, and it supports SCSS, Pug, ES6 out of the box (which I used heavily).

## Hosting?
Netlify! I'm blown away by how great of a service Netlify is. I setup CI/CD with Netlify, a custom domain, and branch subdomains (for dev and staging) all in an hour. I highly recommend it, and best of all the free version is very very good.
