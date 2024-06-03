const input = document.querySelector('.form-control.email')
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