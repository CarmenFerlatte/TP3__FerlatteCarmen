/*------validate form------*/

console.log('Hello World');

function validateForm() {
    document.addEventListener('DOMContentLoaded', function () {
        let isValid = true;
        const fields = ['name', 'email', '_subject', 'message'];
        fields.forEach(field => {
            const input = document.forms['form'][field];
            const errorSpan = document.getElementById(field + '-Error');
            if (input.value.trim() === '') {
                input.style.border = '1px solid red';
                if (errorSpan) {
                errorSpan.textContent = 'Ce champ est obligatoire';
            }
            isValid = false;
        } else {
            input.style.border = '1px solid green';
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        }
    });

    const emailInput = document.forms['form']['email'];
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        setError(emailInput, 'Une adresse courriel valide est requise');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    const messageInput = document.forms['form']['message'];
    const message = messageInput.value.trim();
    if (message === '') {
        setError(messageInput, "Un message est requis.");
        isValid = false;
    } else if (message.length < 20) {
        setError(messageInput, "Le message doit avoir un minimum de 20 caractères.");
        isValid = false;
    } else {
        setSuccess(messageInput);
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function setError(input, message) {
    input.style.border = '1px solid red';
    const errorSpan = document.getElementById(input.name + '-Error');
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

function setSuccess(input) {
    input.style.border = '1px solid green';
    const errorSpan = document.getElementById(input.name + '-Error');
    if (errorSpan) {
        errorSpan.textContent = '';
    }
}			
        
    });    
}


 