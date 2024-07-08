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
});