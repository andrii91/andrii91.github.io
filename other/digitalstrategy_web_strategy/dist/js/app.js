$(document).ready(function() {
    $('.reg-btn').click(function() {
        var destination = $(".reg-box").offset().top - 0;
        $("body,html").animate({
            scrollTop: destination
        }, 500);
    });
    $('.modal-btn').click(function() {
        $('#' + $(this).data('modal')).show();
        $('#' + $(this).data('modal')).animate({
            opacity: 1,
        });
        $('body').addClass('overl-h');
        $('.overlay').show();
    });
    $('.overlay, .close-m').click(function() {
        $('body').removeClass('overl-h');
        $('.modal').hide();
        $('.overlay').hide();
        $('.modal').animate({
            opacity: 0,
        });
    });
    $('.cbalink').hide();

});