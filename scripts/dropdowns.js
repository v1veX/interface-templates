class Dropdowns {
    _selectors = {
        dropdownControlElement: '[data-js-dropdown-control]',
        dropdownElement: '[data-js-dropdown]',
    };

    _currentlyOpenedDropdown = null;

    constructor() {
        this._bindEvents();
    }

    _setDropdownPosition(dropdownElement) {
        const offsetParent = dropdownElement.offsetParent;

        const dropdownAlignment = dropdownElement.getAttribute('data-js-dropdown-alignment');

        const dropdownWidth = dropdownElement.offsetWidth;
        const offsetParentWidth = offsetParent.offsetWidth;
        
        let dropdownLeft = 0;
        switch (dropdownAlignment) {
            case 'center': {
                dropdownLeft = offsetParentWidth / 2 - dropdownWidth / 2;
                break;
            }
            case 'right': {
                dropdownLeft = offsetParentWidth - dropdownWidth;
                break;
            }
            default: {
                dropdownLeft = 0;
            }
        }

        dropdownElement.style = `left: ${dropdownLeft}px;`;
    }

    _resetDropdownPosition(dropdownElement) {
        dropdownElement.style = '';
    }

    _openDropdown(dropdownElement) {
        dropdownElement.classList.add('shown');
        this._currentlyOpenedDropdown = dropdownElement;
        this._setDropdownPosition(dropdownElement);
    }

    _closeDropdown(dropdownElement) {
        dropdownElement.classList.remove('shown');
        this._currentlyOpenedDropdown = null;
        this._resetDropdownPosition(dropdownElement);
    }

    _changeCurrentlyOpenedDropdown(newDropdownElement) {
        this._closeDropdown(this._currentlyOpenedDropdown);

        this._openDropdown(newDropdownElement);
    }

    _handleOnControlButtonClick(dropdownControlElement) {
        const dropdownElementSelector = dropdownControlElement.getAttribute('data-js-related-dropdown');

        const dropdownElement = document.querySelector(dropdownElementSelector);

        if (!this._currentlyOpenedDropdown) {
            this._openDropdown(dropdownElement);
        }
        else if (this._currentlyOpenedDropdown.matches(dropdownElementSelector)) {
            this._closeDropdown(dropdownElement);
        }
        else {
            this._changeCurrentlyOpenedDropdown(dropdownElement);
        }
    }

    _handleOnOuterClick() {
        if (!this._currentlyOpenedDropdown) return;

        this._closeDropdown(this._currentlyOpenedDropdown);
    }

    _onClick = event => {
        const dropdownControlElement = event.target.closest(this._selectors.dropdownControlElement);

        if (dropdownControlElement) {
            this._handleOnControlButtonClick(dropdownControlElement);
            return;
        }

        const dropdownElement = event.target.closest(this._selectors.dropdownElement);

        if (dropdownElement) return;

        this._handleOnOuterClick();
    }

    _bindEvents() {
        document.addEventListener('click', this._onClick);
    }
}

new Dropdowns();