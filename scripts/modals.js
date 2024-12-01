class Modals {
    _selectors = {
        modalToggler: '[data-js-modal-toggler]',
        modal: '[data-js-modal]',
    }

    constructor() {
        this._bindEvents();
    }

    _disablePageScroll() {
        document.body.style.overflow = 'hidden';
    }

    _enablePageScroll() {
        document.body.style.overflow = 'auto';
    }

    _openModal(modalElement) {
        modalElement.showModal();
        this._disablePageScroll();
    }

    _closeModal(modalElement) {
        modalElement.close();
        this._enablePageScroll();
    }

    _handleOnModalTogglerClick(modalToggler) {
        const relatedModalSelector = modalToggler.getAttribute('data-js-related-modal');

        if (relatedModalSelector) {
            const modalElement = document.querySelector(relatedModalSelector);
            this._openModal(modalElement);
        }
        else {
            const modalElement = modalToggler.closest(this._selectors.modal);
            this._closeModal(modalElement);
        }
    }

    _handleOnModalBackdropClick(modalElement) {
        this._closeModal(modalElement);
    }

    _onClick = event => {
        const { target } = event;

        const modalToggler = target.closest(this._selectors.modalToggler);

        if (modalToggler) {
            this._handleOnModalTogglerClick(modalToggler);
            return;
        }

        const isModalBackdrop = target.matches(this._selectors.modal);

        if (isModalBackdrop) {
            this._handleOnModalBackdropClick(target);
            return;
        }
    };

    _bindEvents() {
        document.addEventListener('click', this._onClick);
    }
}

new Modals();