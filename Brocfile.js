//stuff
// grab plugins
var concat = require('broccoli-sourcemap-concat');
var mergeTrees = require('broccoli-merge-trees');
var sass = require('broccoli-sass');

// use funnel on bower components
var bowerStuff = concat('bower_components', {outputFile: 'vendor.js', inputFiles: [
    'jquery/dist/jquery.min.js',
    'handlebars/handlebars.min.js',
    'underscore/underscore-min.js'
  ]});

var appJs = concat('assets/js', {outputFile: 'app.js', inputFiles: [
    'character.js',
    'family.js',
    'app.js'
  ]});

// compile sass
var compiledSass = sass(['assets/scss', 'bower_components/reset-css'], 'app.scss', 'app.css');

// bring everything together
module.exports = mergeTrees(['public', appJs, compiledSass, bowerStuff]);

