// Default Configs
const config = {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
}

// Configuring Swiper Js On Sliders
const homeFirstSectionSwiper = new Swiper('.dv-home-defualt-swipers', config)
const homeFirstSectionSwiperWithSpace = new Swiper('.dv-home-defualt-swipers-with-space', {spaceBetween: 10, config})
const projectsSwiperSlide = new Swiper('.dv-projects-swiper-slide', {
    spaceBetween: 10,
    slidesPerView:4,
    breakpoints: {
        991: {slidesPerView: 4,},
        575: {slidesPerView: 2,},
        1:{slidesPerView: 1,},
    },
    config
})