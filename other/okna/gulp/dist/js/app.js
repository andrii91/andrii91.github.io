/* Change sertificat */

function changeSertificat(element) {
    var img = $(element).attr('src');
    var preview = $('#sertificat');
    preview.fadeOut(500);
    preview.fadeIn(500, function() {
        $('#sertificat').attr('src', img);
    });
}

function changePhoto(element) {
    var img = $(element).attr('src');
    var preview = $('#contPhoto');
    var img2 = preview.attr('src');
    preview.attr('src', img);
    $(element).attr('src', img2);

}

$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
    $('.slides-our-works').owlCarousel({
        animateOut: 'fadeOut',
        //loop: true,
        items: 1,
        margin: 10
    });
    var testimonials = $('.test-slides').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        margin: 22,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            853: {
                items: 3
            }
        }
    });
    $('.balcony-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                nav: false
            }
        }
    });

    $('.owl-carousel.preview-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    $('.balcony-carousel .owl-dots').hide();
    $('.balcony-carousel .owl-nav.disabled').show();
    $('.owl-carousel.preview-carousel .owl-dots').hide();
    $('.owl-carousel.preview-carousel .owl-nav.disabled').show();

    $('.tstmnl').hide();
    $('#' + $(".tes-slider").find('.active.center .tes-slide').data('testimonial')).show();
    $('.prev-button').click(function() {
        testimonials.trigger('prev.owl.carousel');
        $('.tstmnl').hide();
        $('#' + $(".tes-slider").find('.active.center .tes-slide').data('testimonial')).show();

    });
    $('.next-button').click(function() {
        testimonials.trigger('next.owl.carousel');
        $('.tstmnl').hide();
        $('#' + $(".tes-slider").find('.active.center .tes-slide').data('testimonial')).show();
    });


    $('.tes-slide').click(function() {
        $('.tstmnl').hide();
        $('#' + $(this).data('testimonial')).show();
    });

    var certificats = $('.certificat-slides').owlCarousel({
        items: 1,
        dots: false
    });
    $('.cer-prev-button').click(function() {
        certificats.trigger('prev.owl.carousel');
    });
    $('.cer-next-button').click(function() {
        certificats.trigger('next.owl.carousel');
    });
    var partners = $('.partners-slides').owlCarousel({
        items: 5,
        loop: true,
        center: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            853: {
                items: 5
            }
        }
    });
    $('.part-prev-button').click(function() {
        partners.trigger('prev.owl.carousel');
    });
    $('.part-next-button').click(function() {
        partners.trigger('next.owl.carousel');
    });

    $('.item-color').click(function() {
        $('.item-color.active').removeClass('active');
        $('#preview-r').attr('src', $(this).find('img').data('img'));
        $('#color-title').text($(this).find('img').attr('title'));
        $(this).addClass('active');

    })

    $('.end-time').text(new Date().getDate() + 1 + '.' + new Date().getMonth() + '.' + (new Date().getFullYear() - 2000));

    $('.modal-btn').click(function() {
        $('#' + $(this).data('modal')).show();
        $('#' + $(this).data('modal')).animate({
            opacity: 1,
        });
        $('body').addClass('overl-h');
        $('.overlay').show();
    });
    $('.overlay, .close-m, .ok').click(function() {
        $('body').removeClass('overl-h');
        $('.modal').hide();
        $('.overlay').hide();
        $('.modal').animate({
            opacity: 0,
        });
    });

    $('.third-link').click(function() {
        var destination = $(".third-block").offset().top - 0;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });
    $('.more-btn').click(function(e) {
        e.preventDefault();
        $('.tel-more').slideToggle();
    });

    $('.modal-btn').click(function(){
        $('input[name="type"]').val($(this).text());
    });
    $('input').attr('required', 'true');
    $('form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        
        if ($form.data('form') == 'sms') {
            console.log($form.data('form'));
        }else{
            $.ajax({
                type: 'POST',
                url: 'order.php',
                dataType: 'json',
                data: $form.serialize(),
                success: function(response) {
                    console.info(response);
                    if (response.status == 'success') {
                        for (var i = 0; i < $('form').length; i++) {
                          $('form')[i].reset();
                        }
                      $('#modal_1').show();
                      $('#modal_5').hide();
                      $('body').addClass('overl-h');
                      $('.overlay').show();
                    }
                }
            });
            
        }
    });

});