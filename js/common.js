$(document).ready(function(){
    $('.more-block').slideUp();

    // Main nav
    $('.main-nav a, .my-pagination a').click(function(){
        $('a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Sliders
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
    $('.blog-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: '<button class="main-slider_controls main-slider_prev fa fa-chevron-left" aria-hidden="true"></button>',
        nextArrow: '<button class="main-slider_controls main-slider_next fa fa-chevron-right" aria-hidden="true"></button>'
    });

    // More blocks
    $('.more-btn').click(function(){
        $(this).fadeOut(100).siblings('.more-block').slideDown(250);
    });

    // Portfolio filter
    $('#filter').on('click', 'button', function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
        var buttonAttr = $(this).attr('data-filter');
        $('.section-block').each(function(){
            var blockAttr = $(this).attr('data-filter');
            if( blockAttr !== buttonAttr && buttonAttr !== 'all' ) {
                $(this).addClass('block-hidden');
            } else if( previewAttr === buttonAttr) {
                $(this).removeClass('block-hidden');
            } else {
                $('.section-block').removeClass('block-hidden');
            }
        });
    });
});