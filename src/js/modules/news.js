import {showNextSlide, showPreviousSlide} from './slider';

function news(){
    const slides = document.querySelectorAll('.slide_news');
    const sliderLength = slides.length;
    const activeClass = 'slide_active';
    const nextArrow = document.querySelector('.slider__arrow-next_news');
    const previousArrow = document.querySelector('.slider__arrow-previous_news');
    let currentSlide = 0;

    // условие проверки размера экрана
    function isMobile() {
        return window.innerWidth <= 576;
    }

    // подключение обработчиков, если экран маленький
    if (isMobile()) {
        previousArrow.addEventListener('click', handleClickPreviousArrow);
        nextArrow.addEventListener('click', handleClickNextArrow);
    }

    // клик на кнопку влево
    function handleClickPreviousArrow() {
        currentSlide = showPreviousSlide(currentSlide, sliderLength, activeClass, slides);
    }

    // клик на кнопку вправо
    function handleClickNextArrow() {
        currentSlide = showNextSlide(currentSlide, sliderLength, activeClass, slides);
    }

    // обработчик на размер экрана, чтобы добвить или удлать обработчики на стрелки управления слайдером
    window.addEventListener('resize', function () {
        if (isMobile()) {
            // добавление обработчиков событий, если разрешение становится меньше 576 px
            previousArrow.addEventListener('click', handleClickPreviousArrow);
            nextArrow.addEventListener('click', handleClickNextArrow);
        } else {
            // удаление обработчиков событий, если разрешение становится больше 576 px
            previousArrow.removeEventListener('click', handleClickPreviousArrow);
            nextArrow.removeEventListener('click', handleClickNextArrow);
        }
    });
}

export default news;