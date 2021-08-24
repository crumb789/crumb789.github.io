// TABS
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});









$('.carousel').slick({
  infinite: true,
  adaptiveHeight: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
  responsive: [
    {
      breakpoint: 576,
        settings: {
          arrows: false,
      }
    }
  ]
});







