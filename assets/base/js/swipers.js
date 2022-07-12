// Configuring Swiper Js On Sliders
const config = {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
}

const categoryPagesSlider = new Swiper('.dv-category-page-slider', {mousewheel: true, config,})
const homeFirstSectionSwiperWithSpace = new Swiper('.dv-home-defualt-swipers-with-space', {spaceBetween: 10, config,})
const homeFirstSectionSwiper = new Swiper('.dv-home-defualt-swipers', config)
const sliderWith4Slides = new Swiper('.dv-slider-4-slide', {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {991: {slidesPerView: 4,}, 767: {slidesPerView: 3,}, 575: {slidesPerView: 2,}, 1: {slidesPerView: 1,},},
    config
})