document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     MOBILE NAV
  ================================ */
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");
  const navLinks = document.querySelectorAll(".mobile-nav-links a");

  if (menuBtn && mobileNav && closeNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.add("active");
    });

    closeNav.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  }

  /* ===============================
   CONTACT FORM MODAL
================================ */

  const form = document.querySelector(".contact-form");
  const modal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  if (form && modal && closeModal) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      modal.classList.add("active");
      form.reset();
    });

    closeModal.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }
  // ======================= CAROUSEL =======================

  const track = document.querySelector(".carousel-track");
  let slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (track && slides.length > 0) {
    let index = 1;
    let slideWidth = 0;
    let startX = 0;
    let isDragging = false;
    let autoPlay;

    // ===== Clone first & last for infinite loop =====
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    slides = document.querySelectorAll(".slide");

    // ===== Get center offset =====
    function getCenterOffset() {
      const carousel = document.querySelector(".carousel");
      const carouselWidth = carousel.offsetWidth;
      return (carouselWidth - slideWidth) / 2;
    }

    // ===== Set initial position =====
    function setPosition() {
      slideWidth = slides[0].offsetWidth;
      const offset = getCenterOffset();

      track.style.transition = "none";
      track.style.transform = `translateX(${-slideWidth * index + offset}px)`;

      applyActiveSlide();
    }

    window.addEventListener("resize", setPosition);
    setPosition();

    // ===== Active slide =====
    function applyActiveSlide() {
      slides.forEach((s) => s.classList.remove("active-slide"));

      if (!slides[index].classList.contains("clone")) {
        slides[index].classList.add("active-slide");
      }
    }

    // ===== Dots =====
    dotsContainer.innerHTML = "";
    const realSlideCount = slides.length - 2;

    for (let i = 0; i < realSlideCount; i++) {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        moveToSlide(i + 1);
      });
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".carousel-dots span");

    function updateDots() {
      dots.forEach((d) => d.classList.remove("active"));

      let dotIndex = index - 1;

      if (dotIndex < 0) dotIndex = realSlideCount - 1;
      if (dotIndex >= realSlideCount) dotIndex = 0;

      if (dots[dotIndex]) {
        dots[dotIndex].classList.add("active");
      }
    }

    updateDots();

    // ===== Move function =====
    function moveToSlide(i) {
      index = i;

      const offset = getCenterOffset();

      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(${-slideWidth * index + offset}px)`;

      updateDots();
    }

    // ===== Infinite loop fix =====
    track.addEventListener("transitionend", () => {
      // If at cloned last slide
      if (index >= slides.length - 1) {
        track.style.transition = "none";
        index = 1;
        track.style.transform = `translateX(${-slideWidth * index + getCenterOffset()}px)`;
      }

      // If at cloned first slide
      if (index <= 0) {
        track.style.transition = "none";
        index = slides.length - 2;
        track.style.transform = `translateX(${-slideWidth * index + getCenterOffset()}px)`;
      }

      applyActiveSlide();
    });

    // ===== Touch Swipe =====
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoPlay);
    });

    track.addEventListener("touchmove", (e) => {
      if (!isDragging) return;

      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;

      track.style.transition = "none";
      track.style.transform = `translateX(${-slideWidth * index + getCenterOffset() + diff}px)`;
    });

    track.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;

      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      const threshold = 60;

      if (diff < -threshold) {
        moveToSlide(index + 1);
      } else if (diff > threshold) {
        moveToSlide(index - 1);
      } else {
        moveToSlide(index);
      }

      startAutoPlay();
    });

    // ===== Autoplay =====
    function startAutoPlay() {
      clearInterval(autoPlay);
      autoPlay = setInterval(() => {
        moveToSlide(index + 1);
      }, 5000);
    }

    startAutoPlay();
  }

  // Dynamic footer year
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
});
