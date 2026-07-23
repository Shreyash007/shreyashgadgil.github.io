(function () {
  "use strict";

  Array.prototype.forEach.call(document.querySelectorAll("[data-hero-stage]"), function (hero) {
    var image = hero.querySelector("[data-hero-image]");
    var kicker = hero.querySelector("[data-hero-kicker]");
    var title = hero.querySelector("[data-hero-title]");
    var text = hero.querySelector("[data-hero-text]");
    var previousButton = hero.querySelector("[data-hero-prev]");
    var nextButton = hero.querySelector("[data-hero-next]");
    var dotsContainer = hero.querySelector("[data-hero-dots]");
    var slidesScript = hero.querySelector("[data-hero-slides]");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nextFrame = window.requestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 16);
    };
    var interval = parseInt(hero.getAttribute("data-hero-interval"), 10) || 7200;
    var autoplayTimer;
    var transitionTimer;
    var activeIndex = 0;
    var slides;

    if (!image || !kicker || !title || !text || !previousButton || !nextButton || !dotsContainer || !slidesScript) return;

    try {
      slides = JSON.parse(slidesScript.textContent);
    } catch (error) {
      return;
    }

    if (!slides || !slides.length) return;

    hero.style.setProperty("--hero-interval", interval + "ms");

    var dots = slides.map(function (slide, index) {
      var dot = document.createElement("button");
      dot.className = "home-hero__dot";
      dot.type = "button";
      dot.setAttribute("aria-label", "Show scene " + (index + 1));
      dot.addEventListener("click", function () {
        showSlide(index);
        startAutoplay();
      });
      dotsContainer.appendChild(dot);
      return dot;
    });

    var updateDots = function () {
      dots.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
      });
    };

    var updateSlideContent = function (slide) {
      image.src = slide.src;
      image.alt = slide.alt || "";
      image.style.objectPosition = slide.position || "center center";
      kicker.textContent = slide.kicker || "";
      title.textContent = slide.title || "";
      text.textContent = slide.text || "";
    };

    var restartProgress = function () {
      hero.classList.remove("is-running");
      nextFrame(function () {
        if (!reduceMotion && slides.length > 1 && !document.hidden) {
          hero.classList.add("is-running");
        }
      });
    };

    var showSlide = function (newIndex, immediate) {
      window.clearTimeout(transitionTimer);
      activeIndex = (newIndex + slides.length) % slides.length;

      if (immediate || reduceMotion) {
        updateSlideContent(slides[activeIndex]);
        updateDots();
        restartProgress();
        return;
      }

      hero.classList.add("is-changing");
      transitionTimer = window.setTimeout(function () {
        updateSlideContent(slides[activeIndex]);
        updateDots();
        hero.classList.remove("is-changing");
        restartProgress();
      }, 220);
    };

    var stopAutoplay = function () {
      window.clearInterval(autoplayTimer);
      hero.classList.remove("is-running");
    };

    var startAutoplay = function () {
      stopAutoplay();
      if (!reduceMotion && slides.length > 1 && !document.hidden) {
        hero.classList.add("is-running");
        autoplayTimer = window.setInterval(function () {
          showSlide(activeIndex + 1);
        }, interval);
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

    hero.addEventListener("mouseenter", stopAutoplay);
    hero.addEventListener("mouseleave", startAutoplay);
    hero.addEventListener("focusin", stopAutoplay);
    hero.addEventListener("focusout", startAutoplay);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    showSlide(0, true);
    startAutoplay();
  });

  (function setupHomepageMotion() {
    var hero = document.querySelector(".home-hero--cinematic[data-hero-stage]");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var showcase;
    var motionSections;
    var observer;

    if (!hero) return;

    showcase = hero.querySelector(".home-hero__showcase");

    if (!reduceMotion && finePointer && showcase && window.requestAnimationFrame) {
      var pointerFrame;
      var pointerX = 72;
      var pointerY = 24;

      var renderPointerLight = function () {
        hero.style.setProperty("--hero-pointer-x", pointerX.toFixed(2) + "%");
        hero.style.setProperty("--hero-pointer-y", pointerY.toFixed(2) + "%");
        pointerFrame = null;
      };

      showcase.addEventListener("pointermove", function (event) {
        var bounds = showcase.getBoundingClientRect();

        if (!bounds.width || !bounds.height) return;

        pointerX = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100));
        pointerY = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100));
        hero.classList.add("is-pointer-active");

        if (!pointerFrame) {
          pointerFrame = window.requestAnimationFrame(renderPointerLight);
        }
      }, { passive: true });

      showcase.addEventListener("pointerleave", function () {
        pointerX = 72;
        pointerY = 24;
        hero.classList.remove("is-pointer-active");

        if (!pointerFrame) {
          pointerFrame = window.requestAnimationFrame(renderPointerLight);
        }
      });
    }

    motionSections = Array.prototype.slice.call(document.querySelectorAll(".home-section"));

    if (!motionSections.length) return;

    motionSections.forEach(function (section) {
      var items = Array.prototype.slice.call(
        section.querySelectorAll(".section-kicker, .identity-card, .home-route")
      );

      section.classList.add("home-motion-group");
      items.forEach(function (item, index) {
        item.classList.add("home-motion-item");
        item.style.setProperty("--home-motion-delay", (index * 70) + "ms");
      });
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      motionSections.forEach(function (section) {
        section.classList.add("is-motion-visible");
      });
      return;
    }

    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-motion-visible");
        observer.unobserve(entry.target);
        window.setTimeout(function () {
          entry.target.classList.remove("is-motion-enabled");
        }, 1100);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    motionSections.forEach(function (section) {
      section.classList.add("is-motion-enabled");
      observer.observe(section);
    });
  }());

  Array.prototype.forEach.call(document.querySelectorAll("[data-carousel]"), function (carousel) {
    var viewport = carousel.querySelector(".home-carousel__viewport");
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".home-carousel__slide"));
    var current = carousel.querySelector("[data-carousel-current]");
    var total = carousel.querySelector("[data-carousel-total]");
    var previousButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var interval = parseInt(carousel.getAttribute("data-carousel-interval"), 10) || 5000;
    var autoplayTimer;
    var activeIndex = 0;

    if (!viewport || !slides.length || !current || !total || !previousButton || !nextButton) return;

    if (slides.length > 1) {
      var threeDays = 3 * 24 * 60 * 60 * 1000;
      var rotationBucket = Math.floor(Date.now() / threeDays);
      var startOffset = rotationBucket % slides.length;
      slides = slides.slice(startOffset).concat(slides.slice(0, startOffset));
    }

    slides.forEach(function (slide, index) {
      slide.classList.remove("is-active");
      slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
      viewport.appendChild(slide);
    });
    slides[0].classList.add("is-active");
    current.textContent = "1";
    total.textContent = slides.length;

    var showSlide = function (newIndex) {
      slides[activeIndex].classList.remove("is-active");
      slides[activeIndex].setAttribute("aria-hidden", "true");
      activeIndex = (newIndex + slides.length) % slides.length;
      slides[activeIndex].classList.add("is-active");
      slides[activeIndex].setAttribute("aria-hidden", "false");
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
        }, interval);
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
