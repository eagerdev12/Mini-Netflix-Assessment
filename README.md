# Mini-Netflix-Assessment

Description

This is an exercise to demonstrate that one has a working knowledge of React, and common React-based libraries.

More specifically, the goal here is to demonstrate knowledge of the following four items - which are essential for any large React-based client project that we might take on:

Component syntax and structure

Passing data to/from components

Managing global state

Handing routes

 Requirements

Build a minimal two-page SPA using React.

The first page will contain a list of movie poster thumbnails.

When a poster thumbnail is clicked, it will redirect to a “movie details” page.

On the movie details page, the user should see a poster, title, description, and rating for the movie.

When this page is first loaded, fetch the movie data from an external API.

After the movie data is fetched, display it on the page, and add it to your React store.

Subsequent visits to the page should load data from the store - instead of making another API request.

You should be able to load different movies by updating the URL. For example, typing http://localhost:8080/movie/123 in your browser bar should load the movie details for the movie with ID #123.

Please include at least 5 different movies.

ES6+ JavaScript

BEM/SASS

No CSS framework should be used (no bootstrap, etc., show us your SCSS skills)

Semantic HTML

Responsive

ADA / WCAG Accessible (as much as possible, don’t spend too much time)

Google Chrome support (no need to test other browsers for this exercise)

Build Process (Gulp, Grunt, Webpack, etc) with clear documentation on how to get your app up and running.

Notes

You can use the OMDb API for fetching movie data - http://www.omdbapi.com/

The look-and-feel of this mini app is completely up to you, make it as simple or as fancy as you’d like.

A basic build system should be used that contains at least two tasks. The first task should start a local server with a watch to rebuild on save. The second task should output minified distribution assets.  Feel free to use an existing build system you have if it meets the requirements above. If you need assistance with getting a build system up and running, check out the Webpack Getting Started page.
