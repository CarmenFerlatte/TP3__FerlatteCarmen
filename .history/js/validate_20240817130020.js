/*------validate form------*/

function validateForm() {
    let isValid = true;
    const fields = ['name', 'email', '_subject', 'message'];
    fields.forEach(field => {
        const input = document.forms['form'][field];
        const errorSpan = document.getElementById(field + '-error');
        if (input.value.trim() === '') {
            input.style.border = '1px solid red';
            if (errorSpan) {
                errorSpan.textContent = 'Ce champ est obligatoire';
            }
            isValid = false;
        } if else {
            input.style.border = '1px solid green';
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        } else {
            console.log('errorSpan not found');
        }
            console.log('errorSpan not found');
        }
    });
    return isValid;
}