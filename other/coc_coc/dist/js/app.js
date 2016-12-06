$(window).scroll(function() {
    return $('.head-top').toggleClass("header_fixed", $(window).scrollTop() > 0);
});
$(document).ready(function() {
    $('.reg-scroll').click(function() {
        var destination = $(".registration").offset().top - 0;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });

    $('.head-click').click(function() {
        var destination = $(".video").offset().top - 0;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });

    $('.types-accordion li').click(function() {
        $('.types-accordion li').removeClass('active');
        $('.tabs').removeClass('active');
        $(this).toggleClass('active');
        $('#' + $(this).data('tab')).toggleClass('active');
    });


    var i = 0;
    function autoPlayLi() {

      i = i + 1;
      $('li[data-tab=tab_'+ i +']').trigger('click');
      if (i == 7) {
        i = 0;
      }
      console.log(i);
    }
    
var intervalID = setInterval(autoPlayLi, 3000);

  $(".types-accordion").hover(function () {
    clearInterval(intervalID);
  },
  function(){
    intervalID = setInterval(autoPlayLi, 3000);
  });

    $('.video-btn').click(function() {
      $(this).hide();
      $('.video-box').show();
    });
 var intrv, c = 0;
    var li = $('.browser-tab li');
    var list = new Waypoint({
        element: $('.browser'),
        handler: function(direction) {
          
          if (c == 0) {
            setTimeout(function() {
                $('.li_1').show();
            }, 500);
            setTimeout(function() {
                intrv = setInterval(function(){
                    $('.browser-img').hide();
                  setTimeout(function() {
                    $('.browser-img').show();
                  }, 100)
                }, 200)
            }, 500);
            setTimeout(function() {
                $('.li_2').show();
            }, 700);
            setTimeout(function() {
                $('.li_3').show();
            }, 900);
            setTimeout(function() {
                $('.li_4').show();
            }, 1100);
            setTimeout(function() {
                $('.li_5').show();
            }, 1300);
            setTimeout(function() {
                $('.li_6').show();
            }, 1500);
            setTimeout(function() {
                $('.li_7').show();
                clearInterval(intrv);
            }, 1700);
          }
          c+=1;
          
        }
    });
    $('.owl-carousel').owlCarousel({
        autoPlay: 3000,
        items: 3,
        slideSpeed: 300,
        navigationText: false,
        pagination: false,
        navigation: true
    });

    $('.more-btn').click(function() {
        $(this).parents('.item').find('.more').slideToggle(400);
        if (this.textContent == 'hide')
            this.textContent = 'more...';
        else
            this.textContent = 'hide';
    });
});