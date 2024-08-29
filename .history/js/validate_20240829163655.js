/*------validate form------*/

console.log('Salut World');

    function validateForm() {
        let isValid = true;

        const nameInput = document.forms['form']['name'];
        const name = nameInput.value.trim();
        if (name === '') {
            setError(nameInput, "Un nom est requis.");
            isValid = false;
        } else if (name.length > 50) {
            setError(nameInput, "Le nom ne peut pas dépasser 50 caractères.");
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        const prenomInput = document.forms['form']['prenom'];
        const prenom = prenomInput.value.trim();
        if (prenom === '') {
            setError(prenomInput, "Un prénom est requis.");
            isValid = false;
        } else if (prenom.length > 50) {
            setError(nameInput, "Le prénom ne peut pas dépasser 50 caractères.");
            isValid = false;
        } else {
            setSuccess(nameInput);
        }


        const emailInput = document.forms['form']['email'];
        const email = emailInput.value.trim();
        if (email === '') {
            setError(emailInput, "Une adresse courriel est requise.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            setError(emailInput, 'Une adresse courriel valide est requise.');
            isValid = false;
        } else {
            setSuccess(emailInput);
        }

        const subjectInput = document.forms['form']['_subject'];
        const subject = subjectInput.value.trim();
        if (subject === '') {
            setError(subjectInput, "Un sujet est requis.");
            isValid = false;
        } else {
            setSuccess(subjectInput);
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
        console.log("Form is valid: " + isValid);

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function setError(input, message) {
        input.style.border = '2px solid red';
        const errorSpan = document.getElementById(input.name + '-Error');
        if (errorSpan) {
            errorSpan.textContent = message;
        } else {
            console.error("Erreur le span n'a pas été trouvé", input.name); // console.error() permet d'afficher une erreur dans la console
        }
    }

    function setSuccess(input) {
        input.style.border = '3px solid green';
        const errorSpan = document.getElementById(input.name + '-Error');
        if (errorSpan) {
            errorSpan.textContent = '';
        } else {
            console.error("Erreur le span n'a pas été trouvé", input.name);
        }
    }
