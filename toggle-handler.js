// ToggleHandler名前空間を使用して、toggleText関数を定義
var ToggleHandler = (function() {
    function toggleText() {
        $('#text').toggle();  // jQueryのtoggle()メソッドで表示/非表示を切り替え
    }

    // イベントリスナーの設定
    $(document).ready(function() {
        $('#toggleButton').on('click', toggleText);
    });

    return {
        toggleText: toggleText
    };
})();
