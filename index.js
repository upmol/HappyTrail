document.addEventListener("DOMContentLoaded", function () {
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

//Effect appearance
const observerOptions = {
  threshold: 0.1 // 10% элемента должно быть видно, чтобы сработало
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Появление при входе в видимую область
      } else {
          entry.target.classList.remove('show'); // Скрытие при выходе из видимой области
      }
  });
}, observerOptions);

// Подключаем Observer ко всем элементам с классом 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

//Swipe на мобилке 
const carousel = document.getElementById("choose-travel");
let startX = 0;
let currentX = 0;
let isSwiping = false;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  currentX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
  if (!isSwiping) return;
  const diff = startX - currentX;

  if (diff > 50) {
    // Свайп влево (вперед)
    moveToNextSlide();
  } else if (diff < -50) {
    // Свайп вправо (назад)
    moveToPrevSlide();
  }

  isSwiping = false;
});

// Функции для перехода на следующий и предыдущий слайд
const moveToNextSlide = () => {
  const currentTransform = getComputedStyle(carousel).transform;
  const offset = parseInt(currentTransform.split(',')[4]) || 0;
  carousel.style.transform = `translateX(${offset - 100}%)`; // Перемещаем карусель на 100%
};

const moveToPrevSlide = () => {
  const currentTransform = getComputedStyle(carousel).transform;
  const offset = parseInt(currentTransform.split(',')[4]) || 0;
  carousel.style.transform = `translateX(${offset + 100}%)`; // Перемещаем карусель назад на 100%
};
