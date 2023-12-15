// сброс таймаутов на исчезновение уведомления об успехе или ошибке
function clearTimeouts(successTimeout, errorTimeout){
    if (successTimeout) clearTimeout(successTimeout);
    if (errorTimeout) clearTimeout(errorTimeout);
}

// показать уведомления об успехе 
export const showSuccessMessage = (message, successTimeout, errorTimeout) => {
    // сбросить таймауты перед новым сообщением, если есть
    clearTimeouts(successTimeout, errorTimeout);
    // показ сообщения об успехе
    message.classList.remove("message_error");
    message.classList.add("message_success");
    message.innerHTML = 'Данные успешно приняты!';

    // установка таймера, на автоматическое удаление сообщения через 5 сек
    let success = setTimeout(function() {
        message.classList.remove("message_success");
    }, 5000);

    return{
        successTimeout: success,
        errorTimeout,
    }
}

export const showErrorMessage = (message, successTimeout, errorTimeout) => {
    // сбросить таймауты перед новым сообщением, если есть
    clearTimeouts(successTimeout, errorTimeout);
    // показ сообщения об ошибке
    message.classList.remove("message_success");
    message.classList.add("message_error");
    message.innerHTML = 'Проверьте правильность введенных данных';

    // установка таймера, на автоматическое удаление сообщения через 5 сек
    let error = setTimeout(function() {
        message.classList.remove("message_error");
    }, 5000);

    return{
        successTimeout,
        errorTimeout: error,
    }
}