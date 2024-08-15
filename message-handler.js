// MessageHandler名前空間を使用して、showMessage関数を定義
var MessageHandler = (function() {
    function showMessage() {
        alert("メッセージが表示されました！");
    }

    return {
        showMessage: showMessage
    };
})();
