// ボタンを取得
const buttons = document.querySelectorAll('button');

// ボタンをクリックしたときに呼び出される関数
function playGame(event) {
  // プレイヤーの手を取得
  const playerHand = event.target.textContent;
  
  // コンピューターの手をランダムに生成
  const hands = ['グー', 'チョキ', 'パー'];
  const computerHand = hands[Math.floor(Math.random() * hands.length)];
  
  // 勝敗を判定
  let result;
  if (playerHand === computerHand) {
    result = 'あいこ';
  } else if (
    (playerHand === 'グー' && computerHand === 'チョキ') ||
    (playerHand === 'チョキ' && computerHand === 'パー') ||
    (playerHand === 'パー' && computerHand === 'グー')
  ) {
    result = '勝ち';
  } else {
    result = '負け';
  }
  
  // 5回に1回ユーザーが勝つ設定
  let userWin = false;
  if (result === '勝ち') {
    const random = Math.floor(Math.random() * 5);
    if (random === 0) {
      userWin = true;
    }
  }
  
  // 結果を表示
  const resultDiv = document.querySelector('#result');
  if (userWin) {
    resultDiv.textContent = `おめでとうございます！あなたは${playerHand}を出しました。コンピューターは${computerHand}を出しました。結果は${result}です。`;
  } else {
    resultDiv.textContent = `あなたは${playerHand}を出しました。コンピューターは${computerHand}を出しました。結果は${result}です。`;
  }
}

// ボタンにクリックイベントを追加
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}