/** mobile nav */
$(document).ready(function () {
    $('.sidenav').sidenav();
});
/**slider */

$(document).ready(function(){
  $('.carousel').carousel();
});

/** hiding topbar */

$(window).scroll(function() {
if ($(this).scrollTop()>0)
{
$('.top-navbar').hide(100);
}
else
{
$('.top-navbar').show(200);
}
});

/** */

