document.addEventListener('DOMContentLoaded', () => {
    const main = new Main();
});

class Main {
    constructor() {
        this._init();
    }

    _init() {
        new LoadHtml('#admin-header', 'common/admin-header.html')
        new LoadHtml('#user-header', 'common/user-header.html')
        new ToggleClassOnClick('open', '.header-mobile-menu', '.header-menu');
        
    }
}