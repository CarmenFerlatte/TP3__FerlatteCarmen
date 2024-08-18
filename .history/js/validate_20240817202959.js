/*------validate form------*/

console.log('Hello World');

function validateForm() {
    document.addEventListener('DOMContentLoaded', function () {
        let isValid = true;
        const fields = ['name', 'email', '_subject', 'message'];
        fields.forEach(field => {
            const input = document.forms['form'][field];
            const errorSpan = document.getElementById(`error-${field}`);
            if (input.value.trim() === '') {
                input.style.border = '1px solid red';
                if (errorSpan) {
                    errorSpan.style.display = 'block';
                }
                isValid = false;
            } else {
                input.style.border = '1px solid green';
                setSuccess(input);
            }
        });

        return isValid;
        
    });    
}


 