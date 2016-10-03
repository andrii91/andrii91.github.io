$(document).ready(function() { 


   var waypoint_genius = new Waypoint({
    element: $('.genius'),
    handler: function(dir) {
        if (dir == 'up') {
            
        } else {
            $(window).scroll(function() {
            var a = $(this).scrollTop();
            if ($(this).scrollTop() > 0) {

              if (a % 2 == 0) {
                  $('.genius-img').addClass('anim');
              }else{
                  $('.genius-img').removeClass('anim');
                
              }
            }
        });
        }
      },
      offset: '30%'
  });
   var waypoint_registration = new Waypoint({
    element: $('.registration'),
    handler: function() {
          a = 3;
          $('.genius-img').removeClass('anim');
      },
      offset: '30%'
  });

  if ($(window).width() < 1200) {
    $('.mob-btn, .menu-link').click(function() {
      $('body .menu-top .menu').toggle();
    })
  }
  if ($(window).width() >1200) {
    var intervalCount = 1;  
    setInterval(function() {
      $($('.detsils .nav-tabs .active').next()).find('a').trigger('click');
      intervalCount++
      if (intervalCount == 4) {
        $($('.detsils .nav-tabs li').first()).find('a').trigger('click');
        intervalCount = 1;
      }
    }, 5000);
  }


    

});