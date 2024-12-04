class PopupsController {
    _selectors = {
        popup: '[data-js-popup]',
        popupControl: '[data-js-popup-control]',
    };

    static _controller = null;

    constructor() {
        if (PopupsController._controller) return;

        this._bindEvents();

        PopupsController._controller = this;
    }

    _closePopup(popupElement) {
        popupElement.remove();
    }

    _onClick = event => {
        const popupControl = event.target.closest(this._selectors.popupControl);

        if (!popupControl) return;

        const popupElement = popupControl.closest(this._selectors.popup);

        this._closePopup(popupElement);
    };

    _bindEvents() {
        document.addEventListener('click', this._onClick);
    }
}

class Popup {
    constructor(textContent, alignment = 'left') {
        const popupElementHTML = this._createPopupHTML(textContent, alignment);
        this._renderPopup(popupElementHTML);

        new PopupsController();
    }

    _createPopupHTML(textContent, alignment) {
        const popupElementHTML = `
            <div class="popup align-${alignment}" data-js-popup>
                <div class="popup-header">
                    <button type="button" class="popup-close-button" data-js-popup-control>
                        x
                        <span class="visually-hidden">Закрыть</span>
                    </button>
                </div>
                <div class="popup-content">
                    ${textContent}
                </div>
            </div>
        `;

        return popupElementHTML;
    }

    _renderPopup(popupElementHTML) {
        document.body.insertAdjacentHTML('beforeend', popupElementHTML);
    }
}

new Popup('Мы используем куки, и нам похуй, согласны вы или нет');
new Popup('А я тут так чисто для рофла ГЫГЫГЫГЫы', 'right');