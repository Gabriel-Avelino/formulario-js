const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');
let formControl;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (nameValue === '') {
        errorValidation(userName, 'Preencha esse campo');
        shake();
    } else {
        successValidation(userName);
    };

    if (emailValue === '') {
        errorValidation(email, 'Preencha esse campo');
        shake();
    } else {
        successValidation(email);
    };

    if (passwordValue === '') {
        errorValidation(password, 'Preencha esse campo');
        shake();
    } else if (password.length < 8) {
        errorValidation(password, 'A senha deve ter 8 ou mais caracteres');
        shake();
    }else {
        successValidation(password);
    }

    if (passwordCheckValue === '') {
        errorValidation(passwordCheck, 'Preencha esse campo');
        shake();
    } else if (passwordCheck !== password) {
        errorValidation(passwordCheck, 'As senhas são diferentes');
        shake();
    }
    else {
        successValidation(passwordCheck);
    }
}


function errorValidation(input, message) {
    formControl = input.parentElement;
    formControl.classList.add('error');
    formControl.classList.remove('success');

    const messageError = formControl.querySelector('small');
    messageError.innerHTML = message;
}

function successValidation(input) {
    formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');

}

function shake (){
    if (formControl.classList.contains('shake')) {
        formControl.classList.remove('shake');
        formControl.classList.add('shake');
        
    } else {
        formControl.classList.remove('shake');
        formControl.classList.add('shake');
    }
}