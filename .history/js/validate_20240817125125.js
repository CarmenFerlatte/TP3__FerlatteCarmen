/*------validate form------*/

function validateForm() {
    let isValid = true;
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(field => {
        const input = document.forms['form'][field];
        const errorSpan = document.getElementById(field + '-error');
        if (input.value === '') {
            input.style.border = '1px solid red';
            errorSpan.textContent = 'Ce champ est obligatoire';
            isValid = false;
        } else {
            input.style.borderColor = '1px solid green'
            errorSpan.textContent = '';
        }
    });
    return isValid;
}