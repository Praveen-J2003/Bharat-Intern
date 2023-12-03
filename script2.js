function submitForm() {
    // Reset previous error messages
    resetErrorMessages();

    // Validate the form
    if (validateForm()) {
        // Assume registration is successful
        var registrationSuccessful = true;

        if (registrationSuccessful) {
            // Display success message
            document.getElementById('successMessage').style.display = 'block';

            // Redirect to the success page after a delay (e.g., 2 seconds)
            setTimeout(function () {
                window.location.href = 'success.html';
            }, 2000);
        }
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('registrationForm').reset();
}

// Function to reset error messages
function resetErrorMessages() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.innerHTML = '';
        errorMessage.style.display = 'none';
    });
}

// Function to display error message
function displayErrorMessage(message, fieldId) {
    var errorMessage = document.getElementById(fieldId + '-error');
    errorMessage.innerHTML = message;
    errorMessage.style.display = 'block';
}

// Function to check if the email is valid
function isValidEmail(email) {
    // Simple email validation, you can use a more comprehensive method
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate the form
function validateForm() {
    var valid = true;

    // Example validation for name
    var name = document.getElementById('name').value.trim();
    if (name === '') {
        displayErrorMessage('Name is required', 'name');
        valid = false;
    }

    // Example validation for email
    var email = document.getElementById('email').value.trim();
    if (email === '' || !isValidEmail(email)) {
        displayErrorMessage('Enter a valid email address', 'email');
        valid = false;
    }

    // Example validation for password
    var password = document.getElementById('password').value;
    if (password.length < 8) {
        displayErrorMessage('Password must be at least 8 characters long', 'password');
        valid = false;
    }

    // Example validation for terms acceptance
    var termsAccepted = document.getElementById('terms').checked;
    if (!termsAccepted) {
        displayErrorMessage('You must accept the terms and conditions', 'terms');
        valid = false;
    }

    return valid;

    
}
