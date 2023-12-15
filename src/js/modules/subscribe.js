import {showSuccessMessage, showErrorMessage} from './messagesManipulation';

// переменные для очищения таймаутов в файле messagesManipulation.js
let successTimeout;
let errorTimeout;

function subscribe(){
    // обработка данных с формы
    const form = document.querySelector('.subscribe__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateInputValue = e.target[1].value;
        const phoneInputValue = e.target[2].value;
        const timeInputValue = e.target[3].value;

        const message = document.querySelector('.message_subscribe'); 
        
        if (phoneInputValue.length === 16
            && dateInputValue.length === 10
            && timeInputValue.length === 5)
        {
            form.reset();
            const timeouts = showSuccessMessage(message, successTimeout, errorTimeout);
            successTimeout = timeouts.successTimeout;
            errorTimeout = timeouts.errorTimeout;
        } else {
            const timeouts = showErrorMessage(message, successTimeout, errorTimeout);
            successTimeout = timeouts.successTimeout;
            errorTimeout = timeouts.errorTimeout;
        }
    });
}

export default subscribe;