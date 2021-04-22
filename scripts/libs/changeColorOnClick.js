// class ChangeColorOnClick {

    var lastID = "";
    var oldColor = "";

    // テーブル上でクリックした行の要素に紐づいたIDを引数にする
    function rowClick(tblID) {

        if (lastID!=="" && oldColor!=="") {
            // 前回選択した行の背景色を元に戻す
            document.getElementById(lastID).style.backgroundColor = oldColor;
        }

        // 今回色変更する要素のIDをlastIDとして保存する
        lastID = tblID

        // IDに一致する要素を取得
        var changeColor = document.getElementById(tblID);

        // 色を変更する前に背景色を取得
        oldColor = window.getComputedStyle(changeColor, '').backgroundColor;

        // クリックした行の背景色を変更
        document.getElementById(tblID).style.backgroundColor = 'rgb(253, 215, 45)';
    }
// }
