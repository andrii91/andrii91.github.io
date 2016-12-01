$(document).ready(function() {


    if ($(window).width() > 1300) {
        $('#fullpage').fullpage();
    }
    if ($(window).width() < 1300) {
        $('.mob-btn, .menu-top li').click(function() {
            $('.menu-top').toggle();
        });
        $('.program-numb').click(function() {
            $(this).toggleClass('active');
            $(this).parent('.program-list').find('#' + $(this).data('list')).toggle();
        })
    }
    $('.price-checkbox li').click(function() {
        $(this).parent('.price-checkbox').find('li.active').removeClass('active');
        $(this).parents('.price-box').find('.price-summ.active').removeClass('active');
        $(this).parents('.price-box').find('.price-summ.old.act').removeClass('act');
        $(this).addClass('active');
        $('.' + $(this).data('check')).addClass('active');
        $('.' + $(this).data('check') + '.old').addClass('act');
        $('.option_price').val($(this).parents('.price-box').find('.price-summ.active').text());
        $('.option').val($(this).parents('.price-box').find('.price-title_small').text());
        $('.option_type').val($(this).text());
    });
    $('.play').click(function() {
        $(this).hide();
        $(this).parent('.item-video').find('.video-paranja').hide();
        $(this).parents('.item-container').find('.no-active').removeClass('no-active');
        var src = $(this).parent('.item-video').find('iframe').attr('src');
        var src1 = /^[^?]+/.exec(src)[0] + '?rel=0&autoplay=1;controls=0&amp;showinfo=0';
        $(this).parent('.item-video').find('iframe').attr('src', src1);
    });

    $('.registration').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);

        var data = {
            name: $form.find('input[name="name"]').val(),
            mail: $form.find('input[name="mail"]').val(),
            phone: $form.find('input[name="phone"]').val(),
            option: $form.find('input[name="option"]').val(),
            option_type: $form.find('input[name="type"]').val(),
            option_price: $form.find('input[name="price"]').val(),
        };

        var script = document.createElement('script');
        script.src = 'https://script.google.com/macros/s/AKfycbysLJ2emFQZZye6Qbld9kiAowaF7TtHMqZOTZABZI6_FwoVZw_9/exec?name=' + data.name + '&p2=' + data.mail + '&p3=' + data.phone + '&p4=' + data.option + '&p5=' + data.option_type + '&p6=' + data.option_price;
        script.type = 'text/javascript';
        $("body").append(script);

        setTimeout(function() {
            $(".registration")[0].reset();
            $(".registration")[1].reset();
            $(".registration")[2].reset();
            $(".registration")[3].reset();

            $('#myModal').modal('hide');
            $('#myModal_1').modal('show');
            window.location.href = "thx.html";

        }, 1000);
    });

    $('.sp-link').click(function() {
        var destination = $("#section2").offset().top - 0;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });
    $('.registration-call').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            type: 'POST',
            url: 'crm/call.php',
            dataType: 'json',
            data: $form.serialize(),
            success: function(response) {
                console.info(response);
                if (response.status == 'success') {
                    window.location.href = "thx.html";
                }
            }
        });
    });
});