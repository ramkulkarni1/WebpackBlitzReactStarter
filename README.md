# Webpack starter project
This is a simple starter Web project using Webpack, Blitz and ReactJS. Optionally it also shows how to use Webpack APIs in Gulp.

To install app dependencies - 
  1. npm install

To bundle the application in one file
  1. webpack  
  This created buindle.js and copies index.html to bundle folder  
OR using Gulp
  1. gulp build

To run webpack-dev-server 
  1. webpack-dev-server  
OR using Gulp
  1. gulp 
  2. wait till you see console message - 'webpack: bundle is not VALID' and then browse to http://localhost:8080

Note that when using webpack-dev-server files are served from memory and no files are genereated in the build folder.
  
