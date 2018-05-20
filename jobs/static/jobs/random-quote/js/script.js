// var $ = require('jquery');

$(document).ready(function() {
  // The following can be loaded with json-loader as well.
  // const quotes = require('../res/quotes.json');

  function newQuote() {
    $.getJSON(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      function(quotes) {
        $('#quote').fadeOut(500, function() {
          $(this).html('');
          $(this).html(quotes[0].content);
          $(this).fadeIn(500);
        });
        $('#name').fadeOut(500, function() {
          $(this).html('');
          $(this).html('- ' + quotes[0].title);
          $(this).fadeIn(500);
        });
      }
    );
  }

  $('button').click(function(event) {
    event.preventDefault();
    newQuote();
  });

  newQuote();
});
