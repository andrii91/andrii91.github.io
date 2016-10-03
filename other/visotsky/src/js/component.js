$(function(){

        $('.registr-btn').click(function(){
    	    var destination = $(".head-form").offset().top - 50;
    	    $("body,html").animate({ scrollTop: destination}, 500 );
    	});

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var max_number_local = 0, 
            left_tickets = 0, 
            cursor_position = 0, 
            cursor_position_local = 0, 
            period = 0, 
            count = 0,
            lines_random = 0,
            max_tickets = 300,
            prev_left_tickets = 112;
            // prev_left_tickets = max_tickets;
       
        left_tickets = localStorage.left_tickets || 112;
        // left_tickets = localStorage.left_tickets || getRandomInt(125, 150);
        localStorage.left_tickets = left_tickets;

        function registr() {
            lines_random = getRandomInt(5000, 50000);
            period = getRandomInt(5000, 50000);
            prev_left_tickets = left_tickets;
                left_tickets = left_tickets - getRandomInt(1, 5);
            if (left_tickets < 10) {
                left_tickets = 10;
            }
            localStorage.left_tickets = left_tickets;

            cursor_position = (max_tickets - left_tickets)/ max_tickets *100;
            count++;

            if (count == 1) {
                prev_left_tickets = 112;
                // prev_left_tickets = max_tickets;
                lines_random = 1000;
            }


            $('#lines')
              .prop('number', prev_left_tickets)
              .animateNumber({
                  number: left_tickets,
                },
                lines_random,
                'linear',
                function () {
                     registr();
                }
              );

            $('.cursor').css({
                left : cursor_position + '%',
                transition : lines_random/1000 +'s',
            });
        }

        registr();

        $('.icon-hover_4').hover(function() {
            screen_interval_1 = setInterval(function(){
                $('.hover_4').not(this).animate({left: -20}, 400);
                setTimeout(function(){
                    $('.hover_4').not(this).animate({left: 20}, 400);
                }, 450);
                
            }, 800);
        },
        function() {
            clearInterval(screen_interval_1);
            $('.hover_4').not(this).animate({left: 0}, 500);
        });


    $("#xray-block").xray({x_width:25,x_height:35});

    if ($(window).width() > 1024) {
        var liSkills = $('.skills-item');
        var indexActive = 0;

        var $brain = $('.skills-img');


        function animateSkills() {
          var itemActive = $(liSkills[indexActive]);
          $brain.addClass('brain-off');

          var nextItem = liSkills[++indexActive];
          if (!nextItem) {
            indexActive = 0;
            nextItem = liSkills[indexActive];
          }
           setTimeout(function() {
                $(nextItem).animate({
                    opacity: 1
                }, 1000);
                $brain.removeClass('brain-off');
           }, 1000)
        }

            var waypoint_skills = new Waypoint({
        element: $('.skills'),
        handler: function(dir) {
            if (dir == 'up') {
                
            } else {
                setInterval(animateSkills, 2500);
            }
          },
          offset: '10%'
    });
        
    }

});


    