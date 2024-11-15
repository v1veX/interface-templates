// Можно модифицировать, унаследовавшись от класса OnOffButton1
// (Именно так я бы поступил в реальном проекте) 

class OnOffButton2 {
    _buttonElement = null;

    _isEnabled = null;

    _states = {
        disabled :'disabled',
        enabled : 'enabled',
    };

    _stateTexts = {
        disabled : null,
        enabled : null,
    }

    constructor(selector, isEnabled = false, disabledText = 'Выключено', enabledText = 'Включено') {
        this._buttonElement = document.querySelector(selector);

        this._setInitialState(disabledText, enabledText, isEnabled);

        this._bindEvents();
    }

    _setText() {
        this._buttonElement.textContent = this._isEnabled
        ? this._stateTexts.enabled
        : this._stateTexts.disabled
    }

    _setInitialState(disabledText, enabledText, isEnabled) {
        this._stateTexts.disabled = disabledText;
        this._stateTexts.enabled = enabledText;

        this._isEnabled = isEnabled;

        this._buttonElement.classList.add(
            this._isEnabled
            ? this._states.enabled
            : this._states.disabled
        );

        this._setText();
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

        this._setText();
    }

    _onClick = () => {
        this.changeState();
    }

    _bindEvents() {
        this._buttonElement.addEventListener('click', this._onClick);
    }
}

new OnOffButton2(
    '[data-js-on-off-2]'
);