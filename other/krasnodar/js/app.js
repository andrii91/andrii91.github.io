$(window).scroll(function() {
  return $('.header').toggleClass("header_fixed", $(window).scrollTop() > 0);
});
jQuery(document).ready(function($){
  $('#menu-icon').click(function () {
    $('.menu-mob').hide();
    $(this).next().show();
    return false;
  });
  $('body, .menu-mob a').click(function () {
      $('.menu-mob').hide();
  });
});

$(function() {
  $('.what').click(function(){
    var destination = $("#training").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.progr, .train').click(function(){
    var destination = $("#program").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.task').click(function(){
    var destination = $(".after").offset().top - 10;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.who').click(function(){
    var destination = $(".reviews").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.coach').click(function(){
    var destination = $("#training_leads").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.bonus').click(function(){
    var destination = $(".additional_materials").offset().top - 5;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  // $('.price, .price_reg').click(function(){
  $('.price').click(function(){
    var destination = $("#registration").offset().top - 5;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});