document.addEventListener("DOMContentLoaded", function () {
  console.log('Скрипт загружен');
  // navbar
  const hamburger = document.querySelector(".hamburger");
  const nav_menu = document.querySelector(".nav-menu");

  if (hamburger && nav_menu) { // Проверка, что элементы существуют
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav_menu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav_menu.classList.remove("active");
    }));
  }

  // // swiper with choose a tour
  const carrousel = document.querySelector(".carrousel-travel");
  const cards = document.querySelectorAll(".card");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");

  let currentIndex = 0;
  let cardsPerView = 3;

  function updateCardsPerView() {
    if (window.innerWidth < 768) {
      cardsPerView = 1;
    } else if (window.innerWidth < 1024) {
      cardsPerView = 2;
    } else {
      cardsPerView = 3;
    }
  }

  updateCardsPerView();
  window.addEventListener("resize", updateCardsPerView);

  function scrollNext() {
    currentIndex += cardsPerView;
    if (currentIndex >= cards.length) {
      currentIndex = 0;
    }
    updateCarrousel();
  }

  function scrollPrev() {
    currentIndex -= cardsPerView;
    if (currentIndex < 0) {
      currentIndex = Math.max(0, cards.length - cardsPerView);
    }
    updateCarrousel();
  }

  function updateCarrousel() {
    const offset = -(currentIndex * (100 / cardsPerView));
    if (carrousel) {
      carrousel.style.transform = `translateX(${offset}%)`;
    }
  }

  if (nextButton && prevButton) { // Проверка, что кнопки существуют
    nextButton.addEventListener("click", scrollNext);
    prevButton.addEventListener("click", scrollPrev);
  }

  // // Back to top button
  const backToTopButton = document.getElementById('BackTotop');

  if (backToTopButton) { // Проверка, что кнопка существует
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});