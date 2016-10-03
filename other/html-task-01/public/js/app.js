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

    $('.header').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.visual-title').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 100    
    });
    $('.visual-title_small').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });
    $('.visual-btn').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInDown', // Class to add to the elements when they are visible
        offset: 0    
    });  

    $('.bg-white-title').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInDown', // Class to add to the elements when they are visible
        offset: 200    
    }); 
    $('.bg-white-title_small').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInDown', // Class to add to the elements when they are visible
        offset: 0    
    });  
    $('.animated_left').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });   
    $('.animated_center').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInUp', // Class to add to the elements when they are visible
        offset: 0    
    });   
    $('.animated_right').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 0    
    }); 
    $('.icon-cog').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });  
    $('.relax-block').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 100    
    });   
    $('.progress').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 100    
    });   
    $('.progress-img').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 100    
    });     
    $('.culture-box').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInUp', // Class to add to the elements when they are visible
        offset: 100    
    });    
    $('.reviews-img').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 100    
    });    
    $('.reviews-content').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 100    
    });   
    $('.bg-green').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
        offset: 100    
    });    
    $('.anim_left').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });     
    $('.anim_top').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInDown', // Class to add to the elements when they are visible
        offset: 0    
    });       
    $('.anim_bottom').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInUp', // Class to add to the elements when they are visible
        offset: 0    
    });       
    $('.anim_right').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
        offset: 0    
    });        
    $('.contact-title-small').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInDown', // Class to add to the elements when they are visible
        offset: 0    
    });       
    $('.contact-list').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
        offset: 0    
    });        
    $('footer').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated slideInUp', // Class to add to the elements when they are visible
        offset: 0    
    });   

})(jQuery);