jQuery(document).ready(function($) {
    var owl = $('.owl-carousel-recent-products');
    owl.owlCarousel({
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
        loop:true,
        margin:20,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    var owl2 = $('.testimonial-carousel');
    owl2.owlCarousel({
        rtl:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dotsContainer: '#carousel-custom-dots',
        dots:true,
        loop:true,
        responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1170: {
            items: 1
        }
        }
    });

});

function redirectToPage(link) {
    window.location.href = link;
}

function scrollToSection(section) {
    $('html, body').animate({
        scrollTop: $(section).offset().top - 100
    });
}