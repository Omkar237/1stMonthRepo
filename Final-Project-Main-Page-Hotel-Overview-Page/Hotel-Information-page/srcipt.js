document.addEventListener("DOMContentLoaded", function() {
    const paymentButton = document.querySelector('.secondoneb');
    const lastNameInput = document.querySelector('input[placeholder="Last name *"]');
    const countryInput = document.querySelector('.newinput');
    const EXPInput = document.getElementById('jsexp');
    paymentButton.addEventListener('click', function(event) {
        event.preventDefault(); 
  
        if (lastNameInput.value.trim() === '') {
            showError(lastNameInput, 'Last name input your last name');
        } else {
            removeError(lastNameInput);
        }

        // Validate country input
        if (countryInput.value.trim() === '') {
            showError(countryInput, 'Region/Country select your country');
        } else {
            removeError(countryInput);
        }

        if(EXPInput.value.trim() === ''){
            showError(EXPInput, 'Exp Date')
        } else{
            removeError(EXPInput);
        }
    });

    function showError(inputElement, errorMessage) {
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = errorMessage;
        
        // Add error class to input parent
        inputElement.parentElement.classList.add('error');

        // Insert error message before input element
        inputElement.parentElement.insertBefore(errorElement, inputElement);
    }

    function removeError(inputElement) {
        // Remove error message element
        const errorElement = inputElement.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
        
        // Remove error class from input parent
        inputElement.parentElement.classList.remove('error');
    }
});
