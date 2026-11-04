document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    speed: 650, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
});







