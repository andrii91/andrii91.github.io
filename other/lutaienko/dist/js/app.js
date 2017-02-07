
$(window).scroll(function() {
    return $('.top-menu').toggleClass("header_fixed", $(window).scrollTop() > 0);
});

$(document).ready(function() { 
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        navText: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1050: {
                items: 3
            }
        }
    });
  

});