// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.navigation').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
    } else {
        $('.navigation').addClass('open-nav');
    }
});

$('.navigation li a').click(function() {
    if ($('.navigation').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.navigation').removeClass('open-nav');
    }
});
