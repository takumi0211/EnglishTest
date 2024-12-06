const words = [
    {word: 'apple', meaning: 'りんご'},
    {word: 'book', meaning: '本'},
    {word: 'cat', meaning: '猫'},
    {word: 'dog', meaning: '犬'},
    {word: 'elephant', meaning: '象'},
    {word: 'fish', meaning: '魚'},
    {word: 'goat', meaning: 'ヤギ'},
    {word: 'house', meaning: '家'},
    {word: 'ice', meaning: '氷'},
    {word: 'juice', meaning: 'ジュース'},
    {word: 'kite', meaning: '凧'},
    {word: 'lion', meaning: 'ライオン'},
    {word: 'moon', meaning: '月'},
    {word: 'nose', meaning: '鼻'},
    {word: 'orange', meaning: 'オレンジ'},
    {word: 'pen', meaning: 'ペン'},
    {word: 'queen', meaning: '女王'},
    {word: 'rain', meaning: '雨'},
    {word: 'sun', meaning: '太陽'},
    {word: 'tree', meaning: '木'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'violin', meaning: 'バイオリン'},
    {word: 'water', meaning: '水'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yogurt', meaning: 'ヨーグルト'},
    {word: 'zebra', meaning: 'シマウマ'},
    {word: 'ball', meaning: 'ボール'},
    {word: 'car', meaning: '車'},
    {word: 'door', meaning: 'ドア'},
    {word: 'egg', meaning: '卵'},
    {word: 'flower', meaning: '花'},
    {word: 'garden', meaning: '庭'},
    {word: 'hat', meaning: '帽子'},
    {word: 'island', meaning: '島'},
    {word: 'juice', meaning: 'ジュース'},
    {word: 'key', meaning: '鍵'},
    {word: 'lamp', meaning: 'ランプ'},
    {word: 'mountain', meaning: '山'},
    {word: 'notebook', meaning: 'ノート'},
    {word: 'ocean', meaning: '海'},
    {word: 'pencil', meaning: '鉛筆'},
    {word: 'queen', meaning: '女王'},
    {word: 'road', meaning: '道'},
    {word: 'star', meaning: '星'},
    {word: 'table', meaning: 'テーブル'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'vase', meaning: '花瓶'},
    {word: 'window', meaning: '窓'},
    {word: 'yard', meaning: '庭'},
    {word: 'zipper', meaning: 'ジッパー'},
    {word: 'baby', meaning: '赤ちゃん'},
    {word: 'chair', meaning: '椅子'},
    {word: 'desk', meaning: '机'},
    {word: 'ear', meaning: '耳'},
    {word: 'forest', meaning: '森'},
    {word: 'glass', meaning: 'ガラス'},
    {word: 'hand', meaning: '手'},
    {word: 'ice cream', meaning: 'アイスクリーム'},
    {word: 'jacket', meaning: 'ジャケット'},
    {word: 'kangaroo', meaning: 'カンガルー'},
    {word: 'leaf', meaning: '葉'},
    {word: 'mirror', meaning: '鏡'},
    {word: 'night', meaning: '夜'},
    {word: 'orange', meaning: 'オレンジ'},
    {word: 'pizza', meaning: 'ピザ'},
    {word: 'queen', meaning: '女王'},
    {word: 'road', meaning: '道'},
    {word: 'sun', meaning: '太陽'},
    {word: 'tree', meaning: '木'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'violin', meaning: 'バイオリン'},
    {word: 'window', meaning: '窓'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yacht', meaning: 'ヨット'},
    {word: 'zoo', meaning: '動物園'},
    {word: 'ant', meaning: '蟻'},
    {word: 'bird', meaning: '鳥'},
    {word: 'cake', meaning: 'ケーキ'},
    {word: 'duck', meaning: 'アヒル'},
    {word: 'eagle', meaning: 'ワシ'},
    {word: 'frog', meaning: 'カエル'},
    {word: 'grape', meaning: 'ぶどう'},
    {word: 'horse', meaning: '馬'},
    {word: 'island', meaning: '島'},
    {word: 'jelly', meaning: 'ゼリー'},
    {word: 'kite', meaning: '凧'},
    {word: 'lamp', meaning: 'ランプ'},
    {word: 'monkey', meaning: 'サル'},
    {word: 'nest', meaning: '巣'},
    {word: 'owl', meaning: 'フクロウ'},
    {word: 'pig', meaning: '豚'},
    {word: 'queen', meaning: '女王'},
    {word: 'rabbit', meaning: 'ウサギ'},
    {word: 'snake', meaning: '蛇'},
    {word: 'turtle', meaning: 'カメ'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'vulture', meaning: 'ハゲタカ'},
    {word: 'whale', meaning: '鯨'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yak', meaning: 'ヤク'},
    {word: 'zebra', meaning: 'シマウマ'},
    {word: 'arrow', meaning: '矢'},
    {word: 'boat', meaning: 'ボート'},
    {word: 'cup', meaning: 'カップ'},
    {word: 'door', meaning: 'ドア'},
    {word: 'earth', meaning: '地球'},
    {word: 'fire', meaning: '火'},
    {word: 'gate', meaning: '門'},
    {word: 'hill', meaning: '丘'},
    {word: 'iceberg', meaning: '氷山'},
    {word: 'jug', meaning: 'やかん'},
    {word: 'king', meaning: '王'},
    {word: 'lamp', meaning: 'ランプ'},
    {word: 'moon', meaning: '月'},
    {word: 'nose', meaning: '鼻'},
    {word: 'owl', meaning: 'フクロウ'},
    {word: 'pen', meaning: 'ペン'},
    {word: 'queen', meaning: '女王'},
    {word: 'river', meaning: '川'},
    {word: 'star', meaning: '星'},
    {word: 'tree', meaning: '木'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'vase', meaning: '花瓶'},
    {word: 'wolf', meaning: 'オオカミ'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yarn', meaning: '毛糸'},
    {word: 'zebra', meaning: 'シマウマ'},
    {word: 'ball', meaning: 'ボール'},
    {word: 'car', meaning: '車'},
    {word: 'dog', meaning: '犬'},
    {word: 'egg', meaning: '卵'},
    {word: 'fish', meaning: '魚'},
    {word: 'girl', meaning: '女の子'},
    {word: 'hat', meaning: '帽子'},
    {word: 'ice', meaning: '氷'},
    {word: 'jam', meaning: 'ジャム'},
    {word: 'key', meaning: '鍵'},
    {word: 'lion', meaning: 'ライオン'},
    {word: 'moon', meaning: '月'},
    {word: 'nest', meaning: '巣'},
    {word: 'orange', meaning: 'オレンジ'},
    {word: 'pig', meaning: '豚'},
    {word: 'queen', meaning: '女王'},
    {word: 'rose', meaning: 'バラ'},
    {word: 'sun', meaning: '太陽'},
    {word: 'tree', meaning: '木'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'violin', meaning: 'バイオリン'},
    {word: 'whale', meaning: '鯨'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yogurt', meaning: 'ヨーグルト'},
    {word: 'zoo', meaning: '動物園'},
    {word: 'ant', meaning: '蟻'},
    {word: 'bear', meaning: '熊'},
    {word: 'cake', meaning: 'ケーキ'},
    {word: 'door', meaning: 'ドア'},
    {word: 'eel', meaning: 'ウナギ'},
    {word: 'fan', meaning: 'ファン'},
    {word: 'gate', meaning: '門'},
    {word: 'hill', meaning: '丘'},
    {word: 'ice', meaning: '氷'},
    {word: 'jar', meaning: '瓶'},
    {word: 'kite', meaning: '凧'},
    {word: 'lamp', meaning: 'ランプ'},
    {word: 'mouse', meaning: 'ネズミ'},
    {word: 'nose', meaning: '鼻'},
    {word: 'owl', meaning: 'フクロウ'},
    {word: 'pen', meaning: 'ペン'},
    {word: 'queen', meaning: '女王'},
    {word: 'ring', meaning: '指輪'},
    {word: 'sun', meaning: '太陽'},
    {word: 'tree', meaning: '木'},
    {word: 'umbrella', meaning: '傘'},
    {word: 'vase', meaning: '花瓶'},
    {word: 'whale', meaning: '鯨'},
    {word: 'xylophone', meaning: '木琴'},
    {word: 'yarn', meaning: '毛糸'},
    {word: 'zebra', meaning: 'シマウマ'},
];


let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let missedWords = []; // 間違えた単語を保存する配列
let selectedWordCount = 0;
let timer = null;
const TIME_PER_QUESTION = 5000; // 5秒

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomChoices(correctMeaning) {
    const otherMeanings = words
        .filter(w => w.meaning !== correctMeaning)
        .map(w => w.meaning);
    const randomMeanings = shuffleArray(otherMeanings).slice(0, 3);
    return shuffleArray([...randomMeanings, correctMeaning]);
}

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function displayWord() {
    const currentWord = shuffledWords[currentWordIndex];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('question-count').textContent = 
        `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // 既存のタイムバーを削除
    const existingTimerBar = document.querySelector('.timer-bar-container');
    if (existingTimerBar) {
        existingTimerBar.remove();
    }
    
    const choices = getRandomChoices(currentWord.meaning);
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    // 新しいタイムバーを追加
    const timerBarHTML = `
        <div class="timer-bar-container">
            <div class="timer-bar" id="timer-bar"></div>
        </div>
    `;
    choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, button));
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    
    startTimer();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const accuracy = Math.round((score / shuffledWords.length) * 100);
    
    // 一旦HTMLを更新
    container.innerHTML = `
        <h2>テスト結果</h2>
        <div class="result-summary">
            <p>スコア: ${score}/${shuffledWords.length} (${accuracy}%)</p>
        </div>
        ${missedWords.length > 0 ? `
            <div class="missed-words">
                <h3>間違えた単語</h3>
                <div class="missed-words-list">
                    ${missedWords.map(word => `
                        <div class="missed-word-item">
                            <span class="word">${word.word}</span>
                            <span class="meaning">${word.meaning}</span>
                        </div>
                    `).join('')}
                </div>
                <button id="retry-missed" class="retry-btn">
                    間違えた単語でもう一度テストする
                </button>
            </div>
        ` : `
            <div class="perfect-score">
                <p>完璧です！全問正解おめでとうございます！</p>
            </div>
        `}
        <button id="retry-all" class="retry-btn">最初からやり直す</button>
    `;

    // HTMLの更新後にイベントリスナーを設定
    const retryMissedBtn = document.getElementById('retry-missed');
    if (retryMissedBtn) {
        retryMissedBtn.addEventListener('click', () => {
            // quiz-containerを元の状態に戻す
            container.innerHTML = `
                <div class="word-display">
                    <p id="word"></p>
                </div>
                <div class="choices-container" id="choices">
                </div>
                <div class="result" id="result"></div>
                <div class="progress">
                    <span id="score">スコア: 0</span>
                    <span id="question-count">問題: 0/0</span>
                </div>
            `;
            
            shuffledWords = shuffleArray([...missedWords]);
            missedWords = [];
            currentWordIndex = 0;
            score = 0;
            displayWord();
        });
    }

    const retryAllBtn = document.getElementById('retry-all');
    if (retryAllBtn) {
        retryAllBtn.addEventListener('click', () => {
            showHomeScreen(); // 最初からやり直すときはホーム画面に戻る
        });
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    // タイマーとタイマー関連の要素をクリア
    clearTimeout(timer);
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '0';
    }
    
    const correctAnswer = shuffledWords[currentWordIndex].meaning;
    const allButtons = document.querySelectorAll('.choice-btn');
    
    allButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').textContent = '正解！';
        document.getElementById('result').className = 'result correct';
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        document.getElementById('result').textContent = '不正解...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);
    }
    
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    setTimeout(() => {
        currentWordIndex++;
        if (currentWordIndex >= shuffledWords.length) {
            showResults();
        } else {
            displayWord();
        }
    }, 1000);
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    if (!timerBar) return;
    
    timerBar.classList.remove('warning', 'danger');
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    if (timer) {
        clearTimeout(timer);
    }
    
    setTimeout(() => {
        if (timerBar) timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        if (timerBar) timerBar.classList.add('warning');
    }, TIME_PER_QUESTION * 0.6);
    
    setTimeout(() => {
        if (timerBar) timerBar.classList.add('danger');
    }, TIME_PER_QUESTION * 0.8);

    timer = setTimeout(() => {
        const correctAnswer = shuffledWords[currentWordIndex].meaning;
        const allButtons = document.querySelectorAll('.choice-btn');
        
        // 時間切れの場合、すべてのボタンを無効化し、正解を赤色で表示
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('incorrect'); // 正解を赤色で表示
            }
        });

        document.getElementById('result').textContent = '時間切れ...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    }, TIME_PER_QUESTION);
}

// ホーム画面の表示関数を追加
function showHomeScreen() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="home-screen">
            <h2>テストする単語数を選んでください</h2>
            <div class="word-count-options">
                <button class="word-count-btn" data-count="10">10単語</button>
                <button class="word-count-btn" data-count="30">30単語</button>
                <button class="word-count-btn" data-count="50">50単語</button>
                <button class="word-count-btn" data-count="100">100単語</button>
            </div>
            <p class="total-words">総単語数: ${words.length}語</p>
        </div>
    `;

    // 単語数選択ボタンのイベントリスナーを設定
    const buttons = document.querySelectorAll('.word-count-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedWordCount = parseInt(button.dataset.count);
            startQuiz();
        });
    });
}

// クイズ開始関数を追加
function startQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="word-display">
            <p id="word"></p>
        </div>
        <div class="choices-container" id="choices">
        </div>
        <div class="result" id="result"></div>
        <div class="progress">
            <span id="score">スコア: 0</span>
            <span id="question-count">問題: 0/0</span>
        </div>
    `;
    
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    shuffleWords();
    displayWord();
}

// window.onloadを修正
window.onload = () => {
    showHomeScreen();
}; 
