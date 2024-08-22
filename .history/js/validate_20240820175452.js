console.log('Salut World');

function validateForm() {
    let isValid = true;

    const prenomInput = document.forms['form']['prenom'];
    const prenom = prenomInput.value.trim();
    if (prenom === '') {
        setError(prenomInput, "Un prénom est requis.");
        isValid = false;
    } else if (prenom.length > 30) {
        setError(prenomInput, "Le prénom ne peut pas dépasser 30 caractères.");
        isValid = false;
    } else {
        setSuccess(prenomInput);
    }

    const nomInput = document.forms['form']['nom'];
    const nom = nomInput.value.trim();
    if (nom === '') {
        setError(nomInput, "Un nom est requis.");
        isValid = false;
    } else if (nom.length > 50) {
        setError(nomInput, "Le nom ne peut pas dépasser 50 caractères.");
        isValid = false;
    } else {
        setSuccess(nomInput);
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
    const errorSpan = document.querySelector(`.${input.name}-Error`);
    if (errorSpan) {
        errorSpan.textContent = message;
    } else {
        console.error("Erreur le span n'a pas été trouvé", input.name);
    }
}

function setSuccess(input) {
    input.style.border = '3px solid green';
    const errorSpan = document.querySelector(`.${input.name}-Error`);
    if (errorSpan) {
        errorSpan.textContent = '';
    } else {
        console.error("Erreur le span n'a pas été trouvé", input.name);
    }
}

/*-----------------------------------*/

<form id="form" action="https://api.web3forms.com/submit" method="POST" novalidate onsubmit="return validateForm()">
    <input type="hidden" name="access_key" value="61bff5e7-bee4-41b3-9a68-95d34fd2669c">
    
    <div class="flex space-x-4">
        <input
            class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-pink-500"
            type="text" placeholder="* Prénom" name="prenom" required>
        <span class="prenom-Error text-red-500 font-bold bg-gray-200"></span>
        <input
            class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-pink-500"
            type="text" placeholder="* Nom" name="nom" required>
        <span class="nom-Error text-red-500 font-bold bg-gray-200"></span>
    </div>        

    <input
        class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-pink-500"
        type="email" placeholder="* Courriel" name="email" required>
    <span class="email-Error text-red-500 font-bold bg-gray-200"></span>

    <input
        class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-pink-500"
        type="text" placeholder="* Sujet" name="_subject" required>
    <span class="_subject-Error text-red-500 font-bold bg-gray-200"></span>

    <textarea
        class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea-style focus:ring focus:border-pink-500"
        type="text" placeholder="* Écrivez votre message ..." name="message" required></textarea>
    <span class="message-Error text-red-500 font-bold bg-gray-200"></span>

    <div class="flex justify-between">
        <input
            class="shadow bg-cyan-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit" title="Envoyez" value="Envoyez  ➤">
        <input
            class="shadow bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="reset" title="réinitialiser">
    </div>
</form>