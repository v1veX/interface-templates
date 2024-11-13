class OnOffButton1 {
    buttonElement = null;

    isEnabled = null;

    states = {
        disabled :'disabled',
        enabled : 'enabled',
    };

    constructor(selector, isEnabled = false) {
        this.buttonElement = document.querySelector(selector);

        this.setInitialState(isEnabled);

        this.bindEvents();
    }

    setInitialState(isEnabled) {
        this.isEnabled = isEnabled;

        this.buttonElement.classList.add(
            this.isEnabled
            ? this.states.enabled
            : this.states.disabled
        );
    }

    onClick = () => {
        this.buttonElement.classList.toggle(this.states.disabled, this.isEnabled);
        this.buttonElement.classList.toggle(this.states.enabled, !this.isEnabled);
    
        this.isEnabled = !this.isEnabled;
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onClick);
    }
}

new OnOffButton1('[data-js-on-off-1]');