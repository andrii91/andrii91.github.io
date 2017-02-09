
$(window).scroll(function() {
    return $('.top-menu').toggleClass("header_fixed", $(window).scrollTop() > 0);
});

$(document).ready(function() { 
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        navText: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1050: {
                items: 3
            }
        }
    });
      $(".photo-img").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });
      $(".gallery a").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });
  
  $('.modal-btn').click(function() {
    $('#' + $(this).data('modal')).show();
      $('#' + $(this).data('modal')).animate({
          opacity: 1,  });
    $('body').addClass('overl-h');
    $('.overlay').show();
  });
  $('.overlay, .close-m').click(function() {
    $('body').removeClass('overl-h');
    $('.modal').hide();
    $('.overlay').hide();
    $('.modal').animate({
          opacity: 0,  });
  });
  
  $('.overlay-iframe').click(function() {
    $(this).hide();
  });
  
  $('.mob-btn').click(function() {
    $('.menu').toggle();
    $('.menu').css({
      'background-color' : '#fff',
    })
  });

});