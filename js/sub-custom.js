//nav fixd
var jbOffeset = $('.sticky').offset();
$( window ).scroll(function() {
    if ( $( document ).scrollTop() > jbOffeset.top ) {
        $('.sticky').addClass('jbFixed');

    } else {
        $('.sticky').removeClass('jbFixed');
    }
});

//nav
$('.nav > ul > li').mouseenter(function() {
    $('.nav > ul > li > ul').stop().slideDown(200);
    $('.nav-bg').stop().slideDown(200);
})
$('.nav > ul > li').mouseleave(function() {
    $('.nav > ul > li > ul').stop().slideUp(200);
    $('.nav-bg').stop().slideUp(200);
})