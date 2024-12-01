class PasswordInputs {
    _selectors = {
        passwordField: '[data-js-password-field]',
        passwordTypeToggler: '[data-js-password-toggler]',
    }

    _inputTypes = {
        text: 'text',
        password: 'password',
    };

    constructor() {
        this._bindEvents();
    }

    _toggleInputType(inputElement, togglerButtonElement) {
        const isCurrentTypePassword = inputElement.getAttribute('type') == this._inputTypes.password

        inputElement.setAttribute(
            'type',
            isCurrentTypePassword ? this._inputTypes.text : this._inputTypes.password
        );

        togglerButtonElement.classList.toggle(
            'password-shown',
            isCurrentTypePassword
        );
    }
    
    _onClick = event => {
        const { target } = event;

        const togglerButton = target.closest(this._selectors.passwordTypeToggler);

        if (!togglerButton) return;

        const passwordField = togglerButton.closest(this._selectors.passwordField);
        const passwordInput = passwordField.querySelector('input');

        this._toggleInputType(passwordInput, togglerButton);
    }

    _bindEvents() {
        document.addEventListener('click', this._onClick);
    }
}

new PasswordInputs();