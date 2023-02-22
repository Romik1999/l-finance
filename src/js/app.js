document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        navigation: {
            nextEl: '.popular-slider__arrow--next',
            prevEl: '.popular-slider__arrow--prev',
        }
    });

    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')){
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow="visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow="hidden";
        }

    });
});