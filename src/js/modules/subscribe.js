function subscribe(){
    // изменение состояния чекбокса
    const checkbox = document.querySelector('.checkbox_subscribe');
    const checkboxInput = checkbox.querySelector('input');
    checkbox.addEventListener('click', () => {
        checkboxInput.checked = !checkboxInput.checked;
    }); 

    // обработка данных с формы
    const form = document.querySelector('.subscribe__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateInputValue = e.target[1].value;
        const phoneInputValue = e.target[2].value;
        const timeInputValue = e.target[3].value;
        
        if (phoneInputValue.length === 16
            && dateInputValue.length === 10
            && timeInputValue.length === 5)
        {
            form.reset();
        }
    });
}

export default subscribe;