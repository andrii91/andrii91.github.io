$(document).ready(function() { 
  $(window).scroll(function() {
    return $('.head').toggleClass("header_fixed", $(window).scrollTop() > 0);
  });
  $('.heart').click(function(){
   $(this).css({'color':'#ec2828',});
  });


  $('#st_mosc').click(function(){
   $(this).parents('.price-box').find('.st_mosc').addClass('active');
   $(this).parents('.price-box').find('.st_onl').removeClass('active');
   $(this).addClass('active');
   $('#st_onl').removeClass('active');
   $('#options').val('Вживую в Москве');
  });
  $('#st_onl').click(function(){
   $(this).parents('.price-box').find('.st_onl').addClass('active');
   $(this).parents('.price-box').find('.st_mosc').removeClass('active');
   $(this).addClass('active');
   $('#st_mosc').removeClass('active');
   $('#options').val('Онлайн-трансляция');
  });
  $('#st_mosc_1').click(function(){
   $(this).parents('.price-box').find('.st_mosc').addClass('active');
   $(this).parents('.price-box').find('.st_onl').removeClass('active');
   $(this).addClass('active');
   $('#st_onl_1').removeClass('active');
   $('#options').val('Вживую в Москве');
  });
  $('#st_onl_1').click(function(){
   $(this).parents('.price-box').find('.st_onl').addClass('active');
   $(this).parents('.price-box').find('.st_mosc').removeClass('active');
   $(this).addClass('active');
   $('#st_mosc_1').removeClass('active');
   $('#options').val('Онлайн-трансляция');
  });
  
  $('.standard').click(function(){
   $('#participation').val('Стандарт');
  });
  $('.premium').click(function(){
   $('#participation').val('Премиум');
  });
  
  $('.cases').click(function(){
    var destination = $(".appearance").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.program-link').click(function(){
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.result-link').click(function(){
    var destination = $(".result").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.registr-btn, .menu-reg').click(function(){
    $('#registr-btn').text($(this).text());
  });
    if ($(window).width() > 1200) {
        var waypoint_result = new Waypoint({
        element: $('.result'),
        handler: function(dir) {
            if (dir == 'up') {
              $('.result-img img').removeClass('active');
            } else {
              $('.result-img img').addClass('active');
            }
          },
          offset: '30%'
        });
    }
    if ($(window).width() < 1200){
        $('.mob-btn').click(function(){
         $('.menu').toggle();
        });
    }
});