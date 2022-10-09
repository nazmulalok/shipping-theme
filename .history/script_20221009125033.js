$('.owl-carousel').owlCarousel({
    margin: 15,
    loop: true,
    stagePadding: 50,
    nav: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 8500,
    dots: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})