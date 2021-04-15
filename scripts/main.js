document.addEventListener('DOMContentLoaded', () => {
    const main = new Main();
});

class Main {
    constructor() {
        this._init();
    }

    _init() {
        new ToggleClassOnClick('open', '.header-mobile-menu', '.header-menu');
    }
}