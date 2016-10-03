/*
    Version 1.3.2
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

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

    
    $('.thanks-img').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.head-title h2').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slide1InRight', // Class to add to the elements when they are visible
        offset: 100    
    });


    function fadeMy() {
        $.fn.fade_img = function (ops) {
          var $elem = this;
          var res = $.extend({ delay: 4900, speed: 5000 }, ops);
          for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
           $elem.eq(i).delay(pause).fadeIn(res.speed).fadeOut();
          }
          return $elem;
         };
         $('.fade-my').fade_img();
    };

    function fadeMy1() {
        $.fn.fade_img = function (ops) {
          var $elem = this;
          var res = $.extend({ delay: 4900, speed: 5000 }, ops);
          for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
           $elem.eq(i).delay(pause).fadeIn(res.speed).fadeOut();
          }
          return $elem;
         };
         $('.fade-my1').fade_img();
    };
    fadeMy();
    setInterval(fadeMy, 15700);
    fadeMy1();
    setInterval(fadeMy1, 10700);

    $('#btn_modal1').click(function() {
         $('#myModal2').modal('hide');
         $('#myModal1').modal('show');
    });
    $('#btn_modal2').click(function() {
         $('#myModal3').modal('hide');
         $('#myModal1').modal('show');
    });


$('#btn-slide1').click(function() {
    $( '#slider1 .content' ).append( $( '#slider1 .content div.effect' ).first().clone() );
    $( '#slider1 .content div.effect ' ).first().remove();
});
$('#btn-slide2').click(function() {
    $( '#slider2 .content' ).append( $( '#slider2 .content div.effect' ).first().clone() );
    $( '#slider2 .content div.effect ' ).first().remove();
});
  $("#phone").inputmask("+38(999)999-99-99");
  $("#phone1").inputmask("+38(999)999-99-99");
})(jQuery);
