$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="img/arrow-right.png" alt="">',
        speed: 900,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.menu-btn').on('click', function () {
        $('.header__menu').toggleClass('active');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".header-bar").addClass("fill-in");
            $(".header-bar").removeClass("fill-out");
        } else {
            if ($(".header-bar").hasClass("fill-in")) {
                $(".header-bar").addClass("fill-out");
                $(".header-bar").removeClass("fill-in");
            }

        }
    });
});