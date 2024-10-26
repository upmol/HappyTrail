//navbar 
const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))

//swiper with choose a tour
document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel-travel");
    const cards = document.querySelectorAll(".card");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
  
    let currentIndex = 0;
    let cardsPerView = 3; // Количество карточек на экране по умолчанию (для десктопа)
  
    // Функция обновления количества карточек на экране в зависимости от ширины экрана
    function updateCardsPerView() {
      if (window.innerWidth < 768) {
        cardsPerView = 1; // Для мобильных устройств
      } else if (window.innerWidth < 1024) {
        cardsPerView = 2; // Для планшетов
      } else {
        cardsPerView = 3; // Для десктопов
      }
    }
  
    // Обновляем количество карточек при загрузке и изменении размера окна
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
  
    // Функция прокрутки вперёд
    function scrollNext() {
      currentIndex += cardsPerView;
  
      // Если индекс выходит за пределы количества карточек, возвращаемся к началу
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
  
      updateCarrousel();
    }
  
    // Функция прокрутки назад
    function scrollPrev() {
      currentIndex -= cardsPerView;
  
      // Если индекс меньше 0, прокручиваем к концу
      if (currentIndex < 0) {
        currentIndex = Math.max(0, cards.length - cardsPerView);
      }
  
      updateCarrousel();
    }
  
    // Функция обновления позиции карусели
    function updateCarrousel() {
      const offset = -(currentIndex * (100 / cardsPerView));
      carrousel.style.transform = `translateX(${offset}%)`;
    }
  
    nextButton.addEventListener("click", scrollNext);
    prevButton.addEventListener("click", scrollPrev);
  });
  

  //Back to top buttom

  const backToTopButton = document.getElementById('BackTotop');

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
    })
  })

