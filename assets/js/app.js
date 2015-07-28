var target = $('.target');
var templateStr = $('#podcast-template').html();
var searchBar = $('.search-bar');
var allResults;

var compileTemplate = Handlebars.compile(templateStr);
var apiUrl = 'https://calm-reaches-2019.herokuapp.com/podcasts';

var render = function(output) {
  var results = compileTemplate(output);
  target.html(results);
};

$.ajax({
  url: apiUrl,
  success: function(data) {
    render(data);
    allResults = data;
  }
});

searchBar.on('input', function() {
  var inputStr = searchBar.val().toLowerCase();

  var filteredResults = allResults.filter(function(current) {
    return current.title.toLowerCase().indexOf(inputStr) > -1;
  });

  // Filter down our results
  render(filteredResults);
});
