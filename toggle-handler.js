// ToggleHandler名前空間を使用して、toggleText関数を定義
var ToggleHandler = (function() {
    function toggleText() {
        var text = document.getElementById('text');
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }

    return {
        toggleText: toggleText
    };
})();
