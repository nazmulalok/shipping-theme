$('.owl-carousel').owlCarousel({
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
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})