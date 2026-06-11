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
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".home-carousel__slide"));
    var current = carousel.querySelector("[data-carousel-current]");
    var total = carousel.querySelector("[data-carousel-total]");
    var previousButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");
    var activeIndex = 0;

    if (!slides.length || !current || !total || !previousButton || !nextButton) return;
    total.textContent = slides.length;

    var showSlide = function (newIndex) {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (newIndex + slides.length) % slides.length;
      slides[activeIndex].classList.add("is-active");
      current.textContent = activeIndex + 1;
    };

    previousButton.addEventListener("click", function () {
      showSlide(activeIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showSlide(activeIndex + 1);
    });
  });
}());
