class PasswordInput {
    _inputElement = null;
    _toggleTypeButtonElement = null;

    _inputTypes = {
        text: 'text',
        password: 'password',
    };

    constructor(inputElementSelector) {
        this._inputElement = document.querySelector(inputElementSelector);
        this._toggleTypeButtonElement = this._inputElement.nextElementSibling;

        this._bindEvents();
    }

    _toggleInputType() {
        const isCurrentTypePassword = this._inputElement.getAttribute('type') == this._inputTypes.password

        this._inputElement.setAttribute(
            'type',
            isCurrentTypePassword ? this._inputTypes.text : this._inputTypes.password
        );

        this._toggleTypeButtonElement.classList.toggle(
            'password-shown',
            isCurrentTypePassword
        );
    }
    
    _onClick = () => {
        this._toggleInputType();
    }

    _bindEvents() {
        this._toggleTypeButtonElement.addEventListener('click', this._onClick);
    }
}

new PasswordInput('[data-js-password-input]');