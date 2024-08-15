// script.js
document.getElementById('toc-icon').addEventListener('click', function() {
    var toc = document.getElementById('toc');
    if (toc.style.display === 'block') {
        toc.style.display = 'none';
    } else {
        toc.style.display = 'block';
    }
});

document.querySelectorAll('#toc a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        document.getElementById('toc').style.display = 'none';
    });
});

// jQueryを使用してボタンのクリックイベントを設定
$(document).ready(function(){
    $('#toggleButton').click(function(){
        $('#text').toggle(); // テキストの表示/非表示を切り替え
    });
});
