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

    $("a.gallery").fancybox();
    
    if ($(window).width() > 1200) {
      $('.head-logo').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 0    
    });
    $('.participants-title').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 0    
    });
    $('.command-logo').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });
    $('.participants-box-name').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 0    
    });
    $('.right').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 50    
    });
    $('.left').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 50    
    });

    $('.up').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
        offset: 50    
    });

    $('.down').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 50    
    });
    $('.programs-title').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
        offset: 0    
    });
    }


    
/*$('#reg').on('submit', function (e) {
  e.preventDefault();
  var $form = $(this);
  $.ajax({
  type: 'POST',
  url: '../registration.php',
  dataType: 'json',
  data: $form.serialize(),
    success: function (response) {
      console.info(response);
      if (response.status == 'success') {
      $form.hide();
      $form.html('<p class="callback-success-info"><b>Спасибо!</b>Ваша заявка принята, ожидайте звонка! </p>').show();
      }
    }
  })
});*/

    function autoPlay (){
        var src = $('#video-head').attr('src');
        var src1 = /^[^?]+/.exec(src)[0] + '?rel=0&autoplay=1;controls=0&amp;showinfo=0';
        $('#video-head').attr('src', src1);
    };
    setInterval(autoPlay, 27000);

})(jQuery);
