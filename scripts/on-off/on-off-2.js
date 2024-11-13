class OnOffButton2 {
    buttonElement = null;

    isEnabled = null;

    states = {
        disabled :'disabled',
        enabled : 'enabled',
    };

    stateTexts = {
        disabled : null,
        enabled : null,
    }

    constructor(selector, isEnabled = false, disabledText = 'Выключено', enabledText = 'Включено') {
        this.buttonElement = document.querySelector(selector);

        this.setInitialState(disabledText, enabledText, isEnabled);

        this.bindEvents();
    }

    setText() {
        this.buttonElement.textContent = this.isEnabled
        ? this.stateTexts.enabled
        : this.stateTexts.disabled
    }

    setInitialState(disabledText, enabledText, isEnabled) {
        this.stateTexts.disabled = disabledText;
        this.stateTexts.enabled = enabledText;

        this.isEnabled = isEnabled;

        this.buttonElement.classList.add(
            this.isEnabled
            ? this.states.enabled
            : this.states.disabled
        );

        this.setText();
    }

    onClick = () => {
        this.buttonElement.classList.toggle(this.states.disabled, this.isEnabled);
        this.buttonElement.classList.toggle(this.states.enabled, !this.isEnabled);
    
        this.isEnabled = !this.isEnabled;

        this.setText();
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onClick);
    }
}

new OnOffButton2(
    '[data-js-on-off-2]',
    false,
    'Автосохранение: выкл',
    'Автосохранение: вкл'
);