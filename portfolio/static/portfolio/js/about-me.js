new TypeIt('#type-it-1', {
  strings:
    '<span class="type-it-blue pr-2">const</span> aboutMe<span class="type-it-red px-2"> = </span>{',
  speed: 130,
  autoStart: false,
  afterComplete: function() {
    $('#type-it-1')
      .find('.ti-cursor')
      .css('display', 'none');

    new TypeIt('#type-it-2', {
      strings: 'name: <span class="type-it-yellow pl-2"> \'Jason\'</span>,',
      speed: 130,
      autoStart: false,
      afterComplete: function() {
        $('#type-it-2')
          .find('.ti-cursor')
          .css('display', 'none');

        new TypeIt('#type-it-3', {
          strings:
            'location: <span class="type-it-yellow pl-2"> \'Toronto\'</span>,',
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
                      strings:
                        '<span class="type-it-yellow">\'Javascript Developer\'</span>',
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
                              strings:
                                'hobby: <span class="type-it-yellow pl-2"> \'Drinking Espresso\'</span>,',
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
                  .pause(700)
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
