
/*------validate form------*/

console.log('Salut le monde');

    function validateForm() {
        let isValid = true;
        // Fonction de validation du nom
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
        // Fonction de validation du prénom
        const prenomInput = document.forms['form']['prenom'];
        const prenom = prenomInput.value.trim();
        if (prenom === '') {
            setError(prenomInput, "Un prénom est requis.");
            isValid = false;
        } else if (prenom.length > 50) {
            setError(prenomInput, "Le prénom ne peut pas dépasser 50 caractères.");
            isValid = false;
        } else {
            setSuccess(prenomInput);
        }

        // Fonction de validation de l'adresse courriel
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

        // Fonction de validation du numéro de téléphone
        const telInput = document.forms['form']['tel'];
        const tel = telInput.value.trim();
        if (tel === '') {
            setError(telInput, "Une numéro de téléphone est requis.");
            isValid = false;
        } else if (!isValidPhoneNumber(tel)) {
            setError(telInput, 'Entrez un numéro valide XXX-XXX-XXXX.');
            isValid = false;
        } else {
            setSuccess(telInput);
        }
        
        // Fonction de validation du sujet
        const subjectInput = document.forms['form']['_subject'];
        const subject = subjectInput.value.trim();
        if (subject === '') {
            setError(subjectInput, "Un sujet est requis.");
            isValid = false;
        } else {
            setSuccess(subjectInput);
        }
        // Fonction de validation du message
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
    
// Fonction de validation des sélecteurs
const planSelect = document.getElementById('plan');
    const entretienSelect = document.getElementById('entretien');

    // Fonction de validation de l'adresse courriel Regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    

    // Fonction de validation du numéro de téléphone Regex
    function isValidPhoneNumber(tel) {
        const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}$/;
        return phoneRegex.test(tel);
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
