$(document).ready(function() {
  function newQuote() {
    var rand = Math.floor(Math.random() * quotes.length);

    $('#quote').fadeOut(500, function() {
      $(this).html('');
      $(this).html(quotes[rand].quote);
      $(this).fadeIn(500);
    });
    $('#name').fadeOut(500, function() {
      $(this).html('');
      $(this).html('- ' + quotes[rand].name);
      $(this).fadeIn(500);
    });
  }

  $('button').click(function(event) {
    event.preventDefault();
    newQuote();
  });

  newQuote();
});

const quotes = [
  {
    quote: 'Moral indignation is jealousy with a halo.',
    name: 'H. G. Wells'
  },
  {
    quote:
      'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
    name: 'Bertrand Russell'
  },
  {
    quote: 'Victory goes to the player who makes the next-to-last mistake.',
    name: 'Chessmaster Savielly Grigorievitch Tartakower'
  },
  {
    quote: "Don't be so humble - you are not that great.",
    name: 'Golda Meir'
  },
  {
    quote: 'His ignorance is encyclopedic.',
    name: 'Abba Eban'
  },
  {
    quote: 'If a man does his best, what else is there?',
    name: 'General George S. Patton'
  },
  {
    quote: 'Political correctness is tyranny with manners.',
    name: 'Charlton Heston'
  },
  {
    quote:
      'You can avoid reality, but you cannot avoid the consequences of avoiding reality.',
    name: 'Ayn Rand'
  },
  {
    quote:
      'Not everything that can be counted counts, and not everything that counts can be counted.',
    name: 'Albert Einstein'
  },
  {
    quote:
      "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
    name: 'Albert Einstein'
  },
  {
    quote:
      'A lie gets halfway around the world before the truth has a chance to get its pants on.',
    name: 'Sir Winston Churchill'
  },
  {
    quote:
      'I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.',
    name: 'Galileo Galilei'
  },
  {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    name: 'James Dean'
  },
  {
    quote: 'I make love because of its taste.',
    name: 'Steve Kim'
  }
];
