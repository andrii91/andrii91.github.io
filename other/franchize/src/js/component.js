$(window).scroll(function() {
  return $('.top-menu').toggleClass("header_fixed", $(window).scrollTop() > 0);
});
$(document).ready(function() { 
var $check = $('.check');
var $what_get = $('.what_get-count');
var top;

/*        function checkAnimation() {
        for (var i = 0; i < $check.length; i++) {
           top = parseInt($($check[i]).css( "top" )) ;
           $($check[i]).css({
            top: top+2,
          });
        }
        setTimeout(function() {
            for (var i = 0; i < $check.length; i++) {
               top = parseInt($($check[i]).css( "top" )) ;
               $($check[i]).css({
                top: top-2,
              });
            }
        }, 650);
        
    }*/
/*    function checkWhatGet() {
        for (var i = 0; i < $what_get.length; i++) {
           top = parseInt($($what_get[i]).css( "top" )) ;
           $($what_get[i]).css({
            top: top-5,
          });
        }
        setTimeout(function() {
            for (var i = 0; i < $what_get.length; i++) {
               top = parseInt($($what_get[i]).css( "top" )) ;
               $($what_get[i]).css({
                top: top+5,
              });
            }
        }, 1000);
    }*/
    function checkAnimation() {
          $('.check_1').css({top: '117px',});
          $('.check_2').css({top: '168px',});
          $('.check_3').css({top: '42px',});
          $('.check_4').css({top: '46px',});
          $('.check_5').css({top: '121px',});
          $('.check_6').css({top: '73px',});
          $('.check_7').css({top: '200px',});
          $('.check_8').css({top: '66px',});
          $('.check_9').css({top: '189px',});
          $('.check_10').css({top: '110px',});
          $('.check_11').css({top: '158px',});
          $('.check_12').css({top: '155px',});

        setTimeout(function() {
          $('.check_1').css({top: '115px',});
          $('.check_2').css({top: '166px',});
          $('.check_3').css({top: '40px',});
          $('.check_4').css({top: '44px',});
          $('.check_5').css({top: '119px',});
          $('.check_6').css({top: '71px',});
          $('.check_7').css({top: '197px',});
          $('.check_8').css({top: '64px',});
          $('.check_9').css({top: '187px',});
          $('.check_10').css({top: '108px',});
          $('.check_11').css({top: '156px',});
          $('.check_12').css({top: '153px',});

        }, 500);
        
    }
    function checkWhatGet() {
           $($what_get).css({
            top: '-14px',
          });
        setTimeout(function() {
          $($what_get).css({
            top: '-19px',
          });
        }, 1000);
    }

    function checkCalc() {
        $('.root-icon').css({ 'top' : 43 });
        $('.share-icon').css({ 'top' : 0 });
        $('.degree-icon').css({ 'top' : 0 });

        $('.plus-icon').css({ 'top' : 43 });
        $('.minus-icon').css({ 'top' : 0 });
        $('.multiply-icon').css({ 'top' : 43 });
        setTimeout(function() {
            $('.root-icon').css({ 'top' : 0 });
            $('.share-icon').css({ 'top' : 43 });
            $('.degree-icon').css({ 'top' : 43 });

            $('.plus-icon').css({ 'top' : 0 });
            $('.minus-icon').css({ 'top' : 43 });
            $('.multiply-icon').css({ 'top' : 0 });
        }, 600);

    }

      

    if ($(window).width() > 1200) {
        setInterval(checkAnimation, 1000);
        setInterval(checkWhatGet, 2000);
        checkCalc();
        setInterval(checkCalc, 1200);
        $(window).scroll(function() {
            var a = $(this).scrollTop();
             a = Math.round(a/100);
            if ($(this).scrollTop() > 0) {
              if (a % 2 == 0) {
                  $('.mental-img img').addClass('anim');
                  $('.programs-img img').addClass('animate-img');

              }else{
                $('.mental-img img').removeClass('anim');
                $('.programs-img img').removeClass('animate-img');

              }
            }
        });

    }


    $('.img-click').click(function() {
        var large_src = $('.img-large').attr('src');
        $('.img-large').attr('src', $(this).attr('src'));
        $(this).attr('src', large_src);
    });

    $('.history-img.small .before').click(function() {
        var large_src = $('.img-large').attr('src');
        var small_img = $(this).parent('.history-img').find('.img-click').attr('src');
        $('.img-large').attr('src', small_img);
        $(this).parent('.history-img').find('.img-click').attr('src', large_src);
    });

    $('.methods').click(function() {
        $('.type_hidden').val('Получить методику');
        $('#text-btn').text('Получить методику');
    });
    $('.business').click(function() {
        $('.type_hidden').val('Получить бизнес-план');
        $('#text-btn').text('Получить бизнес-план');
    });
    $('.experience').click(function() {
        $('.type_hidden').val('Перенять опыт');
        $('#text-btn').text('Перенять опыт');
    });
    $('.answers').click(function() {
        $('.type_hidden').val('Получить ответы');
        $('#text-btn').text('Получить ответы');
    });
    $('.cell').click(function() {
        $('.type_hidden').val('Связаться');
        $('#text-btn').text('Связаться');
    });

    $('.registr-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    var $this = $(this);

    var data = {
      name: $form.find('input[name="name"]').val(),
      email: $form.find('input[name="email"]').val(),
      phone: $form.find('input[name="phone"]').val(),
      city: $form.find('input[name="city"]').val(),
      type: $form.find('input[name="type"]').val(),
    };

    var script = document.createElement('script');
    script.src = 'https://script.google.com/macros/s/AKfycbw3OpS8yNkvRzz_tgwbnVChR7V4jf-zNeMOAwPHjG5AUYkl9tM/exec?name=' +data.name+ '&p2=' +data.email+ '&p3=' +data.phone+ '&p4=' +data.city+ '&p5=' +data.type;
    script.type = 'text/javascript';
    $("body").append(script);

  setTimeout(function() {
/*      if ($(window).width() > 1200) {
        $('.registration .registration-box').css({
            'margin-top' : '160px'
        });
    }*/
  $('#myModal').modal('toggle');
  $this.trigger('reset');
  $('#modal').modal();
/*    var html = [
      '<div class="success">',
        '<p>Спасибо, мы свяжемся с вами в ближайшее время!</p>',
      '</div>'
    ].join('');

     $this
      .parent()
        .html(html);*/
  }, 2000);
  });
    if ($(window).width() < 1200) {
        $('.mob-btn').click(function(){
            $('.mob').toggle();
            $('.top-menu').toggleClass('white-bg');
        });
    }

});