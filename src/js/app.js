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



    const readSlider = new Swiper('.read-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.read-slider__arrow--next',
            prevEl: '.read-slider__arrow--prev',
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


    let links = document.querySelectorAll('[data-scroll]');
    links.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            let $link = event.currentTarget;
            let $index = item.getAttribute('data-scroll-index');
            let $el = $link.getAttribute('data-scroll').indexOf($index);
            console.log("$link", $link);
            console.log("$index", $index);
            console.log("$el", $el);
        })
    });

    // menu

    let menuBtn = document.querySelector('[data-menu]');
    let headerMenu = document.querySelector('.header-search');
    let header = document.querySelector('header');
    let input = document.querySelector('.search-form__input');

    menuBtn.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        header.classList.toggle('active');
        input.focus();
    });

    headerMenu.addEventListener(
        "mouseleave",
        (event) => {
            headerMenu.classList.remove('active');
            header.classList.remove('active');
        },
        false
    );


    $('body').on('click', '[data-scroll]', (e) => {
        e.preventDefault();
        const $link = $(e.currentTarget);
        let index = $link.data('scrollIndex');
        if (index === undefined) {
            index = 0;
        }
        const $el = $($link.data('scroll')).eq(index);
        $('html, body').animate(
            {
                scrollTop: $el.offset().top - ($(window).height() * 8) / 100,
            },600
        );
    });
});