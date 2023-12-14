function faq(){
    const accordionHeader = document.querySelectorAll('.accordion__header');
    const accordionBody = document.querySelectorAll('.accordion__body');
    const accordion = document.querySelectorAll('.accordion');

    function openAccordion(index) {
        if (accordion[index].classList.contains("accordion_active"))
        {
            accordion[index].classList.remove("accordion_active");
            accordionBody[index].style.maxHeight = 0;
            return;
        };
        closeAllAccordions();
        accordion[index].classList.add("accordion_active");
        accordionBody[index].style.maxHeight = accordionBody[index].scrollHeight + "px";
    }

    function closeAllAccordions() {
        accordion.forEach((elem, i) => {
            accordion[i].classList.remove("accordion_active");
            accordionBody[i].style.maxHeight = 0;
        });
    }

    accordionHeader.forEach((elem, i) => {
        elem.addEventListener('click', () => openAccordion(i));
    });
}

export default faq;