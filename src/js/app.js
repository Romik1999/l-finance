document.addEventListener('DOMContentLoaded', function () {
    const popularSlider = new Swiper('.popular-slider', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.popular-slider__arrow--next',
            prevEl: '.popular-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: "auto"
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });

    const news = new Swiper('.news-slider', {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        spaceBetween: 20,
        breakpoints: {
            300: {
                slidesPerView: 1,
                allowTouchMove: true,
            },
            575: {
                slidesPerView: "auto",
                allowTouchMove: true,
            },
            1200: {
                slidesPerView: 3,
                allowTouchMove: false,
            },
        }
    });

    const otherSlider = new Swiper('.other-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.other-slider__arrow--next',
            prevEl: '.other-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: "auto"
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });

    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }

    });
});