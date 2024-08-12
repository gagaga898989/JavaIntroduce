// すべての見出し要素を選択
const headings = document.querySelectorAll('h1, h2');

// 各見出し要素に対して処理を行う
headings.forEach(heading => {
  // ボタンを作成
  const button = document.createElement('button');
  button.textContent = 'スクロール';
  button.style.marginLeft = '10px';

  // ボタンを見出しに追加
  heading.appendChild(button);

  // ボタンにクリックイベントリスナーを追加
  button.addEventListener('click', (e) => {
	// ブラウザのデフォルトのイベントをキャンセル
	e.preventDefault();
	// スムーズにスクロール
	heading.scrollIntoView({ behavior: 'smooth' });
  });
	// ボタンがクリックされたときに実行される関数
document.getElementById("displayButton").addEventListener("click", function() {
    // 入力欄の値（入力された文字）を取得
    const userInput = document.getElementById("userInput").value;
    
    // 取得した値を表示エリアに設定
    document.getElementById("displayArea").textContent = userInput;
});

});


// これをbody.onLoadとかで動かす
function onLoad() {
  const wrapper = document.querySelector('.wrapper'); // ラッパー（スクロール領域）
  const contents = document.querySelectorAll('.content'); // 各セクションのコンテンツ
  const toc = document.querySelectorAll('.toc'); // 目次（クリックしたらそのセクションにスクロール）
  const contentsPosition = [];
  contents.forEach((content, i) => {
    const startPosition =
      content.getBoundingClientRect().top -
      wrapper.getBoundingClientRect().top +
      wrapper.scrollTop;
    const endPosition = contents.item(i + 1)
      ? contents.item(i + 1).getBoundingClientRect().top -
        wrapper.getBoundingClientRect().top +
        wrapper.scrollTop
      : wrapper.scrollHeight;
    contentsPosition.push({ startPosition, endPosition });
  });

  // スクロール位置に応じてTOCの現在位置を変更する
  const calcCurrentPosition = () => {
    toc.forEach((item, i) => {
      const { startPosition, endPosition } = contentsPosition[i];
      item.classList.remove('active');
      if (
        wrapper.scrollTop + wrapper.getBoundingClientRect().height ===
        wrapper.scrollHeight
      ) {
        toc.item(toc.length - 1).classList.add('active');
      } else if (
        wrapper.scrollTop >= startPosition &&
        wrapper.scrollTop < endPosition
      ) {
        item.classList.add('active');
      }
    });
  };

  // スクロールイベントリスナを登録
  wrapper.addEventListener('scroll', calcCurrentPosition);

  // 目次にクリックイベントリスナを登録
  toc.forEach((item) => {
    item.addEventListener('click', () => {
      const destination = event.target.getAttribute('scrollTo');
      wrapper.scrollTop =
        document.querySelector(`.${destination}`).getBoundingClientRect().top -
        wrapper.getBoundingClientRect().top +
        wrapper.scrollTop;
    });
  });

  calcCurrentPosition();
}
