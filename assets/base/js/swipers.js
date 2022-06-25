// Configuring Swiper Js On Sliders
const homeFirstSectionSwiper = new Swiper('.dv-home-defualt-swipers', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})