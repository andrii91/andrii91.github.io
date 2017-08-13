$(document).ready(function () {
  // init nav object from dom
  var nav = $('nav');
  // get heigth of the nav
  var navHeight = nav.outerHeight();

  // click-trigger
  $('a[href*="#"]:not([href="#"])').click(function (event) {
    scrollToSection(this);
    event.preventDefault();
  });

  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  // get target position and scrolls to it
  function scrollToSection(self) {
    // get the target href
    var href = $(self).attr('href');

    // get the target position
    var targetPos = $(href).offset().top - navHeight + 20;

    // scroll to target
    $('html, body').animate({
      scrollTop: targetPos
    }, 400);
  }

  /*
   * Updates active section on scroll
   */
  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  /*
   * Updates active section on scroll
   */
  function activateCurrentSection() {
    var id; // init the id of the element that will be activated

    // get all sections
    var sections = $('.section');

    // store current position on the page when scroll is triggered
    var pos = $(document).scrollTop();

    /*
     * Exception: if last section is <100% of the screen height
     * make it active when 50% of it is visible.
     * Otherwise the last section would never activate.
     */
    var lastSection = sections[sections.length - 1]; // get last section
    var lastSectionTooSmall = $(lastSection).height() < $(window).height();

    if (lastSectionTooSmall) {
      var lastSectionTopPos = $(lastSection).offset().top;
      // lastSectionTriggerPos is true if 50% of the last section is visible
      var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height() / 2);
      var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
    }

    if (lastSectionTooSmall && lastSectionInView) {
      id = $(lastSection).attr('id');

    } else { // else last section is >= 100% of the view check all sections to find the top one
      sections.each(function () {
        var top = $(this).offset().top - navHeight; // get the top & bottom position of the section
        var bottom = top + $(this).outerHeight();

        /*
         * if the current position is higher (deeper on the page) than the top of the section
         * and it is smaller (heiger on the page) than the bottom of the section
         * it is the active section.
         */
        if (pos >= top && pos <= bottom) {
          id = $(this).attr('id'); // store the id of this section
        }
      });
    }

    /*
     if an id was set before, activate the section in the nav
     */
    if (id) {
      nav.find('li').removeClass('active');
      nav.find('a[href="#' + id + '"]').parent('li').addClass('active');
    } else {
      nav.find('li').removeClass('active');
    }
  }

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.review-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: false,
    margin: 130
  });
  
  $('.more').click(function(){
    $(this).parents().find('.more-content').slideToggle(500);
  });
  $('.scroll-btn').click(function () {
    var destination = $("#contacts").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });


  $('.mob-btn').click(function() {
        $('.menu').slideToggle();
  });
  if ($(window).width() < 1200) {
      $('.menu li').click(function() {
          $('.menu').hide();
      });

  }

});