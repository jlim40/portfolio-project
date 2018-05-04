// const aboutMe = new TypeIt('#type-it-1', {
//   strings: 'var aboutMe = {',
//   speed: 100,
//   autoStart: false,
//   afterComplete: function(instance) {
//     instance.cursor = false;
//     const type2 = new TypeIt('#type-it-2', {
//       strings: "name: 'Jason'",
//       speed: 100,
//       autoStart: false
//     });
//   }
// });

new TypeIt('#type-it-1', {
  strings: 'var aboutMe = {',
  speed: 100,
  autoStart: false,
  afterComplete: function() {
    $('#type-it-1')
      .find('.ti-cursor')
      .css('display', 'none');

    new TypeIt('#type-it-2', {
      strings: "name: 'Jason',",
      speed: 100,
      autoStart: false,
      afterComplete: function() {
        $('#type-it-2')
          .find('.ti-cursor')
          .css('display', 'none');

        new TypeIt('#type-it-3', {
          strings: "location: 'Toronto',",
          speed: 100,
          autoStart: false,
          afterComplete: function() {
            $('#type-it-3')
              .find('.ti-cursor')
              .css('display', 'none');

            new TypeIt('#type-it-4', {
              strings: 'roles: [',
              speed: 100,
              autoStart: false,
              afterComplete: function() {
                $('#type-it-4')
                  .find('.ti-cursor')
                  .css('display', 'none');

                new TypeIt('#type-it-5', {
                  speed: 100,
                  autoStart: false,
                  afterComplete: function() {
                    $('#type-it-5')
                      .find('.ti-cursor')
                      .css('display', 'none');

                    new TypeIt('#type-it-6', {
                      strings: "'Javascript Developer'",
                      speed: 100,
                      autoStart: false,
                      afterComplete: function() {
                        $('#type-it-6')
                          .find('.ti-cursor')
                          .css('display', 'none');

                        new TypeIt('#type-it-7', {
                          strings: '],',
                          speed: 100,
                          autoStart: false,
                          afterComplete: function() {
                            $('#type-it-7')
                              .find('.ti-cursor')
                              .css('display', 'none');

                            new TypeIt('#type-it-8', {
                              strings: "hobby: 'Drinking Espresso'",
                              speed: 100,
                              autoStart: false,
                              afterComplete: function() {
                                $('#type-it-8')
                                  .find('.ti-cursor')
                                  .css('display', 'none');

                                new TypeIt('#type-it-9', {
                                  strings: '};',
                                  speed: 100,
                                  autoStart: false
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                })
                  .type("'Senior Web D")
                  .pause(200)
                  .type('e')
                  .pause(400)
                  .type('v')
                  .pause(700)
                  .delete(1)
                  .pause(400)
                  .delete(1)
                  .pause(300)
                  .delete()
                  .type("'Junior Web Developer',");
              }
            });
          }
        });
      }
    });
  }
});
