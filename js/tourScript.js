const tours = {
    tour1: {
        title: "Фото тур на колёсах по Северному Кавказу и Краснодарскому краю!",
        description: "Уникальное путешествие, где каждая остановка — это возможность запечатлеть красоту природы и архитектуры!",
        image: "photo/sara-riano-fEQ0hh4gBXw-unsplash.jpg"
    },
    tour2: {
        title: "Путешествие с комфортом на выездной матч!",
        description: "Приглашаем вас присоединиться к незабываемой поездке на матч любимой футбольной команды Краснодар! Наслаждайтесь комфортом в нашем минивэне, который вмещает до шести человек.",
        image: "photo/football.jpg"
    },
    tour3: {
        title: "Путешествие на колёсах: выбери своё направление мечты!",
        description: "Независимо от того, куда ты хочешь отправиться, у нас есть уникальные маршруты по самым красивым уголкам России!",
        image: "photo/travelByCar.jpg"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');

    if (tourId && tours[tourId]) {
        document.getElementById('txt-title-travel').innerText = tours[tourId].title;
        document.getElementById('img-discription').src = tours[tourId].image;
        document.getElementById('txt-discription-travel').innerText = tours[tourId].description;
    }
});


//Effect appearance

function isElementsInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
        if(isElementsInViewport(image)) {
            image.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);