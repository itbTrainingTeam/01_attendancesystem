document.addEventListener('DOMContentLoaded', () => {
    const main = new Main();
});

class Main {
    constructor() {
        this._loadHeader();
        var date1 = new Date();
        while ( new Date() - date1 < 10 );
        window.addEventListener('load', this._init);
    }

    _loadHeader() {
        new LoadHtml('#admin-header', 'common/admin-header.html');
        new LoadHtml('#user-header', 'common/user-header.html');
    }

    _init() {
        new ToggleClassOnClick('open', '.header-mobile-admin-menu', '.header-menu-admin');
        new ClickMonth('.month-table-body-row-data');
        new ScrollYears('.calendar-container__year');
        new CurrentTime('.current-time-container__date', '.current-time-container__time');
        new MakeAttendanceRow('.attendance-table-body');
    }
}