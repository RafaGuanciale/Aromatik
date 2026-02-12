const loginFormInputs = loginForm.querySelectorAll(".login__form-input");
const addCardInputs = addCardForm.querySelectorAll(".form__input");

function formInputVerification (input) {
    input.addEventListener("input", () => {
        if(!input.validity.valid){
            showInputError(input, input.validationMessage);
        } else {
            hideInputError(input);
        }
    })
}

loginFormInputs.forEach((input) =>{
    formInputVerification(input);
});

addCardInputs.forEach((input) =>{
    formInputVerification(input);
});

function showInputError (input){
    // const elementForm = input.closest("form");
    // const elementError = elementForm.querySelector(`.${input.id}-input-error`);
    input.classList.add("form__input_type__error");
    input.classList.remove("form__input_type__valid");
    // elementError.classList.add("form__input-error_active");
}

function hideInputError (input){
    // const elementForm = input.closest("form");
    // const elementError = elementForm.querySelector(`.${input.id}-input-error`);
    input.classList.remove("form__input_type__error");
    input.classList.add("form__input_type__valid");
    if(input.value ==="") {
        input.classList.remove("form__input_type__valid");
    }
    // elementError.classList.remove("form__input-error_active");
}
