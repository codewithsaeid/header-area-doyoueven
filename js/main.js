/** mobile nav */
$(document).ready(function () {
  $('.sidenav').sidenav();
});
/** cart nav */
// $(document).ready(function () {
//     $('.cartmenu').sidenav();
// });

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
  height:50,
  indicators: false
});
$('.text-next').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.slider').slider('next');
});
$('.text-prev').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.slider').slider('prev');
});

/**** */


