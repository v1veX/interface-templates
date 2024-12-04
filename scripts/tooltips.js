class Tooltips {
    _selectors = {
        tooltipTrigger: '[data-js-tooltip-trigger]',
    }

    _currentTooltip = null;

    constructor() {
        this._bindEvents();
    }

    _setTooltipPosition(anchorElement) {
        const anchorClientCoords = anchorElement.getBoundingClientRect();
        const { width: tooltipWidth, height: tooltipHeight } = this._currentTooltip.getBoundingClientRect();

        let top = anchorClientCoords.bottom;
        let left = anchorClientCoords.left + (anchorClientCoords.width - tooltipWidth) / 2;

        if (top + tooltipHeight > document.documentElement.clientHeight) {
            top = anchorClientCoords.top - tooltipHeight;
        }

        if (left < 0) {
            left = 0;
        }
        else if (left + tooltipWidth > document.documentElement.clientWidth) {
            left =  document.documentElement.clientWidth - tooltipWidth;
        }

        this._currentTooltip.style = `top: ${top}px; left: ${left}px;`;   
    }

    _addTooltip(tooltipTrigger) {
        const tooltipTextContent = tooltipTrigger.getAttribute('data-js-tooltip-text');

        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.textContent = tooltipTextContent;

        this._currentTooltip = tooltipElement;

        document.body.append(this._currentTooltip);
        this._setTooltipPosition(tooltipTrigger);
    }

    _removeTooltip() {
        this._currentTooltip.remove();
        this._currentTooltip = null;
    }

    _onMouseover = event => {
        const tooltipTrigger = event.target.closest(this._selectors.tooltipTrigger);

        if (!tooltipTrigger) return;

        this._addTooltip(tooltipTrigger);
    };

    _onMouseout = () => {
        if (!this._currentTooltip) return;

        this._removeTooltip();
    };

    _bindEvents() {
        document.addEventListener('mouseover', this._onMouseover);
        document.addEventListener('mouseout', this._onMouseout);
    }
}

new Tooltips();