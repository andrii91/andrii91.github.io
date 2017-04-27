$(window).scroll(function() {
    return $('.head').toggleClass("head_fixed", $(window).scrollTop() > 0);
});
$(document).ready(function() { 
  $('.scroll-next').click(function(){
    var destination = $(".art_lab").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});