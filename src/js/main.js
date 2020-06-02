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

    $('.select-trigger').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.select-list li').on('click', function () {
        const day = $(this).data('day');
        const discount = $(this).data('discount');
        const parent = $(this).parents('.select');
        parent.find('.select-trigger .select-trigger-days').html(`${day} Дней`);
        parent.find('.select-trigger .select-trigger-discount').html(`-${discount}%`);
        $(this).parents('.select').removeClass('active');
    });

});