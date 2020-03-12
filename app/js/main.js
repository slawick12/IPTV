$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="img/arrow-right.png" alt="">',
        speed: 2000,
        cssEase: 'linear',
        //autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.menu-btn').on('click', function () {
        $('.header__menu').toggleClass('active');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header-bar").addClass("fill-in");
        } else

            $(".header-bar").removeClass("fill-in");



    });

    // On before slide change
    $('.header__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(currentSlide)
        $('.animate').addClass('animated bounceInLeft slower');
        $('.animate2').addClass('animated fadeInRight slow');


    });
    // On after slide change
    $('.header__slider').on('afterChange', function (event, currentSlide, nextSlide) {
        $(currentSlide)
        $('.animate').removeClass('animated bounceInLeft slower');
        $('.animate2').removeClass('animated fadeInRight slow');
    });

});