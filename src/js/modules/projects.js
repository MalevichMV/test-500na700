import {showNextSlide, showPreviousSlide} from './slider';

function projects(){
    const slides = document.querySelectorAll('.slide_projects');
    const sliderLength = slides.length;
    const activeClass = 'slide_active';
    const nextArrow = document.querySelector('.slider__arrow-next_projects');
    const previousArrow = document.querySelector('.slider__arrow-previous_projects');
    let currentSlide = 0;


    nextArrow.addEventListener('click', () => {
        currentSlide = showNextSlide(currentSlide, sliderLength, activeClass, slides);
    });

    previousArrow.addEventListener('click', () => {
        currentSlide = showPreviousSlide(currentSlide, sliderLength, activeClass, slides);
    });
}

export default projects;