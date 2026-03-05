export default class FormValidator {
    constructor(validatorConfig, formElement){
        this._validatorConfig = validatorConfig;
        this._formElement = formElement;
        this._inputs = this._formElement.querySelectorAll(this._validatorConfig.formInputsSelector);
        this._button = this._formElement.querySelector(this._validatorConfig.formButtonSelector);
    }
    setEventListeners() {
        this._inputs.forEach((input) => {
            this._formVerification(input);
        })
    }
    _formVerification(input) {
        input.addEventListener("input", () => {
            if(!input.validity.valid){
                this._showInputError(input);
            } else {
                this._hideInputError(input);
            }
            this._toggleButton();
        });
    }
    _showInputError(input) {
        input.classList.remove(this._validatorConfig.inputValidClass);
        input.classList.add(this._validatorConfig.inputErrorClass);
        if(input.value === "") {
            input.classList.remove(this._validatorConfig.inputErrorClass);
        }
        // const elementError = this._formElement.querySelector(`.${input.id}-input-error`);
        // elementError.classList.add(this._validatorConfig.errorActiveClass);
    }
    _hideInputError(input) {
        input.classList.remove(this._validatorConfig.inputErrorClass);
        input.classList.add(this._validatorConfig.inputValidClass);
        if(input.value === "") {
            input.classList.remove(this._validatorConfig.inputValidClass);
        }
    }
    _toggleButton() {
        if(this._hasInvalidInput(this._inputs)) {
            this._button.disabled = true;
        } else {
            this._button.disabled = false;
        }
    }
    _hasInvalidInput(inputs) {
        return Array.from(inputs).some((input) => !input.validity.valid);
    }
    resetValidation() {
        this._inputs.forEach((input) => {
            input.classList.remove(this._validatorConfig.inputErrorClass);
            input.classList.remove(this._validatorConfig.inputValidClass);
        });
        this._toggleButton();
    }
}