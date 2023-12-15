function checkboxes(){
    // изменение состояния чекбоксов
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((elem, i) => {
        const checkboxLabel = elem.querySelector('label');
        checkboxLabel.addEventListener('click', () => {
            const checkboxInput = checkboxes[i].querySelector('input');
            checkboxInput.checked = !checkboxInput.checked;
        });
    });
}

export default checkboxes;