(function($) {
    
    $(function() {

        $('.registration').each(function() {
            var form = $(this),
                btn = form.find('.submit-btn');

            form.find('.rfield').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput() {
                form.find('.rfield').each(function() {
                    if ($(this).val() != '') {
                        $(this).removeClass('empty_field');
                    } else {
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей
            function lightEmpty() {
                form.find('.empty_field').css({
                    'box-shadow': 'inset 0px 0px 5px 0px rgba(255, 0, 0, 0.75)'
                });
                setTimeout(function() {
                    form.find('.empty_field').removeAttr('style');
                }, 500);
            }

            setInterval(function() {
                checkInput();
                var sizeEmpty = form.find('.empty_field').length;
                if (sizeEmpty > 0) {
                    if (btn.hasClass('disabled')) {
                        return false
                    } else {
                        btn.addClass('disabled')
                    }
                } else {
                    btn.removeClass('disabled')
                }
            }, 500);

            btn.click(function() {
                if ($(this).hasClass('disabled')) {
                    lightEmpty();
                    return false
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'registration/registration.php',
                        dataType: 'json',
                        data: $(this).serialize(),
                        success: function(response) {
                            console.info(response);
                            if (response.status == 'success') {
                               
                                setTimeout(function() {
                                    var html = [
                                        '<div>',
                                        '<p style="color: #222; font-size: 25px; font-weight: 900; margin: 40px 0; line-height: 1; text-transform: uppercase; text-align: center;"> Cпасибо, с вами свяжутся!</p>',
                                        '</div>'
                                    ].join('');

                                    $('.registration')
                                        .parent()
                                        .html(html);
                                }, 2000);
                            }
                        }
                    });
                }
            });

        });

    });

})(jQuery);

$(document).ready(function() {

    $(window).scroll(function() {
        return $('.menu-top').toggleClass("header_fixed", $(window).scrollTop() > 0);
    });

    $('#header-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 0,
        nav: true,
        stagePadding: 0,
        loop: true,
        navText: false,
        smartSpeed: 450,
        responsive: {
           0:{
            items:1,
            nav:false
            },
            600:{
                items:1,
            }
        }
    });
    $('#loop').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        center: true,
        items: 2,
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 100,
        navText: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
           0:{
            items:1,
            autoplay: false,
            nav:false
            },
            600:{
                items:3,
            }
        }
    });


    $("a[href]").click(function(e) {
        e.preventDefault();
        var destination = $("#" + $(this).attr('href').substring(1)).offset().top + 0;
        console.log(destination);
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });
    $('.map').click(function() {
        $(this).removeClass('map');
    })


    $('.mob-btn').click(function() {
        $('.menu-top .nav').toggle();
        $(this).parents('#navbar').addClass('header_fixed');
    });
    if ($(window).width() < 768) {
        $('.nav li').click(function() {
            $('.menu-top .nav').toggle();
        });
    }
    $('.cbalink').hide();

    $('body').scrollspy({ target: '#navbar', offset: 200 });
    var currentItem = $("#navbar li.active > a").attr('href').substring(1);
    $('.navbar li[data-target="' + currentItem + '"]').addClass('active');

    /*$('#navbar').on('activate.bs.scrollspy', function () {
        currentItem = $("#navbar li.active > a").attr('href').substring(1);
        $('.navbar li[data-target]').removeClass('active');
        $('.navbar li[data-target="' + currentItem + '"]').addClass('active');
   })*/

});