new Swiper("#slider1 #coursesSlider", {
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider1 .swiper-button-next',
        prevEl: '#slider1 .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 4
        }
    }
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
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider3 .swiper-button-next',
        prevEl: '#slider3 .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 4
        }
    }
});

new Swiper("#slider1 #medicalCoursesSlider", {
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider1 .swiper-button-next',
        prevEl: '#slider1 .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 4
        }
    }
});
new Swiper("#slider2 #osteopathyCoursesSlider", {
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider2 .swiper-button-next',
        prevEl: '#slider2 .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 4
        }
    }
});
new Swiper("#slider3 #educationalCoursesSlider", {
    slidesPerView: 1,
    clickable: true,
    navigation: {
        nextEl: '#slider3 .swiper-button-next',
        prevEl: '#slider3 .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 4
        }
    }
});


const items = document.querySelectorAll(".num");
if (items.length > 0) {
    gsap.from(items, {
        scrollTrigger: {
            trigger: items[0],
            start: "top bottom"
        },
        textContent: 0,
        duration: 3,
        ease: "power1.out",
        snap: {
            textContent: 1
        }
    });
}
