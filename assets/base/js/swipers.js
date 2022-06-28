// Configuring Swiper Js On Sliders
const homeFirstSectionSwiper = new Swiper('.dv-home-defualt-swipers', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})

const homeFirstSectionSwiperWithSpace = new Swiper('.dv-home-defualt-swipers-with-space', {
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})

const sliderWith4Slides = new Swiper('.dv-slider-4-slide', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})