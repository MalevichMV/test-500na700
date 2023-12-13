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

    // изменение состояния чекбокса
    const checkbox = document.querySelector('.checkbox_contact-us');
    const checkboxInput = checkbox.querySelector('input');
    checkbox.addEventListener('click', () => {
        checkboxInput.checked = !checkboxInput.checked;
    }); 

    // настройка маски для инпута
    const phoneInput = document.querySelector('.input_phone')
    const phoneMask = new IMask(phoneInput, {
        mask: "+{7}(000)000-00-00",
    });    

    // обработка данных с формы
    const form = document.querySelector('.contact-us');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (phoneMask.masked.isComplete)
        {
            form.reset();
            closeModal();
        }
    }); 
}

export default modal;