const input = document.querySelector('.form-control.email')
const password =  document.querySelector('.form-control.password')
const myAlert = document.querySelector('.validation-alert')

input.addEventListener('input', function () {
    if(!input.checkValidity()) {
        input.classList.add('invalid')
        myAlert.classList.add('show')
    } else {
        input.classList.remove('invalid')
        myAlert.classList.remove('show')
    }
})

password.addEventListener('input', function () {
    if (!password.checkValidity()) {
        password.classList.add('invalid');
    } else {
        password.classList.remove('invalid');
    }
});

password.addEventListener('invalid', function () {
    if (password.validity.patternMismatch) {
        password.setCustomValidity('Password must be at least 6 characters');
    } else if (password.validity.valueMissing) {
        password.setCustomValidity('Please fill out this field.');
    }
});