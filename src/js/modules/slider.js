function slider(){
    const slides = document.querySelectorAll('.slide');
    const sliderLength = slides.length;
    const activeClass = 'slide_active';
    const nextArrow = document.querySelector('.slider__arrow-next');
    const previousArrow = document.querySelector('.slider__arrow-previous');
    let currentSlide = 0;

    function showNextSlide(){
        if ((currentSlide + 1) === sliderLength)
        {
            slides[sliderLength - 1].classList.remove(activeClass);
            slides[0].classList.add(activeClass);
            currentSlide = 0;
        }
        else
        {
            slides[currentSlide].classList.remove(activeClass);
            slides[currentSlide + 1].classList.add(activeClass);
            currentSlide++;
        }
    }

    function showPreviousSlide(){
        if (currentSlide === 0)
        {
            slides[currentSlide].classList.remove(activeClass);
            slides[sliderLength - 1].classList.add(activeClass);
            currentSlide = sliderLength - 1;
        }
        else
        {
            slides[currentSlide].classList.remove(activeClass);
            slides[currentSlide - 1].classList.add(activeClass);
            currentSlide--;
        }
    }

    nextArrow.addEventListener('click', () => {
        showNextSlide();
    });

    previousArrow.addEventListener('click', () => {
        showPreviousSlide();
    });
}

export default slider;