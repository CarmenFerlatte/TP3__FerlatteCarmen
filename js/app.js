    document.addEventListener('DOMContentLoaded', function() {
        var dateInput = document.getElementById('date-input');
        
        // Set placeholder text
        dateInput.placeholder = 'yyyy-mm-dd';
        
        // Add event listeners to handle focus and blur events
        dateInput.addEventListener('focus', function() {
            dateInput.placeholder = '';
        });
        
        dateInput.addEventListener('blur', function() {
            if (!dateInput.value) {
                dateInput.placeholder = 'yyyy-mm-dd';
            }
        });
    });