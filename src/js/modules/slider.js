export const showNextSlide = (currentSlide, sliderLength, activeClass, slides) => {
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
    return currentSlide;
}

export const showPreviousSlide = (currentSlide, sliderLength, activeClass, slides) => {
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
    return currentSlide;
}