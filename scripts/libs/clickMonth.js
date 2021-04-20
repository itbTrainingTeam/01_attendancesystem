/*|--------------------------------------------------------------------------------------------------|*/
/*| class           : ClickMonth                                                                     |*/
/*| explanation     : 引数で渡された要素のDOMに対してクリック時にクラス「selected-month」を付与する。      |*/
/*|                   引数で渡された要素の中で別の要素をクリックした場合はクラス「selected-month」が       |*/
/*|                   クリックした要素へ移動する。                                                      |*/
/*|                   初回表示時は現在の月を選択されている状態にする。                                    |*/
/*| first argument  : 上記説明の動作を行う要素                                                          |*/
/*|--------------------------------------------------------------------------------------------------|*/

class ClickMonth {
    constructor(els) {

        /* 初期化 */
        this.DOM = {};

        /* イベント種類を取得 */
        this.eventType = this._getEventType();

        /* 引数で指定された要素のDOMを取得 */
        this.DOM.els = document.querySelectorAll(els);

        /* Dateインスタンス生成 */
        this.date = new Date();

        /* 現在の月を選択 */
        this._thisMonthAddClass();

        /* 月選択イベントを付与 */
        this._addClickEvent();
    }

    /* 現在の月選択 */
    _thisMonthAddClass() {

        /* HTMLに記載されている1 ~ 12の月の記載があるDOMすべてでループ */
        this.DOM.els.forEach( el => {

            /* 現在の月と一致したDOMに対してクラス「selected-month」を付与する */
            if ( el.innerHTML === String(this.date.getMonth() + 1 ) ) {
                el.classList.add("selected-month");
            }
        } );
    }

    /* 月選択イベントを付与 */
    _addClickEvent() {

        /* 1 ~ 12の月の記載があるDOMすべてでループしそれぞれにイベント付与 */
        this.DOM.els.forEach( (el, i) => {
            el.addEventListener( this.eventType, this._monthClickEvent.bind(this) );
        });
    }

    /* 月選択時のイベント */
    _monthClickEvent(event) {

        /* 現在クラス「selected-month」が選択されているDOMからクラス「selected-month」を取り除く */
        this.DOM.els.forEach( el => {
            if ( el.classList.contains("selected-month") ) {
                el.classList.remove("selected-month")
            }
        } );

        /* 選択された月のDOMに対してクラス「selected-month」を付与 */
        event.target.classList.add("selected-month")
    }

    /* イベントタイプの取得 */
    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
}