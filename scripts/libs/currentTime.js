/*|--------------------------------------------------------------------------------------------------|*/
/*| class           : CurrentTime                                                                    |*/
/*| explanation     : HTMLに用意されている日付と時間を表示する要素を指定してinnerHTMLで日付と時間を表示する |*/
/*| first argument  : 日付を表示する要素                                                               |*/
/*| second argument : 時間を表示する要素                                                               |*/
/*|--------------------------------------------------------------------------------------------------|*/

class CurrentTime {
    constructor( dateEl, timeEl ) {

        /* 初期化 */
        this.DOM = {};

        /* 引数で指定された要素のDOMを取得 */
        this.DOM.dateEl = document.querySelector(dateEl);
        this.DOM.timeEl = document.querySelector(timeEl);

        /* 日付と時間の初回表示 */
        this._showDate();
        this._showTime();

        /* 時間を1秒ごとに更新 (日付が変わったら日付を再取得) */
        var showTime = this._showTime.bind(this);
        setInterval(showTime, 1000);
    }

    /* 日付の表示 */
    _showDate() {
        /* Dateインスタンス生成 */
        var nowDate = new Date();

        /* 曜日(数値)を取得し日本での曜日表記に変換 */
        this.nowDayNum = nowDate.getDay();
        var nowDay = "";
        switch ( this.nowDayNum ) {
            case 0 :
                nowDay = "日";
                break;
            case 1 :
                nowDay = "月";
                break;
            case 2 :
                nowDay = "火";
                break;
            case 3 :
                nowDay = "水";
                break;
            case 4 :
                nowDay = "木";
                break;
            case 5 :
                nowDay = "金";
                break;
            case 6 :
                nowDay = "土";
                break;
        }

        /* 表示文字列作成 ⇒ 表示 */
        var dateMsg = `<h3>${nowDate.getFullYear()}年 ${nowDate.getMonth() + 1}月 ${nowDate.getDate()}日 (${nowDay})</h3>`;
        this.DOM.dateEl.innerHTML = dateMsg;
    }

    /* 時間の表示 (1s毎コール) */
    _showTime() {
        /* Dateインスタンス生成 */
        var nowTime = new Date();

        /* 表示文字列作成 ⇒ 表示 */
        var timeMsg = `<h2>${nowTime.getHours()} : ${nowTime.getMinutes()} : ${nowTime.getSeconds()}</h2>`
        this.DOM.timeEl.innerHTML = timeMsg;

        /* 日付の変更を監視 */
        if ( this.nowDayNum !== nowTime.getDay() ) {
            this._showDate();  /* 日付が変わったタイミングで表示の更新 */
        }
    }
}