/** mobile nav */
$(document).ready(function () {
  $('.sidenav').sidenav();
});
/** cart nav */
$(document).ready(function () {
  $('#sidenav-2').sidenav({
    edge: 'right'
  });
});

/** hiding topbar */

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.top-navbar').hide(100);
  } else {
    $('.top-navbar').show(200);
  }
});
/**slider */

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  interval: 200
});
$('.next').click(function () {
  $('.carousel.carousel-slider').carousel('next');
});
$('.prev').click(function () {
  $('.carousel.carousel-slider').carousel('prev');
});
/** text-text slider controler */
$('.slider').slider({
  full_width: true,
  interval: 2000,
  height: 50,
  indicators: false
});
$('.text-next').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.slider').slider('next');
});
$('.text-prev').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.slider').slider('prev');
});

/**** */
// Readmore option
$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

$('.read-more-show').on('click', function (e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function (e) {
  var p = $(this).parent('.read-more-content');
  p.addClass('hide');
  p.prev('.read-more-show').removeClass('hide');
  e.preventDefault();
});

/****cart favorite start*/

$(function () {
  $('.cart-favourite-first').click(function () {
    $('.cart-favourite-last').show();
    $('.cart-favourite-first').hide();
  });

  $('.cart-favourite-last').click(function () {
    $('.cart-favourite-last').hide();
    $('.cart-favourite-first').show();
  });
});


/****cart favorite end*/
// quick card option start

$(function () {
  $('.product-title').click(function () {
    $('.quick-cart-option').show();
  });

  $('.quick-option-close').click(function () {
    $('.quick-cart-option').hide();
  });
});
// quick card option end

// Megamenu-all start
$(".megamenu-all-trigger").dropdown({
  hover: true,
  constrainWidth: false
});
// Megamenu-all end
// Megamenu-man start
$('.megamenu-man-trigger').dropdown({
  hover: true,
  constrainWidth: false,

});
// Megamenu-man end
// Megamenu-women start
$('.megamenu-women-trigger').dropdown({
  hover: true,
  constrainWidth: false
});
// Megamenu-women end
// Megamenu-accessories start
$('.megamenu-accessories-trigger').dropdown({
  hover: true,
  constrainWidth: false
});
// Megamenu-accessories end
// Mmobile menu dropdown start
$('.mobile-menu-trigger').dropdown({
  // constrainWidth: false
});
// Megamenu-accessories end