/*------validate form------*/

function validateForm() {
    let isValid = true;
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(field => {
        const input = document.forms['form'][field];
        const errorSpan = document.getElementById(field + '-error');
        if (input.value === '') {
            
            errorSpan.textContent = 'Ce champ est obligatoire';
            isValid = false;
        } else {
            errorSpan.textContent = '';
        }
    });
    return isValid;
}