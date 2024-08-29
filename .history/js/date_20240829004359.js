document.addEventListener('DOMContentLoaded', function () { 
    const dateInput = document.getElementById('date-input');

    // Placeholder for date input
    dateInput.placeholder = 'yyyy-mm-dd';

    dateInput.addEventListener('change', function () {
        console.log('Date input changed:', this.value);
    });
}