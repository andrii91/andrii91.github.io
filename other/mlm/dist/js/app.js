(function($) {
    $.fn.viewportChecker = function(useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem) {}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function() {
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function() {
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)) {
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round($obj.offset().top) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
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
        $(window).resize(function(e) {
            windowHeight = e.currentTarget.innerHeight;
        });
    };


    if ($(window).width() > 1200) {

        $('.right, .speaker-list li, .free-list li').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
            offset: 10
        });
        $('.left, .panel').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
            offset: 10
        });

        $('.up').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
            offset: 10
        });

        $('.down').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
            offset: 10
        });

        $('.fIn').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
            offset: 10
        });
        $('.print, .rIn, .meeting-list li').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated rotateIn', // Class to add to the elements when they are visible
            offset: 0
        });
        $('.rdl').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated rotateInDownLeft', // Class to add to the elements when they are visible
            offset: 50
        });
        $('.rdr').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated rotateInDownRight', // Class to add to the elements when they are visible
            offset: 10
        });
        $('.reviews-img').addClass("hidden_animation").viewportChecker({
            classToAdd: 'visible animated zoomInDown', // Class to add to the elements when they are visible
            offset: 10
        });

    }


  $('.my-timer').dsCountDown({
      endDate: new Date("November 17, 2016 21:00:00"),
      theme: 'black'
  });

})(jQuery);