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

//banner
$('.circle2').click(function() {
    $('.circle1').css({
        background: '#404040'
    })
    $('.circle2').css({
        background: '#fff'
    })
    $('.banner-right-wrap ').animate({marginLeft: -530})
    $('.banner-back').fadeIn();
})

$('.circle1').click(function() {
    $('.circle1').css({
        background: '#fff'
    })
    $('.circle2').css({
        background: '#404040'
    })
    $('.banner-right-wrap ').animate({marginLeft: 0})
    $('.banner-back').fadeOut();
})

//아코디언 메뉴
var acc = document.getElementsByClassName("accordion");
        var i;
     
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }