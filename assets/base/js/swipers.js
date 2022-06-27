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

const projectsSwiperSlide = new Swiper('.dv-projects-swiper-slide', {
    spaceBetween: 10,
    slidesPerView:4,
    breakpoints: {
        991: {slidesPerView: 4,},
        575: {slidesPerView: 2,},
        1:{slidesPerView: 1,},
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})