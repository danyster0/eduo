(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);






































/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
    "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
        }
    });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
    });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
    if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    }
    scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    }
    window.addEventListener('load', aosInit);

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
    selector: '.glightbox'
    });

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Init swiper sliders
     */
    function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
        } else {
        new Swiper(swiperElement, config);
        }
    });
    }

    window.addEventListener("load", initSwiper);

})();












document.querySelector("#counts")





























(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>???

function toggleContent(element) {
    let content = element.nextElementSibling;
    let parent = element.parentElement;
    let isOpen = parent.classList.contains("open");
    
    document.querySelectorAll(".toggle").forEach(toggle => {
        toggle.classList.remove("open");
    });
    
    if (!isOpen) {
        parent.classList.add("open");
    }
}


















// وظيفة التبديل بين الشرائح (التنقل بين الصور والنصوص)
let currentIndex = 0;
const items = document.querySelectorAll('.custom-horizontal-timeline-content');
const dots = document.querySelectorAll('.custom-timeline-dot');

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.custom-timeline-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

document.querySelector('.custom-timeline-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showItem(currentIndex);
    });
});

// عرض العنصر الأول عند التحميل
showItem(currentIndex);






















///////////////////////////Counts Section//////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.cards-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const scrollAmount = 320;

    leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Scroll تلقائي كل 3 ثواني
    setInterval(() => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
});

    














        function toggleCsb() {
            const container = document.getElementById('csbContainer');
            container.classList.toggle('active');
        }


            function toggleCsb() {
        const container = document.getElementById('csbContainer');
        const arrow = document.getElementById('arrowIcon');
        container.classList.toggle('active');

        // عكس اتجاه السهم حسب حالة الشريط
        if (container.classList.contains('active')) {
            arrow.textContent = '→';
        } else {
            arrow.textContent = '←';
        }
    }









function toggleCsb() {
  const container = document.getElementById('csbContainer');
  const arrow = document.getElementById('arrowIcon');

  container.classList.toggle('active');
  arrow.textContent = container.classList.contains('active') ? '→' : '←';
}

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const fullMessage =
    `👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n📧 البريد: ${email}\n💬 الرسالة: ${message}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappNumber = "201028972307"; // ← غيّر الرقم إن أردت

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}
