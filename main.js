document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('.form-control.email');
    const passwordInput = document.querySelector('.form-control.password');
    const emailAlert = emailInput.nextElementSibling; 
    const passwordAlert = passwordInput.nextElementSibling;

    emailInput.addEventListener('input', function () {
        if (!emailInput.checkValidity()) {
            emailInput.classList.add('invalid');
            emailAlert.classList.add('show');
            emailAlert.textContent = 'Please enter a valid email address.';
        } else {
            emailInput.classList.remove('invalid');
            emailAlert.classList.remove('show');
            emailAlert.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        passwordInput.setCustomValidity('');
        if (!passwordInput.checkValidity()) {
            passwordInput.classList.add('invalid');
            if (passwordInput.validity.patternMismatch) {
                passwordAlert.textContent = 'Password must be at least 6 characters';
            } else if (passwordInput.validity.valueMissing) {
                passwordAlert.textContent = 'Please fill out this field.';
            }
            passwordAlert.classList.add('show');
        } else {
            passwordInput.classList.remove('invalid');
            passwordAlert.classList.remove('show');
            passwordAlert.textContent = '';
        }
    });

    passwordInput.addEventListener('invalid', function () {
        if (passwordInput.validity.patternMismatch) {
            passwordInput.setCustomValidity('Password must be at least 6 characters');
        } else if (passwordInput.validity.valueMissing) {
            passwordInput.setCustomValidity('Please fill out this field.');
        }
    });
});
