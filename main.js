var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


//Swiper
var Swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoint: {
        0: {
            SlidesPerView: 2,
        },
        568: {
            SlidesPerView: 3,
        },
        768: {
            SlidesPerView: 4,
        },
        968: {
            SlidesPerView: 5,
        },
    },
});