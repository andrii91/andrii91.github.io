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
        $('li[data-tab=tab_' + i + ']').trigger('click');
        if (i == 7) {
            i = 0;
        }
        console.log(i);
    }
    if ($(window).width() > 1200) {
      var intervalID = setInterval(autoPlayLi, 2000);

      $(".types-accordion").hover(function () {
      clearInterval(intervalID);
      },
      function(){
      intervalID = setInterval(autoPlayLi, 2000);
      });

      $('.owl-carousel').owlCarousel({
        autoPlay: 3000,
        items: 3,
        slideSpeed: 300,
        navigationText: false,
        pagination: false,
        navigation: true
    });
      
    }

  if ($(window).width() < 1200) {
    $('.mob-btn, .head-menu li').click(function(){
      $('.head-menu').toggle();
    })
    $('.owl-carousel').owlCarousel({
        autoPlay: 3000,
        items: 3,
        slideSpeed: 300,
        navigationText: false,
        pagination: false,
        navigation: false
    });
  }

  $('.accordion_m-title').click(function() {
    $(this).toggleClass('active');
     $(this).parents('.accordion-list').find('.accordion_m-info').slideToggle(400);
  });

    $('.video-btn').click(function() {
        $(this).hide();
        $('.video-box').show();
        var src = $('.video-box iframe').attr('src');
        var src1 = /^[^?]+/.exec(src)[0] + '?rel=0&autoplay=1;controls=0&amp;showinfo=0';
        $('.video-box iframe').attr('src', src1);
    });

    var count = 0;
    var li = $('.browser-tab li');
    $('img.li_7').show();
    var list = new Waypoint({
        element: $('.browser'),
        handler: function(direction) {

            if (count == 0) {
                count = 1;
                setTimeout(function() {
                    $('img.li_7').hide();
                    $('.li_1').show();
                }, 500);
                setTimeout(function() {
                    $('img.li_1').hide();
                    $('.li_2').show();
                }, 1000);
                setTimeout(function() {
                    $('img.li_2').hide();
                    $('.li_3').show();
                }, 1500);
                setTimeout(function() {
                    $('img.li_3').hide();
                    $('.li_4').show();
                }, 2000);
                setTimeout(function() {
                    $('img.li_4').hide();
                    $('.li_5').show();
                }, 2500);
                setTimeout(function() {
                    $('img.li_5').hide();
                    $('.li_6').show();
                }, 3000);
            }
        }

    });
    $('.making-img').addClass('hidden_animation');
    var making = new Waypoint({
        element: $('.making'),
        handler: function(direction) {
            $('.making-img').addClass('visible animated fadeInLeft');
        },
        offset: '80%'
    });

    

    $('.more-btn').click(function() {
        $(this).parents('.item').find('.more').slideToggle(400);
        if (this.textContent == 'hide')
            this.textContent = 'more...';
        else
            this.textContent = 'hide';
    });
});