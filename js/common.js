$(document).ready(function(){
    $('.more-block').slideUp();

    // Main nav
    $('.main-nav a').click(function(){
        $('a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Main slider
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.main-slider_nav',
        prevArrow: '<button class="main-slider_controls main-slider_prev fa fa-chevron-left" aria-hidden="true"></button>',
        nextArrow: '<button class="main-slider_controls main-slider_next fa fa-chevron-right" aria-hidden="true"></button>'
    });
    $('.main-slider_nav').slick({
        slidesToShow: 6,
        padding: 20,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    // More blocks
    $('.more-btn').click(function(){
        $(this).fadeOut(100).siblings('.more-block').slideDown(250);
    });
});