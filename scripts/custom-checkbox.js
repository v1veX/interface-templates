class CustomCheckbox {
    _nativeInputElement = null;
    _controlElement = null;

    _selectors = {
        nativeInputElement: '[data-js-checkbox-native]',
        controlElement: '[data-js-checkbox-control]',
    }

    _keyCodes = ['Enter', 'Space']

    constructor(customElementSelector) {
        const wrapperElement = document.querySelector(customElementSelector);

        this._nativeInputElement = wrapperElement.querySelector(this._selectors.nativeInputElement);
        this._controlElement = wrapperElement.querySelector(this._selectors.controlElement);

        this._bindEvents();
    }

    _onKeyDown = (event) => {
        if (!this._keyCodes.includes(event.code)) return;

        event.preventDefault();

        const isNativeChecked = this._nativeInputElement.checked;

        this._nativeInputElement.checked = !isNativeChecked;
    }

    _bindEvents() {
        this._controlElement.addEventListener('keydown', this._onKeyDown)
    }
}

new CustomCheckbox('#custom-checkbox-1')