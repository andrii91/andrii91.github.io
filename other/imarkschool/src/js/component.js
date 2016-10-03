$(document).ready(function() { 

	setInterval(function() {
		$('.active.city-active').css({
			'top': '27%',
		});
		setTimeout(function() {
			$('.active.city-active').css({
			'top': '28%',
			});
		}, 500);
	}, 1000);
var intervalCount = 1;	
	setInterval(function() {
		$($('.green-tab .active').next()).find('a').trigger('click');
		intervalCount++
		if (intervalCount == 8) {
			$($('.green-tab li').first()).find('a').trigger('click');
			intervalCount = 1;
		}
	}, 5000);


	 var waypoint_statistics = new Waypoint({
	  element: $('.statistics .statistics-box-title'),
	  handler: function(dir) {
	    if (dir == 'up') {
	      $(".statistics-img img").rotate(+60);
	    }else{
	      $(".statistics-img img").rotate(0);
	    }
	  },
	  offset: '40%'
	});
	 $('.carousel-indicators li').click(function(){
	 	$('.carousel-indicators li').removeClass('active');
	 	$(this).addClass('active');
	 });
	 $('.right.carousel-control').click(function(){
	 	$('.carousel-indicators li.active').next().trigger( "click" );
	 })
	 $('.left.carousel-control').click(function(){
	 	$('.carousel-indicators li.active').prev().trigger( "click" );
	 });

	if ($(window).width() < 1200) {
		$('.mobile-btn').click(function(){
			$('.menu').toggle();
		});
		$('.menu-item').click(function(){
			$('.menu').toggle();
		});
	}

	$('.play').click(function() {
		var src = $(this).parents('.video-parent').find('.video').attr('src');
        var src1 = /^[^?]+/.exec(src)[0] + '?rel=0&autoplay=1;controls=0&amp;showinfo=0';
        $(this).parents('.video-parent').find('.video').attr('src', src1);
        $(this).parents('.video-paranja').hide();
	});
	$('.play').click(function() {
		var src = $(this).parents('.video-parent').find('.video').attr('src');
        var src1 = /^[^?]+/.exec(src)[0] + '?rel=0&autoplay=1;controls=0&amp;showinfo=0';
        $(this).parents('.video-parent').find('.video').attr('src', src1);
        $(this).parents('.history-paranja').hide();
	});

	$("#owl").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        slideSpeed : 300,
        navigationText : false,
        pagination : false,
        navigation : true
    });

});