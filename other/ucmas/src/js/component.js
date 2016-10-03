$(function(){
  $(window).scroll(function() {
    return $('.menu').toggleClass("header_fixed", $(window).scrollTop() > 0);
  });

if ($(window).width() > 1200) {
    
}
  $('.mob-btn').click(function () {
    $('.menu-list').toggle();
    $('.menu').toggleClass('white-bg');
  });
  if ($(window).width() < 1200) {
      $('.menu-item').click(function () {
        $('.menu-list').hide();
        $('.menu').removeClass('white-bg');
    });
  }

$('.advantages-link').click(function(){
  var destination = $(".intelligence").offset().top - 10;
  $("body,html").animate({ scrollTop: destination}, 500 );
});

$('.methods-link').click(function(){
  var destination = $(".methods").offset().top - 10;
  $("body,html").animate({ scrollTop: destination}, 500 );
});
$('.result-link').click(function(){
  var destination = $("#result").offset().top - 80;
  $("body,html").animate({ scrollTop: destination}, 500 );
});


  var select_active = null;

  $('.registr-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(e.currentTarget);

    var data = {
      name: $form.find('input[name="name"]').val(),
      yourname: $form.find('input[name="yourname"]').val(),
      phone: $form.find('input[name="phone"]').val(),
      city: $form.find('select[name="city"]').val(),
      metro: $form.find('input[name="metro"]').val(),
    };
    if (data.metro == '') {
      data.metro = "Нет метро";
    }

    var script = document.createElement('script');
    script.src = 'https://script.google.com/macros/s/AKfycbzKdEC4Lk3uP2NsSxumzUCPLDJMJxivMftnGNOvYKafuuLScVs/exec?name=' +data.name+ '&p2=' +data.yourname+ '&p3=' +data.phone+ '&p4=' +data.city+ '&p5=' +data.metro;
    script.type = 'text/javascript';
    $("body").append(script);

  setTimeout(function() {
    var html = [
      '<div class="success">',
        '<p>Ваша заявка отправлена, в ближайшее время мы с вами свяжемся!</p>',
      '</div>'
    ].join('');

     $('.registr-form')
      .parent()
        .html(html);
      
      setTimeout(function(){
        window.location.href = "contacts.html";
      }, 4000)
  }, 2000);

    select_active = $(this).find('select.city option:selected').val();
    localStorage.setItem("select_active", select_active);
  });

  $('.academy-icon').click(function(){
     select_active = $(this).data('contact');
     localStorage.setItem("select_active", select_active);
  })

  select_active = localStorage.getItem("select_active");
  // console.log(select_active);

  if (select_active == 'lyubertsy' || select_active == 'mytisci' 
    || select_active == 'troitsk' || select_active == 'reutov') {
    $('.region').trigger('click');
  } 

  $('.'+ select_active).trigger('click');


  $('.city').on('change', function(e) {
    var $el = $(e.currentTarget),
        $metro = $el.parents('form').find('.metro');

    $metro.prop('disabled', $el.val() != 'moscow');

  });
});