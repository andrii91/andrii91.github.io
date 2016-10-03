(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };

    
    $('.head-logo').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 100    
    });
    setTimeout(function () {
        $('.head-content').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 1500);
     $('.made_ua').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 100    
    });
     $('.arr-down').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.left').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.right').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.btn-absolute').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 100    
    });
   /* setTimeout(function () {
        $('.made_ua').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated slide1InRight', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 2500);*/

var waypoint = new Waypoint({
  element: document.getElementById('context-example'),
  handler: function(dir) {
    if (dir == 'up') {
        $('.bale-img').removeClass('fixed');
    } else {
        $('.bale-img').addClass('fixed');
    }
  },
  offset: '-20%'
})
var waypoint1 = new Waypoint({
  element: document.getElementById('context-example1'),
  handler: function(dir) {
    $('.bale-img').toggleClass('fixed');
  },
  offset: '100%'
})

   // $("#tel").inputmask("+38(999)999-99-99");
   // $("#tel1").inputmask("+38(999)999-99-99");


  $('.order-link').click(function(){
    var destination = $("#context-example1").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });


$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('.order').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});

})(jQuery);
