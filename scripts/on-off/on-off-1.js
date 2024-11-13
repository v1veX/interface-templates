class OnOffButton1 {
    buttonElement = null;

    isEnabled = null;

    states = {
        disabled :'disabled',
        enabled : 'enabled',
    };

    constructor(isEnabled = false) {
        this.buttonElement = document.querySelector('[data-js-on-off-1]');

        this.isEnabled = isEnabled;

        this.setInitialState();

        this.bindEvents();
    }

    setInitialState() {
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

new OnOffButton1();