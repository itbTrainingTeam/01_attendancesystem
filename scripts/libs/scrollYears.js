/*|--------------------------------------------------------------------------------------------------|*/
/*| class           : ScrollYears                                                                    |*/
/*| explanation     : HTMLに用意されている年選択を表示する要素に対してinnerHTMLで年を表示する              |*/
/*|                   表示された上下ボタンで年を1ずつ切り替えが可能                                      |*/
/*| first argument  : 年を表示する要素                                                                 |*/
/*|--------------------------------------------------------------------------------------------------|*/

class ScrollYears {
    constructor( el ) {

        /* 初期化 */
        this.DOM = {};

        /* イベント種類を取得 */
        this.eventType = this._getEventType();

        /* 引数で指定された要素のDOMを取得 */
        this.DOM.el = document.querySelector(el);

        /* Dateインスタンス生成 */
        this.date = new Date();

        /* 現在の年を取得 */
        this.thisYear = this.date.getFullYear();

        /* 現在の年を保存 */
        this.currentYear = this.thisYear;

        /* 年の初回表示 */
        this._initScrollYears();

        /* 表示した年のDOMを取得 */
        this.DOM.optionEls = document.querySelectorAll(".year-select-option");

        /* 上下のボタンに年の切り替えイベント付与 */
        this._addClickEvent();
    }

    /* 初回表示 */
    _initScrollYears() {
        this.DOM.el.innerHTML = "<span class=\"year-select-btn year-select-btn-up\">▲</span>\n"
                            + "<select class=\"year-selection\" name=\"\" id=\"\" size=\"3\">\n"
                            + "<option class=\"year-select-option\" value=\"\">" + String(this.thisYear + 2) + "</option>\n"
                            + "<option class=\"year-select-option\" value=\"\">" + String(this.thisYear + 1) + "</option>\n"
                            + "<option class=\"year-select-option\" value=\"\" selected>" + String(this.thisYear) + "</option>\n"
                            + "<option class=\"year-select-option\" value=\"\">" + String(this.thisYear - 1) + "</option>\n"
                            + "<option class=\"year-select-option\" value=\"\">" + String(this.thisYear - 2) + "</option>\n"
                            + "</select>"
                            + "<span class=\"year-select-btn year-select-btn-down\">▼</span>";
    }

    /* イベント付与 */
    _addClickEvent() {  
        /* 上下ボタンのDOMを取得 */
        this.DOM.btnEls = document.querySelectorAll(".year-select-btn");

        /* 上下ボタンそれぞれに対してクリックイベントを付与 */
        this.DOM.btnEls.forEach( btnEl => {
            btnEl.addEventListener(this.eventType, this._ClickEvent.bind(this));
        });
    }

    /* 上下ボタンクリック時のイベント */
    _ClickEvent(event) {
        if ( event.target.classList.contains("year-select-btn-up") ) {  /* 上ボタン押下時はインクリメント */
            this.currentYear++;   
        } else if ( event.target.classList.contains("year-select-btn-down") ) {  /* 下ボタン押下時はデクリメント */
            this.currentYear--; 
        } else {  /* それ以外の時はコンソールにエラーを出力 */
            console.log(`error _ClickEvent : trigger element is not contained ( year-select-btn-up ) or ( year-select-btn-down )`);
        }

        /* 年数の表示の切り替え */
        this.DOM.optionEls.forEach( (optionEl, i) => {
            optionEl.innerHTML = String( this.currentYear + 2 - i );
            if ( ( this.currentYear + 2 - i ) === this.currentYear ) {
            }
        } );
        
    }

    /* イベントタイプの取得 */
    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
}