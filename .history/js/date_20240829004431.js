document.addEventListener('DOMContentLoaded', function () { 
    const dateInput = document.getElementById('date-input');

    // Placeholder for date input
    dateInput.placeholder = 'yyyy-mm-dd';

    dateInput.addEventListener('change', function () {
        console.log('Date input changed:', this.value);
    });

    // Date input validation
    dateInput.addEventListener('input', function () {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!datePattern.test(this.value)) {
            this.setCustomValidity('Invalid date format. Use yyyy-mm-dd');
        } else {
            this.setCustomValidity('');
        }
    });

    // Date input autofill

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
}