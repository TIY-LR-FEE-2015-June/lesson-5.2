var target = $('.target');
var templateStr = $('#podcast-template').html();
var compileTemplate = Handlebars.compile(templateStr);

var apiUrl = 'https://calm-reaches-2019.herokuapp.com/podcasts';

$.ajax({
  url: apiUrl,
  success: function(output) {
    var results = compileTemplate(output);
    target.html(results);
  }
});
