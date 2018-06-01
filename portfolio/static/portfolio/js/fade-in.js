$(document).ready(function() {
  $(window).scroll(function() {
    $('.portfolio-hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      console.log(bottom_of_window);
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('showme');
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass('showme');
      }
    });

    $('.bar').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      if (bottom_of_object > $(window).height()) {
        $(this).addClass('grey');
      } else {
        $(this).removeClass('grey');
      }
    });
  });
});

$(document).ready(function() {
  $('#nav-button').click(function() {
    $('#mySidenav').toggleClass('open-sidenav');
    $('#dimmer').toggleClass('dim-background');
    $('#nav-button').toggleClass('change');
  });
});
