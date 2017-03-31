/*!
 * lazyYT (lazy load YouTube videos)
 * v1.0.1 - 2014-12-30
 * (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
 * http://creativecommons.org/licenses/by-sa/4.0/
 * Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
 * 
 * Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
 */

;
(function ($) {
  'use strict';

  function setUp($el, settings) {
    var width = $el.data('width'),
      height = $el.data('height'),
      ratio = ($el.data('ratio')) ? $el.data('ratio') : settings.default_ratio,
      id = $el.data('youtube-id'),
      padding_bottom,
      innerHtml = [],
      $thumb,
      thumb_img,
      loading_text = $el.text() ? $el.text() : settings.loading_text,
      youtube_parameters = $el.data('parameters') || '';

    ratio = ratio.split(":");

    // width and height might override default_ratio value
    if (typeof width === 'number' && typeof height === 'number') {
      $el.width(width);
      padding_bottom = height + 'px';
    } else if (typeof width === 'number') {
      $el.width(width);
      padding_bottom = (width * ratio[1] / ratio[0]) + 'px';
    } else {
      width = $el.width();

      // no width means that container is fluid and will be the size of its parent
      if (width == 0) {
        width = $el.parent().width();
      }

      padding_bottom = (ratio[1] / ratio[0] * 100) + '%';
    }

    //
    // This HTML will be placed inside 'lazyYT' container

    innerHtml.push('<div class="ytp-thumbnail">');

    // Play button from YouTube (exactly as it is in YouTube)
    innerHtml.push('<div class="ytp-large-play-button"');
    if (width <= 640) /*innerHtml.push(' style="transform: scale(0.563888888888889);"');*/
      innerHtml.push('>');
    innerHtml.push('<span class="play">');
    innerHtml.push('</span>');
    innerHtml.push('</div>'); // end of .ytp-large-play-button

    innerHtml.push('</div>'); // end of .ytp-thumbnail

    // Video title (info bar)
    innerHtml.push('<div class="html5-info-bar">');
    innerHtml.push('<div class="html5-title">');
    innerHtml.push('<div class="html5-title-text-wrapper">');
    innerHtml.push('<a id="lazyYT-title-', id, '" class="html5-title-text" target="_blank" tabindex="3100" href="//www.youtube.com/watch?v=', id, '">');
    innerHtml.push(loading_text);
    innerHtml.push('</a>');
    innerHtml.push('</div>'); // .html5-title
    innerHtml.push('</div>'); // .html5-title-text-wrapper
    innerHtml.push('</div>'); // end of Video title .html5-info-bar

    $el.css({
        'padding-bottom': padding_bottom
      })
      .html(innerHtml.join(''));

    if (width > 640) {
      thumb_img = 'maxresdefault.jpg';
    } else if (width > 480) {
      thumb_img = 'sddefault.jpg';
    } else if (width > 320) {
      thumb_img = 'hqdefault.jpg';
    } else if (width > 120) {
      thumb_img = 'mqdefault.jpg';
    } else if (width == 0) { // sometimes it fails on fluid layout
      thumb_img = 'hqdefault.jpg';
    } else {
      thumb_img = 'default.jpg';
    }

    $thumb = $el.find('.ytp-thumbnail').css({
        'background-image': ['url(//img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')
      })
      .addClass('lazyYT-image-loaded')
      .on('click', function (e) {
        e.preventDefault();
        if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {
          $el.html('<iframe src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtube_parameters + '" frameborder="0" allowfullscreen></iframe>')
            .addClass('lazyYT-video-loaded');
        }
      });

    $.getJSON('//gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
      $el.find('#lazyYT-title-' + id).text(data.entry.title.$t);
    });

  }

  $.fn.lazyYT = function (newSettings) {
    var defaultSettings = {
      //        loading_text: 'Loading...',
      default_ratio: '16:9',
      callback: null, // ToDO execute callback if given
      container_class: 'lazyYT-container'
    };
    var settings = $.extend(defaultSettings, newSettings);

    return this.each(function () {
      var $el = $(this).addClass(settings.container_class);
      setUp($el, settings);
    });
  };

}(jQuery));

$(document).ready(function () {
  $('.js-lazyYT').lazyYT();
  $('.js-lazyYT').click(function () {
    $(this).css({
      'opacity': '1'
    })
  });
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    stagePadding: 0,
    loop: true,
    navText: false,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
      }
    }
  });
  $('.modal-btn').click(function () {
    $('#' + $(this).data('modal')).show();
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    });
    $('body').addClass('overl-h');
    $('.overlay').show();
  });
  $('.overlay, .close-m').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide();
    $('.overlay').hide();
    $('.modal').animate({
      opacity: 0,
    });
  });
});
