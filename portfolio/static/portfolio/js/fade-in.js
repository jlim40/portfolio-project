$(document).ready(function() {
  $(window).scroll(function() {
    $('.portfolio-hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('showme');
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass('showme');
      }
    });
  });
});

$(document).ready(function() {
  $('#mySidenav').click(function() {
    $('#mySidenav').toggleClass('open-sidenav');
    $('#dimmer').toggleClass('dim-background');
  });

  $('#nav-button').click(function() {
    $('#nav-button').toggleClass('change');
  });
});
