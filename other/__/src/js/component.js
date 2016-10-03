$(document).ready(function() { 
  $('.head-img img').click(function(){
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});