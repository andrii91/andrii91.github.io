$(document).ready(function(){new Waypoint({element:$(".genius"),handler:function(n){"up"==n||$(window).scroll(function(){var n=$(this).scrollTop();$(this).scrollTop()>0&&(n%2==0?$(".genius-img").addClass("anim"):$(".genius-img").removeClass("anim"))})},offset:"30%"}),new Waypoint({element:$(".registration"),handler:function(){a=3,$(".genius-img").removeClass("anim")},offset:"30%"});if($(window).width()<1200&&$(".mob-btn, .menu-link").click(function(){$("body .menu-top .menu").toggle()}),$(window).width()>1200){var n=1;setInterval(function(){$($(".detsils .nav-tabs .active").next()).find("a.tab-link").trigger("click"),n++,4==n&&($($(".detsils .nav-tabs li").first()).find("a").trigger("click"),n=1)},5e3)}
  $(".reg-form").on('submit', function (e) {
    /*$('#registration-btn').addClass('inactive');
    $('#registration-btn').prop('disabled', true);*/
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      type: 'POST',
      url: '../reg.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {
        console.info(response);
        if (response.status == 'success') {
        $form.hide();
        $('.reg-form').hide();
        $('.form-title').hide();
        $form.html('<p class="callback-success-info">Спасибо! Мы свяжемся с Вами в ближайшее время.</p>').show();
        }
      }
    })
  });
  $('.arithletic-block-link').click(function(){
    var destination = $(".arithletic-block").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.genius-link').click(function(){
    var destination = $(".genius").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.testimonials-link').click(function(){
    var destination = $(".testimonials").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.contact-link').click(function(){
    var destination = $(".contact").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});