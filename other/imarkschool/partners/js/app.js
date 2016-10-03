$(document).ready(function(){setInterval(function(){$(".active.city-active").css({top:"27%"}),setTimeout(function(){$(".active.city-active").css({top:"28%"})},500)},1e3);var t=1;setInterval(function(){$($(".green-tab .active").next()).find("a").trigger("click"),t++,8==t&&($($(".green-tab li").first()).find("a").trigger("click"),t=1)},5e3);new Waypoint({element:$(".statistics .statistics-box-title"),handler:function(t){"up"==t?$(".statistics-img img").rotate(60):$(".statistics-img img").rotate(0)},offset:"40%"});$(".carousel-indicators li").click(function(){$(".carousel-indicators li").removeClass("active"),$(this).addClass("active")}),$(".right.carousel-control").click(function(){$(".carousel-indicators li.active").next().trigger("click")}),$(".left.carousel-control").click(function(){$(".carousel-indicators li.active").prev().trigger("click")}),$(window).width()<1200&&($(".mobile-btn").click(function(){$(".menu").toggle()}),$(".menu-item").click(function(){$(".menu").toggle()})),$(".play").click(function(){var t=$(this).parents(".video-parent").find(".video").attr("src"),i=/^[^?]+/.exec(t)[0]+"?rel=0&autoplay=1;controls=0&amp;showinfo=0";$(this).parents(".video-parent").find(".video").attr("src",i),$(this).parents(".video-paranja").hide()}),$(".play").click(function(){var t=$(this).parents(".video-parent").find(".video").attr("src"),i=/^[^?]+/.exec(t)[0]+"?rel=0&autoplay=1;controls=0&amp;showinfo=0";$(this).parents(".video-parent").find(".video").attr("src",i),$(this).parents(".history-paranja").hide()}),$("#owl").owlCarousel({autoPlay:3e3,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],slideSpeed:300,navigationText:!1,pagination:!1,navigation:!0})
  $('.results-link').click(function(){
    var destination = $("#results").offset().top - 100;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.training-link').click(function(){
    var destination = $("#training").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.bonus-link').click(function(){
    var destination = $("#bonus").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
  $('.training_info-link').click(function(){
    var destination = $("#training_info").offset().top - 50;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});