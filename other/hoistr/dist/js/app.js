!function(t){t(function(){t(".registration").each(function(){function i(){o.find(".rfield").each(function(){""!=t(this).val()?t(this).removeClass("empty_field"):t(this).addClass("empty_field")})}function e(){o.find(".empty_field").css({"box-shadow":"inset 0px 0px 5px 0px rgba(255, 0, 0, 0.75)"}),setTimeout(function(){o.find(".empty_field").removeAttr("style")},500)}var o=t(this),a=o.find(".submit-btn");o.find(".rfield").addClass("empty_field"),setInterval(function(){i();var t=o.find(".empty_field").length;if(t>0){if(a.hasClass("disabled"))return!1;a.addClass("disabled")}else a.removeClass("disabled")},500),a.click(function(){return t(this).hasClass("disabled")?(e(),!1):void o.submit()})})})}(jQuery),$(document).ready(function(){$(window).scroll(function(){return $(".menu-top").toggleClass("header_fixed",$(window).scrollTop()>0)}),$("#header-carousel").owlCarousel({animateOut:"slideOutDown",animateIn:"flipInX",items:1,margin:0,nav:!0,stagePadding:0,loop:!0,navText:!1,smartSpeed:450,responsive:{0:{items:1,nav:!1},600:{items:1}}}),$("#loop").owlCarousel({animateOut:"slideOutDown",animateIn:"flipInX",center:!0,items:2,loop:!0,margin:0,nav:!0,smartSpeed:100,navText:!1,responsive:{0:{items:1,nav:!1},600:{items:3}}}),$(".navbar").scroolly([{to:"con-top",css:{position:"absolute",top:""}},{from:"con-top",css:{position:"fixed"}}],$(".body")),$("section .scrl").scroolly([{alias:"before",to:"con-top",css:{position:"static",top:"0px",bottom:""}},{alias:"staging",from:"con-top",to:"con-bottom -6el = top",css:{position:"static",top:"0px",bottom:""},onCheckIn:function(t){$(".navbar li[data-target]").removeClass("active"),$('.navbar li[data-target="'+t.data("item")+'"]').addClass("active")},onCheckOut:function(t){$(".navbar li[data-target]").removeClass("active")}},{alias:"after",from:"con-bottom -6el = top",css:{position:"static",top:"",bottom:"0px"}}],$("section")),$("li[data-target]").click(function(t){t.preventDefault();var i=$(".scrl[data-item= '"+$(this).data("target")+"']").offset().top+10;$("body,html").animate({scrollTop:i},500)}),$(".map").click(function(){$(this).removeClass("map")}),$(".registration").on("submit",function(t){t.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var i=$(this);$.ajax({type:"POST",url:"registration.php",dataType:"json",data:i.serialize(),success:function(t){console.info(t),"success"==t.status&&setTimeout(function(){var t=['<div class="success">',"<p> Cпасибо, с вами свяжутся!</p>","</div>"].join("");$(".registration").parent().html(t)},2e3)}})}),$(".mob-btn").click(function(){$(".menu-top .nav").toggle()}),$(window).width()<768&&$(".nav li").click(function(){$(".menu-top .nav").toggle()})});