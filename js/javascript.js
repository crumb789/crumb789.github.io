(function($) {
  $(function() {
    
    $('ul.delic_tabs-caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.delic_tabs').find('div.delic_tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);



  $('.single-item').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3500,
  });