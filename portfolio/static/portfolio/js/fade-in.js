// $(document).ready(function() {
//   /* Every time the window is scrolled ... */
//   $(window).scroll(function() {
//     /* Check the location of each desired element */
//     let delay_counter = 0;
//     $('.portfolio-hideme').each(function(i) {
//       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();
//       /* If the object is completely visible in the window, fade it it */
//       if (bottom_of_window > bottom_of_object) {
//         $(this)
//           .delay(delay_counter)
//           .animate({ opacity: 1 }, 1000);
//       }
//       delay_counter += 170;
//     });
//   });

//   // Delete link for portfolo job
//   $('a[href*="jasonlim.info/#portfolio"]').removeAttr('target');
// });

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
