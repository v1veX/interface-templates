class CustomCheckbox {
    _nativeInputElement = null;
    _controlElement = null;

    _selectors = {
        nativeInputElement: '[data-js-checkbox-native]',
        controlElement: '[data-js-checkbox-control]',
    };

    _keyCodes = ['Enter', 'Space'];

    constructor(wrapperElementSelector, isCheked = false) {
        const wrapperElement = document.querySelector(wrapperElementSelector);

        this._nativeInputElement = wrapperElement.querySelector(this._selectors.nativeInputElement);
        this._controlElement = wrapperElement.querySelector(this._selectors.controlElement);

        this._nativeInputElement.checked = isCheked;

        this._bindEvents();
    }

    /**
     * [Public]
     * 
     * Changes state of the checkbox.
     * @param {boolean} check sets when it needs to set exact state. 
    */
    changeState(check = !this._nativeInputElement.checked) {
        this._nativeInputElement.checked = check;
    }

    _onKeyDown = (event) => {
        if (!this._keyCodes.includes(event.code)) return;

        event.preventDefault();

        this.changeState();
    }

    _bindEvents() {
        this._controlElement.addEventListener('keydown', this._onKeyDown);
    }
}

new CustomCheckbox('#custom-checkbox-1', true);