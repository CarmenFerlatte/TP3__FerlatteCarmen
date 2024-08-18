/*------validate form------*/

console.log('Hello World');

function validateForm() {
    setTimeout(() => {
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

            if (!isValidEmail(email)) {
            setError(emailInput, 'Une adresse courriel valide est requise');
            noError = false;
            } else {
                setSuccess(emailInput);
            }

            if (username === '') {
                setError(usernameInput, "Un nom d'utilisateur est requis.");
                noError = false;
            } else if (username.length > 20) {
        setError(usernameInput, "Le nom d'utilisateur ne peut pas dépasser 20 caractères.");
        noError = false;
    } else {
        setSuccess(usernameInput);
    }
            
        });
        return isValid;
    }, 100); // Délai de 100ms pour s'assurer que le DOM est chargé.
}



/*--------------------------------*/**
 * 
 */