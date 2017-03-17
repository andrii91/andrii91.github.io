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
                    form.submit();
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
        responsive: {
           0:{
            items:1,
            nav:false
            },
            600:{
                items:3,
            }
        }
    });



    $('.navbar').scroolly([{
        to: 'con-top',
        css: {
            position: 'absolute',
            top: ''
        }
    }, {
        from: 'con-top',
        css: {
            position: 'fixed'
        }
    }], $('.body'));

    $('section .scrl').scroolly([{
        alias: 'before',
        //                    from: 'doc-top',
        to: 'con-top',
        css: {
            position: 'static',
            top: '0px',
            bottom: ''
        }
    }, {
        alias: 'staging',
        from: 'con-top',
        to: 'con-bottom -6el = top',
        //                    to: 'top bottom -100#',
        css: {
            position: 'static',
            top: '0px',
            bottom: ''
        },

        onCheckIn: function($el) {
            $('.navbar li[data-target]').removeClass('active');
            $('.navbar li[data-target="' + $el.data('item') + '"]').addClass('active');
        },
        onCheckOut: function($el) {
            $('.navbar li[data-target]').removeClass('active');
        }

    }, {
        alias: 'after',
        from: 'con-bottom -6el = top',
        //                    to: 'finish',
        css: {
            position: 'static',
            top: '',
            bottom: '0px'
        }
    }], $('section'));

    $("li[data-target]").click(function(e) {
        e.preventDefault();
        var destination = $(".scrl[data-item= '" + $(this).data('target') + "']").offset().top + 10;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });
    $('.map').click(function() {
        $(this).removeClass('map');
    })

    $('.registration').on('submit', function(e) {
        e.preventDefault();
        $('.submit').addClass('inactive');
        $('.submit').prop('disabled', true);
        var $form = $(this);


        $.ajax({
            type: 'POST',
            url: 'registration.php',
            dataType: 'json',
            data: $form.serialize(),
            success: function(response) {
                console.info(response);
                if (response.status == 'success') {
                   
                    setTimeout(function() {
                        var html = [
                            '<div class="success">',
                            '<p> Cпасибо, с вами свяжутся!</p>',
                            '</div>'
                        ].join('');

                        $('.registration')
                            .parent()
                            .html(html);
                    }, 2000);
                }
            }
        });
    });

    $('.mob-btn').click(function() {
        $('.menu-top .nav').toggle();
    });
    if ($(window).width() < 768) {
        $('.nav li').click(function() {
            $('.menu-top .nav').toggle();
        });
    }

});