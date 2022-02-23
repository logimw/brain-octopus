const cookies = document.querySelector("#cookies");
const cookiesBtn = document.getElementById("agreement_cookies");

if (cookies) {
    cookiesBtn.addEventListener("click", e => {
        console.log(e.target)
        if (cookies.classList.contains("vanish")) return;
        cookies.classList.add("vanish");
    });
}


const swiper = document.querySelector(".swiper");

if (swiper) {
    const ids = ["coursesSlider", "medicalCoursesSlider", "osteopathyCoursesSlider", "educationalCoursesSlider", "sliderAuthorsMoreCourses", "sliderSimilarCourses"];
    ids.forEach(slider => {
        new Swiper(`#${slider} .swiper`, {
            slidesPerView: 1,
            clickable: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideVisibleClass: 'show-slide',
            navigation: {
                nextEl: `#${slider} .swiper-button-next`,
                prevEl: `#${slider} .swiper-button-prev`,
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                },
                899: {
                    slidesPerView: 3,
                },
                1350: {
                    slidesPerView: 4
                }
            }
        });
    });

    new Swiper("#authorsSlider .swiper", {
        slidesPerView: 1,
        clickable: true,
        navigation: {
            nextEl: '#authorsSlider .swiper-button-next',
            prevEl: '#authorsSlider .swiper-button-prev',
        },
        pagination: {
            el: "#authorsSlider .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper("#partnersSlider .swiper", {
        slidesPerView: 2,
        clickable: true,
        pagination: {
            el: "#partnersSlider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            565: {
                slidesPerView: 3,
            },
            799: {
                slidesPerView: 4,
            },
            1399: {
                slidesPerView: 7
            }
        },
        autoplay: {
            delay: 3000,
        },

    });
}


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
const formLogin = document.getElementById("formLogin"),
    formSignUp = document.getElementById("formSignUp");

if (formLogin || formSignUp) {
    const form = document.querySelector("header form");
    const showConfirm = document.querySelector("[data-password-confirm='show']"),
        hideConfirm = document.querySelector("[data-password-confirm='hide']"),
        pwd = document.getElementById("password"),
        pwdConfirm = document.getElementById("passwordConfirm"),
        show = document.querySelector("[data-password='show']"),
        hide = document.querySelector("[data-password='hide']");

    const showPassword = (show, hide, input) => {
        show.classList.add("hide");
        hide.classList.remove("hide");
        input.setAttribute("type", "text");
    }

    const hidePassword = (show, hide, input) => {
        show.classList.remove("hide");
        hide.classList.add("hide");
        input.setAttribute("type", "password");
    }

    form.addEventListener("click", e => {
        let svg = e.target.closest('svg');
        if (!svg) return;
        if (e.target.nodeName === "use") {
            if (e.target.parentElement.getAttribute("data-password") === "show") {
                showPassword(show, hide, pwd);
            }
            if (e.target.parentElement.getAttribute("data-password") === "hide") {
                hidePassword(show, hide, pwd);
            }
            if (e.target.parentElement.getAttribute("data-password-confirm") === "show") {
                showPassword(showConfirm, hideConfirm, pwdConfirm);
            }
            if (e.target.parentElement.getAttribute("data-password-confirm") === "hide") {
                hidePassword(showConfirm, hideConfirm, pwdConfirm);
            }
        }
        if (e.target.nodeName === "svg") {
            if (e.target.getAttribute("data-password") === "show") {
                showPassword(show, hide, pwd);
            }
            if (e.target.getAttribute("data-password") === "hide") {
                hidePassword(show, hide, pwd);
            }
            if (e.target.getAttribute("data-password-confirm") === "show") {
                showPassword(showConfirm, hideConfirm, pwdConfirm);
            }
            if (e.target.getAttribute("data-password-confirm") === "hide") {
                hidePassword(showConfirm, hideConfirm, pwdConfirm);
            }
        }
    })
}


const burger = document.getElementById("burger"),
    navList = document.querySelector(".nav__menu");
burger.addEventListener("click", e => {
    e.target.closest("button").classList.contains("open") ? (burger.classList.remove("open"), navList.classList.remove("mobile-on")) : (burger.classList.add("open"), navList.classList.add("mobile-on"))
}), navList.addEventListener("click", e => {
    "A" === e.target.tagName && (burger.classList.contains("open") ? (burger.classList.remove("open"), navList.classList.remove("mobile-on")) : (burger.classList.add("open"), navList.classList.add("mobile-on")))
});

ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        className: "scrolled",
        targets: ".nav"
    },
});

const boxes = gsap.utils.toArray(".fade");
boxes.forEach((e, t) => {
    const o = gsap.fromTo(e, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
    ScrollTrigger.create({trigger: e, animation: o, toggleActions: "play none none none"})
});
const animateChildrenFrom = e => {
    gsap.from(e.children, {y: "50px", opacity: 0, stagger: .2, scrollTrigger: {trigger: e.children, markers: !1}})
};
const animateSequence = document.querySelector(".fade-sequence");
if (animateSequence) animateChildrenFrom(animateSequence);

const langBtn = document.querySelectorAll(".lang-btn");

if (window.innerWidth < 799) {
    document.addEventListener("click", e => {
        let button = e.target.closest('DIV');
        if (!button?.classList?.contains("lang-btn")) {
            langBtn.forEach(btn => btn.classList.contains("open") && btn.classList.remove("open"))
        } else {
            button.classList.toggle("open");
        }
    });
}

const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
const emailInput = document.getElementById("email");
emailInput && emailInput.addEventListener("input", e => {
    if (e.target.value.length > 0) {
        if (emailRegex.test(e.target.value)) {
            if (emailInput.classList.contains("invalid")) {
                emailInput.classList.remove("invalid");
            }
        } else {
            if (!emailInput.classList.contains("invalid")) {
                emailInput.classList.add("invalid");
            }
        }
    } else {
        if (emailInput.classList.contains("invalid")) {
            emailInput.classList.remove("invalid");
        }
    }
});
