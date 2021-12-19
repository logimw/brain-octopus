new Swiper("#slider1 #coursesSlider", {
    slidesPerView: 4,
    clickable: true,
    navigation: {
        nextEl: '#slider1 .swiper-button-next',
        prevEl: '#slider1 .swiper-button-prev',
    },
});
new Swiper("#slider2 #authorsSlider", {
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider2 .swiper-button-next',
        prevEl: '#slider2 .swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
new Swiper("#slider3 #medicalCoursesSlider", {
    slidesPerView: 4,
    clickable: true,
    navigation: {
        nextEl: '#slider3 .swiper-button-next',
        prevEl: '#slider3 .swiper-button-prev',
    },
});
