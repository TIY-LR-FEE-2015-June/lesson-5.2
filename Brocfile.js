//stuff
// grab plugins
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var sass = require('broccoli-sass');

// use funnel on bower components
var bowerStuff = funnel('bower_components', {files: [
    'jquery/dist/jquery.min.js',
    'handlebars/handlebars.min.js'
  ]});

// compile sass
var compiledSass = sass(['assets/scss', 'bower_components/reset-css'], 'app.scss', 'app.css');

// bring everything together
module.exports = mergeTrees(['public', 'assets/js', compiledSass, bowerStuff]);

