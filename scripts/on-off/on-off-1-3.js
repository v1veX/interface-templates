class OnOffButton1 {
    _buttonElement = null;

    _isEnabled = null;

    _states = {
        disabled :'disabled',
        enabled : 'enabled',
    };

    constructor(selector, isEnabled = false) {
        this._buttonElement = document.querySelector(selector);

        this._setInitialState(isEnabled);

        this._bindEvents();
    }

    _setInitialState(isEnabled) {
        this._isEnabled = isEnabled;

        this._buttonElement.classList.add(
            this._isEnabled
            ? this._states.enabled
            : this._states.disabled
        );
    }

    /**
     * [Public]
     * 
     * Changes state of the button.
     * @param {boolean} enable sets when it needs to set exact state. 
    */
    changeState(enable = !this._isEnabled) {
        this._buttonElement.classList.toggle(this._states.disabled, !enable);
        this._buttonElement.classList.toggle(this._states.enabled, enable);
    
        this._isEnabled = enable;
    }

    _onClick = () => {
        this.changeState();
    }

    _bindEvents() {
        this._buttonElement.addEventListener('click', this._onClick);
    }
}

new OnOffButton1('[data-js-on-off-1]');

new OnOffButton1('[data-js-on-off-3]');