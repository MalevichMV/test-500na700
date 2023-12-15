import IMask from 'imask';

function modal(){
    // закрытие модального окна
    function closeModal() {
        document.body.style.overflow = 'auto';
        modal.classList.remove("modal_open");
    }

    // открытие модального окна
    const openBtn = document.querySelector('.button_open-modal');
    const modal = document.querySelector('.modal');
    openBtn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        modal.classList.add("modal_open");
        
    });     

    // закрытие модального окна при клике на крест
    const closeBtn = document.querySelector('.burger_contact-us');
    closeBtn.addEventListener('click', () => {
        closeModal();
    }); 


    // закрытие модального окна при клике на "escape"
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal_open')) { 
            closeModal();
        }
    });

    // закрытие модального окна при клике вне его
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });      

    // обработка данных с формы
    const form = document.querySelector('.contact-us');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneInputValue = e.target[1].value;
        if (phoneInputValue.length === 16)
        {
            form.reset();
            alert("Данные приняты!");
        } else {
            alert("Проверьте правильность введенных данных")
        }
    }); 
}

export default modal;