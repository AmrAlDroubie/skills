// FAQ section
const faq_down_btn = document.querySelectorAll(".faq-btn-down");
// const faq_item_title = document.querySelectorAll(".faq-box-title");

faq_down_btn.forEach((ele) => {
    ele.onclick = function() {
        this.parentElement.classList.toggle("active");
    };
});

const swiper = new Swiper(".our-team-swiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 4,
        },
    },
});

// Testimonials
const testi_swiper = new Swiper(".testi-slider", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".testi-button-next",
        prevEl: ".testi-button-prev",
    },
});

const top_btn = document.querySelector(".top_btn");

top_btn.onclick = function() {
    window.scrollTo(0, 0);
};