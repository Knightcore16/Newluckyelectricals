(function ($) {
    "use strict";

    
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 /**
   * Preloader
   */
 let preloader = select('#preloader');
 if (preloader) {
   setTimeout(() => {
     preloader.remove();
   }, 6000); 
 
   window.addEventListener('load', () => {
     preloader.remove();
   });
 }

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

 /**
   * Scroll top button
   */
 const scrollTop = document.querySelector('.scroll-top');
 if (scrollTop) {
   const togglescrollTop = function() {
     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
   }
   window.addEventListener('load', togglescrollTop);
   document.addEventListener('scroll', togglescrollTop);
   scrollTop.addEventListener('click', window.scrollTo({
     top: 0,
     behavior: 'smooth'
   }));
 }

      /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

 /**
   * Porfolio isotope and filter
   */
 window.addEventListener('load', () => {
  let mainproductsContainer = select('.main-products-container');
  if (mainproductsContainer) {
    let mainproductsIsotope = new Isotope(mainproductsContainer, {
      itemSelector: '.main-products-item'
    });

    let mainproductsFilters = select('#main-products-flters li', true);

    on('click', '#main-products-flters li', function(e) {
      e.preventDefault();
      mainproductsFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      mainproductsIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      mainproductsIsotope.on('arrangeComplete', function() {
        AOS.refresh()
      });
    }, true);
  }

});

/**
 * Initiate Main Products lightbox 
 */
const mainproductsLightbox = GLightbox({
  selector: '.main-products-lightbox'
});

/**
 * Initiate Main Products details lightbox 
 */
const mainproductsDetailsLightbox = GLightbox({
  selector: '.main-products-details-lightbox',
  width: '90%',
  height: '90vh'
});

/**
 * Main Products details slider
 */
new Swiper('.main-products-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

})(jQuery);

var swiper = new Swiper(".hero-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  
// Brands Slider
var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
      }
  });  

  var swiper = new Swiper(".product-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: "#mobile-products .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); 
      
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var phonenumber = document.getElementById("phonenumber").value;
      var message = document.getElementById("message").value;
      
      var whatsappMessage = "Hi, I am " + fname + " " + lname + ". My Email is " + email + ", Phone Number is " + phonenumber + ". " + message;
      
      var encodedMessage = encodeURIComponent(whatsappMessage);
      
      var whatsappAPIURL = "https://api.whatsapp.com/send/?phone=233205007156" + "&text=" + encodedMessage + "&type=phone_number&app_absent=0";
      window.open(whatsappAPIURL, '_blank');
    });
  });
  