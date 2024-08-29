function validateForm() {
    let isValid = true;

    // Liste des champs requis
    const requiredFields = [
        { id: 'name', errorId: 'name-Error', message: 'Le nom est requis.' },
        { id: 'prenom', errorId: 'prenom-Error', message: 'Le prénom est requis.' },
        { id: 'courriel', errorId: 'email-Error', message: 'Le courriel est requis.' },
        { id: 'tel', errorId: 'phone-Error', message: 'Le téléphone est requis.' },
        { id: '_subject', errorId: '_subject-Error', message: 'Le sujet est requis.' },
        { id: 'message', errorId: 'message-Error', message: 'Le message est requis.' }
    ];

    // Réinitialiser les messages d'erreur
    requiredFields.forEach(field => {
        document.getElementById(field.errorId).innerText = '';
    });

    // Vérifier chaque champ requis
    requiredFields.forEach(field => {
        const input = document.querySelector(`[name="${field.id}"]`);
        if (!input.value.trim()) {
            document.getElementById(field.errorId).innerText = field.message;
            isValid = false;
        }
    });

    return isValid;
}