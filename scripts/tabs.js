class Tabs {
    _element = null;

    _selectors = {
        tabControl: '[data-js-tabs-control]',
        tab: '[data-js-tabs-tab]',
    }

    _activeState = 'active';

    _currentTabIndex = 0;

    constructor(elementSelector) {
        this._element = document.querySelector(elementSelector);

        this._bindEvents();
    }

    _openTab(tabIndex) {
        const tab = this._element.querySelectorAll(this._selectors.tab)[tabIndex];
        const tabControl = this._element.querySelectorAll(this._selectors.tabControl)[tabIndex];

        tab.classList.add(this._activeState);
        tabControl.classList.add(this._activeState);
    }

    _closeTab(tabIndex) {
        const tab = this._element.querySelectorAll(this._selectors.tab)[tabIndex];
        const tabControl = this._element.querySelectorAll(this._selectors.tabControl)[tabIndex];

        tab.classList.remove(this._activeState);
        tabControl.classList.remove(this._activeState);
    }

    _switchTab(newTabIndex) {
        this._closeTab(this._currentTabIndex);
        this._openTab(newTabIndex);

        this._currentTabIndex = newTabIndex;
    }

    _onClick = event => {
        const tabControl = event.target.closest(this._selectors.tabControl);

        if (!tabControl) return;

        const tabIndex = Number(tabControl.getAttribute('data-related-tab-index'));
        this._switchTab(tabIndex);
    };

    _bindEvents() {
        this._element.addEventListener('click', this._onClick);
    }
}

new Tabs('#tabs1');
new Tabs('#tabs2');