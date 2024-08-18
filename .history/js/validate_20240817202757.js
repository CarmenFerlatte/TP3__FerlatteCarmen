/*------validate form------*/

console.log('Hello World');

function validateForm() {
    document.addEventListener('DOMContentLoaded', function () {
        let isValid = true;
        const fields = ['name', 'email', '_subject', 'message'];
        fields.forEach(field => {
            const input = document.forms['form'] [field ];
            if (input.value.trim() === '') {
                isValid = false;
                setError(input, `${field} is required`);
            } else {
                setSuccess(input);
            }
        });

        return isValid;
        
    });    
}


 