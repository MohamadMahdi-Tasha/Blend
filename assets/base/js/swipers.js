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
const homeFirstSectionSwiperWithSpace = new Swiper('.dv-home-defualt-swipers-with-space', {spaceBetween: 100, config})