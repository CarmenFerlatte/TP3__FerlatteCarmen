/*------validate form------*/

function validateForm() {
    let isValid = true;
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(field => {
        const input = document