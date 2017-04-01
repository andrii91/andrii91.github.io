$(document).ready(function () {
  $(window).scroll(function () {
    return $('.menu-top').toggleClass("header_fixed", $(window).scrollTop() > 0);
  });
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
});