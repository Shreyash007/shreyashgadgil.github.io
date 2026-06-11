(function () {
  "use strict";

  var roleElement = document.querySelector("[data-roles]");
  if (roleElement) {
    var roles = roleElement.getAttribute("data-roles").split(",");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var roleIndex = 0;

    if (!reduceMotion && roles.length > 1) {
      window.setInterval(function () {
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.classList.remove("is-changing");
        void roleElement.offsetWidth;
        roleElement.textContent = roles[roleIndex];
        roleElement.classList.add("is-changing");
      }, 2400);
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-carousel]"), function (carousel) {
    var viewport = carousel.querySelector(".home-carousel__viewport");
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".home-carousel__slide"));
    var current = carousel.querySelector("[data-carousel-current]");
    var total = carousel.querySelector("[data-carousel-total]");
    var previousButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var autoplayTimer;
    var activeIndex = 0;

    if (!viewport || !slides.length || !current || !total || !previousButton || !nextButton) return;

    for (var index = slides.length - 1; index > 0; index -= 1) {
      var randomIndex = Math.floor(Math.random() * (index + 1));
      var temporarySlide = slides[index];
      slides[index] = slides[randomIndex];
      slides[randomIndex] = temporarySlide;
    }

    slides.forEach(function (slide) {
      slide.classList.remove("is-active");
      viewport.appendChild(slide);
    });
    slides[0].classList.add("is-active");
    total.textContent = slides.length;

    var showSlide = function (newIndex) {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (newIndex + slides.length) % slides.length;
      slides[activeIndex].classList.add("is-active");
      current.textContent = activeIndex + 1;
    };

    var stopAutoplay = function () {
      window.clearInterval(autoplayTimer);
    };

    var startAutoplay = function () {
      stopAutoplay();
      if (!reduceMotion && slides.length > 1 && !document.hidden) {
        autoplayTimer = window.setInterval(function () {
          showSlide(activeIndex + 1);
        }, 5000);
      }
    };

    previousButton.addEventListener("click", function () {
      showSlide(activeIndex - 1);
      startAutoplay();
    });

    nextButton.addEventListener("click", function () {
      showSlide(activeIndex + 1);
      startAutoplay();
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    startAutoplay();
  });
}());
