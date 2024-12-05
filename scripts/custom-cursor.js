class CustomCursor {
    _selectors = {
        cursor: '[data-js-cursor]',
    }

    constructor() {
        this._showCursor();
        this._bindEvents();
    }

    _showCursor() {
        const cursorElement = document.querySelector(this._selectors.cursor);

        cursorElement.classList.remove('hidden');
    }

    _hideCursor() {
        const cursorElement = document.querySelector(this._selectors.cursor);

        cursorElement.classList.add('hidden');
    }

    _setCursorPosition(x, y) {
        const cursorElement = document.querySelector(this._selectors.cursor);

        cursorElement.style = `top: ${y - cursorElement.offsetHeight / 2}px; left: ${x - cursorElement.offsetWidth / 2}px;`;
    }

    _onMousemove = event => {
        const { x, y } = event;

        this._setCursorPosition(x, y);
    }

    _bindEvents() {
        document.addEventListener('mouseenter', () => this._showCursor());
        document.addEventListener('mouseleave', () => this._hideCursor());
        document.addEventListener('mousemove', this._onMousemove);
    }
}

new CustomCursor();