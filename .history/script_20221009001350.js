$(window).on("load", function () {
    $(".testimonial").owlCarousel({
        margin: 15,
        loop: true,
        nav: false,
        items: 3,
        autoplay: true,
        autoplayTimeout: 8500,
        dots: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });