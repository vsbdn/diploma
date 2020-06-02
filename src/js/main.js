$(document).ready(function () {
    //initialize swiper when document ready
    var swiperOne = new Swiper ('.places__swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 90,
        navigation: {
            nextEl: '.places__swiper-button-next',
            prevEl: '.places__swiper-button-prev',
        },
    })

    var swiperTwo = new Swiper ('.about__swiper-container', {
        // Optional parameters

        loop: true,
        spaceBetween: 90,
        pagination: {
            el: '.about__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.about__swiper-button-next',
            prevEl: '.about__swiper-button-prev',
        },
    })

});