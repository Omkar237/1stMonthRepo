document.addEventListener("DOMContentLoaded", function() {
    var confirmButton = document.querySelector('.lastbutton');
    confirmButton.addEventListener("click", function() {
        var cardNumber = document.getElementById("card-number").value.trim();
        var cvc = document.getElementById("cvc").value.trim();
        var expDate = document.getElementById("exp-date").value.trim();

        if (cardNumber === "") {
            showError("card-number", "Fill this field");
        } else {
            clearError("card-number");
        }

        if (cvc === "") {
            showError("cvc", "Fill this field");
        } else {
            clearError("cvc");
        }

        if (expDate === "") {
            showError("exp-date", "Fill this field");
        } else {
            clearError("exp-date");
        }
    });

    function showError(fieldId, errorMessage) {
        var errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = 'red'; // Set color to red
        errorSpan.style.fontSize = '14px'; // Set font size

        var field = document.getElementById(fieldId);
        var parentDiv = field.parentElement;
        var existingError = parentDiv.querySelector('.error-message');

        if (!existingError) {
            parentDiv.appendChild(errorSpan);
        } else {
            existingError.textContent = errorMessage;
        }
    }

    function clearError(fieldId) {
        var field = document.getElementById(fieldId);
        var parentDiv = field.parentElement;
        var existingError = parentDiv.querySelector('.error-message');

        if (existingError) {
            parentDiv.removeChild(existingError);
        }
    }
});
