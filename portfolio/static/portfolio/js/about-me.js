new TypeIt('#type-it-1', {
  strings: 'const aboutMe = {',
  speed: 130,
  autoStart: false,
  afterComplete: function() {
    $('#type-it-1')
      .find('.ti-cursor')
      .css('display', 'none');

    new TypeIt('#type-it-2', {
      strings: "name: 'Jason',",
      speed: 130,
      autoStart: false,
      afterComplete: function() {
        $('#type-it-2')
          .find('.ti-cursor')
          .css('display', 'none');

        new TypeIt('#type-it-3', {
          strings: "location: 'Toronto',",
          speed: 130,
          autoStart: false,
          afterComplete: function() {
            $('#type-it-3')
              .find('.ti-cursor')
              .css('display', 'none');

            new TypeIt('#type-it-4', {
              strings: 'roles: [',
              speed: 130,
              autoStart: false,
              afterComplete: function() {
                $('#type-it-4')
                  .find('.ti-cursor')
                  .css('display', 'none');

                new TypeIt('#type-it-5', {
                  speed: 130,
                  autoStart: false,
                  afterComplete: function() {
                    $('#type-it-5')
                      .find('.ti-cursor')
                      .css('display', 'none');

                    new TypeIt('#type-it-6', {
                      strings: "'Javascript Developer'",
                      speed: 130,
                      autoStart: false,
                      afterComplete: function() {
                        $('#type-it-6')
                          .find('.ti-cursor')
                          .css('display', 'none');

                        new TypeIt('#type-it-7', {
                          strings: '],',
                          speed: 130,
                          autoStart: false,
                          afterComplete: function() {
                            $('#type-it-7')
                              .find('.ti-cursor')
                              .css('display', 'none');

                            new TypeIt('#type-it-8', {
                              strings: "hobby: 'Drinking Espresso'",
                              speed: 130,
                              autoStart: false,
                              afterComplete: function() {
                                $('#type-it-8')
                                  .find('.ti-cursor')
                                  .css('display', 'none');

                                new TypeIt('#type-it-9', {
                                  strings: '};',
                                  speed: 500,
                                  autoStart: false
                                });
                              }
                            }).pause(500);
                          }
                        }).pause(500);
                      }
                    }).pause(500);
                  }
                })
                  .type("'Senior Web D")
                  .pause(400)
                  .type('e')
                  .pause(400)
                  .type('v')
                  .pause(1300)
                  .delete(1)
                  .pause(1300)
                  .delete(1)
                  .pause(700)
                  .options({ speed: 200 })
                  .delete()
                  .pause(300)
                  .options({ speed: 130 })
                  .type("'Junior Web Developer',")
                  .pause(500);
              }
            }).pause(500);
          }
        }).pause(500);
      }
    }).pause(500);
  }
}).pause(500);
