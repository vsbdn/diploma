$(document).ready(function () {

    $('.slider').slick({
        infinite: true,
        asNavFor: '.contacts__current',
    });

    $('.places__slider').slick({
        infinite: true,
        slidesToShow: 2,
    });
    $('.about__slider').slick({
        asNavFor: '.about__current'
    });
    $('.about__current').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.about__slider',
        fade: true
    });
    $('.contacts__current').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.slider',
        fade: true
    });



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