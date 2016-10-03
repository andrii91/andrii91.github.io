$(function(){
    $(window).scroll(function() {
      return $('.head').toggleClass("header_fixed", $(window).scrollTop() > 0);
    });

  if ($(window).width() > 1200) {
      
  }


  $("#phone").inputmask("+38(999)999-99-99");

  $('.standart').on('click', function(e){
    e.preventDefault();
      $('#registrationType').val('standart');
    $('#comment').val('Заявка на курс JUNIOR STANDARD');
  });
  $('.super').on('click', function(e){
    e.preventDefault();
      $('#registrationType').val('super');
    $('#comment').val('Заявка на курс SUPER JUNIOR');
  });
  $('.default_registration').on('click', function(e){
      e.preventDefault();
      $('#registrationType').val('default_registration');
  });

  $('#add').on('click', function(){
    $('#offline').val(', Хочет пакет с Оффлайн встречам');
  });
  $('#no-add').on('click', function(){
    $('#offline').val(' ');
  });    

  $('.why_java-link').click(function(){
    var destination = $(".why_java").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });

  

  $(document).ready(function () {
    $('#registration-form').on('submit', function (e) {
      $('#registration-btn').addClass('inactive');
      $('#registration-btn').prop('disabled', true);
    });
  });

  var waypointMacOffset = '90%';

  if ($(window).width() ==1260) {
      waypointMacOffset = '58%';
  }
  if ($(window).width() ==1260 && $(window).height() == 800 ) {
      waypointMacOffset = '74%';
  }
  if ($(window).width() >= 1344 && $(window).height() == 840 ) {
      waypointMacOffset = '71%';
  }
  if ($(window).width() >= 1360) {
      waypointMacOffset = '80%';
  }
  if ($(window).width()== 1368) {
      waypointMacOffset = '65%';
  }
  if ($(window).width() >= 1600) {
      waypointMacOffset = '69%';
  }
  if ($(window).width() >= 1680 && $(window).height() == 1050) {
      waypointMacOffset = '56%';
  }
  if ($(window).width() > 1900) {
      waypointMacOffset = '55%';
  }
  if ($(window).width() >= 1920 && $(window).height() == 1200) {
      waypointMacOffset = '49%';
  }
  console.log(waypointMacOffset);
  var waypoint_mac = new Waypoint({
    element: $('.mac-box'),
    handler: function(dir) {
        if (dir == 'up') {
             $('.mac').removeClass('fixed')
            
        } else {
             $('.mac').addClass('fixed')
        }
      },
      offset: '0%'
  });
  var waypoint_mac_off = new Waypoint({
    element: $('.block5'),
    handler: function(dir) {
      if (dir == 'up') {
             $('.mac').addClass('fixed')
             $('.mac').css({
              'top' : '62px',
            });
            
        } else {
             $('.mac').removeClass('fixed')
             $('.mac').css({
              'top' : '75%',
            });
        }
    },
    offset: waypointMacOffset
  });
  var waypoint_block2 = new Waypoint({
    element: $('.block2'),
    handler: function(dir) {
      if (dir == 'up') {
             
            
        } else {
           $('.mac-block1').not(this).animate({opacity: 1}, 500);
           setTimeout(function() {
             $('.mac-block1-1').not(this).animate({opacity: 1}, 1000);
           }, 1000);
        }
    },
    offset: '80%'
  });
  var waypoint_block3 = new Waypoint({
    element: $('.block3'),
    handler: function(dir) {
      if (dir == 'up') {
            $('.mac-block2').not(this).animate({opacity: 0}, 800); 
            setTimeout(function() {
              $('.mac-block2-1').not(this).animate({opacity: 0}, 800);
            }, 1000);
            setTimeout(function() {
              $('.mac-block2-2').not(this).animate({opacity: 0}, 800);
            }, 1500);
            setTimeout(function() {
              $('.mac-block2-3').not(this).animate({opacity: 0}, 800);
            }, 2000);
            setTimeout(function() {
              $('.mac-block2-4').not(this).animate({opacity: 0}, 800);
            }, 2500);

            setTimeout(function() {
             $('.mac-block1-1').not(this).animate({opacity: 1}, 1000);
            }, 1000);
            $('.mac-block1').not(this).animate({opacity: 1}, 500);
        } else {
          $('.mac-block1-1').not(this).animate({opacity: 0}, 1000);
          $('.mac-block1').not(this).animate({opacity: 0}, 500);

          $('.mac-block2').not(this).animate({opacity: 1}, 800);
          setTimeout(function() {
            $('.mac-block2-1').not(this).animate({opacity: 1}, 800);
          }, 1000);
          setTimeout(function() {
            $('.mac-block2-2').not(this).animate({opacity: 1}, 800);
          }, 1500);
          setTimeout(function() {
            $('.mac-block2-3').not(this).animate({opacity: 1}, 800);
          }, 2000);
          setTimeout(function() {
            $('.mac-block2-4').not(this).animate({opacity: 1}, 800);
          }, 2500);
        }
    },
    offset: '50%'
  });
  var waypoint_block4 = new Waypoint({
    element: $('.block4'),
    handler: function(dir) {
      if (dir == 'up') {
            $('.mac-block3').not(this).animate({opacity: 0}, 800);
            $('.mac-block3-1').not(this).animate({opacity: 0}, 800);
             setTimeout(function(){
               $('.mac-block3-2').not(this).animate({opacity: 0}, 800);
             }, 1000);

            $('.mac-block2').not(this).animate({opacity: 1}, 800);
            setTimeout(function() {
              $('.mac-block2-1').not(this).animate({opacity: 1}, 800);
            }, 1000);
            setTimeout(function() {
              $('.mac-block2-2').not(this).animate({opacity: 1}, 800);
            }, 1500);
            setTimeout(function() {
              $('.mac-block2-3').not(this).animate({opacity: 1}, 800);
            }, 2000);
            setTimeout(function() {
              $('.mac-block2-4').not(this).animate({opacity: 1}, 800);
            }, 2500);
        } else {
           $('.mac-block3').not(this).animate({opacity: 1}, 800);
           $('.mac-block3-1').not(this).animate({opacity: 1}, 800);
           setTimeout(function(){
             $('.mac-block3-2').not(this).animate({opacity: 1}, 800);
           }, 1000);


           $('.mac-block2').not(this).animate({opacity: 0}, 800); 
            setTimeout(function() {
              $('.mac-block2-1').not(this).animate({opacity: 0}, 800);
            }, 1000);
            setTimeout(function() {
              $('.mac-block2-2').not(this).animate({opacity: 0}, 800);
            }, 1500);
            setTimeout(function() {
              $('.mac-block2-3').not(this).animate({opacity: 0}, 800);
            }, 2000);
            setTimeout(function() {
              $('.mac-block2-4').not(this).animate({opacity: 0}, 800);
            }, 2500);
        }
    },
    offset: '50%'
  });

  var waypoint_block4 = new Waypoint({
    element: $('.block4'),
    handler: function(dir) {
      if (dir == 'up') {
             
            
        } else {
          var percent_number_step = $.animateNumber.numberStepFactories.append('%')
          var dol1_number_step = $.animateNumber.numberStepFactories.append('')
          var dol2_number_step = $.animateNumber.numberStepFactories.append('$')
          $('#percent1').animateNumber(
            {
              number: 20,
              easing: 'easeInQuad',
              numberStep: percent_number_step
            },
            2000
          );
          
          $('#percent2').animateNumber(
            {
              number: 60,
              easing: 'easeInQuad',
              numberStep: percent_number_step
            },
            3000
          );
          $('#dol1').animateNumber(
            {
              number: 300,
              easing: 'easeInQuad',
              numberStep: dol1_number_step
            },
            4000
          );
          $('#dol2').animateNumber(
            {
              number: 500,
              easing: 'easeInQuad',
              numberStep: dol2_number_step
            },
            5000
          );
          
        }

    },
    offset: '30%'
  });


});
