const words = [
    {word: 'ambush', meaning: '待ち伏せて急襲する'},
    {word: 'bountiful', meaning: '豊富な'},
    {word: 'inhale', meaning: '吸い込む'},
    {word: 'crane', meaning: 'クレーン'},
    {word: 'inflame', meaning: '掻き立てる'},
    {word: 'meager', meaning: '乏しい'},
    {word: 'tripe', meaning: 'くだらないもの'},
    {word: 'prawn', meaning: 'クルマエビ'},
    {word: 'offset', meaning: '相殺する'},
    {word: 'tan', meaning: '日焼けした色'},
    {word: 'temperate', meaning: '穏やかな'},
    {word: 'attorney', meaning: '弁護士'},
    {word: 'placate', meaning: 'なだめる'},
    {word: 'sea anemone', meaning: 'イソギンチャク'},
    {word: 'homogeneous', meaning: '均質の'},
    {word: 'inundate', meaning: '殺到する'},
    {word: 'taint', meaning: '傷つける'},
    {word: 'monopoly', meaning: '独占'},
    {word: 'strain', meaning: '引っ張る'},
    {word: 'blackout', meaning: '停電'},
    {word: 'stimulant', meaning: '刺激物'},
    {word: 'mercantile', meaning: '商業の'},
    {word: 'utopia', meaning: 'ユートピア'},
    {word: 'built-in', meaning: '作り付けの'},
    {word: 'strand', meaning: '立ち往生させる'},
    {word: 'arsenal', meaning: '兵器庫'},
    {word: 'insolvent', meaning: '破産した'},
    {word: 'decree', meaning: '布告'},
    {word: 'impetus', meaning: '機動力'},
    {word: 'precipitate', meaning: '引き起こす'},
    {word: 'intricate', meaning: '複雑な'},
    {word: 'admonish', meaning: '忠告する'},
    {word: 'loquacious', meaning: 'おしゃべりの'},
    {word: 'conviction', meaning: '確信'},
    {word: 'transplant', meaning: '移籍、移植'},
    {word: 'amity', meaning: '友好'},
    {word: 'astronomical', meaning: '(数量が)肥大な'},
    {word: 'attrition', meaning: '消耗'},
    {word: 'platypus', meaning: 'カモノハシ'},
    {word: 'diffuse', meaning: '散らす'},
    {word: 'intrinsically', meaning: '本質的に'},
    {word: 'attest', meaning: '証明する'},
    {word: 'sanitation', meaning: '衛生設備'},
    {word: 'fiscal', meaning: '財政の'},
    {word: 'markedly', meaning: '著しく'},
    {word: 'pasture', meaning: '牧草地'},
    {word: 'plaintiff', meaning: '原告'},
    {word: 'ail', meaning: '患う'},
    {word: 'posture', meaning: '姿勢'},
    {word: 'verdict', meaning: '評議して決めること'},
    {word: 'devoid', meaning: '~を欠いている'},
    {word: 'celebrated', meaning: '有名な'},
    {word: 'paralysis', meaning: 'まひ'},
    {word: 'reputed', meaning: '〜という評判の'},
    {word: 'residue', meaning: '残り'},
    {word: 'retard', meaning: '遅らせる'},
    {word: 'anchor', meaning: 'いかりを下ろす'},
    {word: 'pod', meaning: 'さや(さやえんどうなど)'},
    {word: 'remit', meaning: '送金する'},
    {word: 'fathom', meaning: '(深さを）測る'},
    {word: 'surge', meaning: '群衆の殺到'},
    {word: 'conductive', meaning: '伝導性の'},
    {word: 'chuckle', meaning: 'くすくす笑い'},
    {word: 'sprinkle', meaning: '水をまく'},
    {word: 'solemn', meaning: '厳粛な'},
    {word: 'transitory', meaning: '儚い'},
    {word: 'liaison', meaning: '連絡係'},
    {word: 'stern', meaning: '厳格な'},
    {word: 'impede', meaning: '妨げる'},
    {word: 'peripheral', meaning: '重要ではない'},
    {word: 'falcon', meaning: 'ハヤブサ'},
    {word: 'alloy', meaning: '合金'},
    {word: 'stroll', meaning: 'ぶらつく'},
    {word: 'refute', meaning: '誤りを証明する'},
    {word: 'intestine', meaning: '腸'},
    {word: 'terminology', meaning: '専門用語'},
    {word: 'singular', meaning: '稀な'},
    {word: 'monotonous', meaning: '単調な'},
    {word: 'ingenious', meaning: '才能のある'},
    {word: 'replenish', meaning: '補給する'},
    {word: 'coach', meaning: '大型馬車'},
    {word: 'kidney', meaning: '腎臓'},
    {word: 'succinct', meaning: '簡潔な'},
    {word: 'poach', meaning: '密漁する'},
    {word: 'collapse', meaning: '崩壊'},
    {word: 'inscribe', meaning: '刻む'},
    {word: 'hectic', meaning: 'てんやわんやの'},
    {word: 'suppress', meaning: '抑える'},
    {word: 'archipelago', meaning: '群島'},
    {word: 'cascade', meaning: '滝'},
    {word: 'authoritarian', meaning: '権威主義の'},
    {word: 'mercy', meaning: '慈悲'},
    {word: 'savory', meaning: '食欲をそそる'},
    {word: 'continental shelf', meaning: '大陸棚'},
    {word: 'radioactive', meaning: '放射性のある'},
    {word: 'shabby', meaning: '粗雑な'},
    {word: 'erode', meaning: '蝕む'},
    {word: 'validate', meaning: '妥当性を立証する'},
    {word: 'tactics', meaning: '戦術'},
    {word: 'compelling', meaning: '説得力のある'},
    {word: 'profusely', meaning: '深く'},
    {word: 'cursory', meaning: '大まかな'},
    {word: 'disperse', meaning: '分散させる'},
    {word: 'overturn', meaning: '横転させる'},
    {word: 'degrade', meaning: '(格や品位を)落とす'},
    {word: 'coexistence', meaning: '共存'},
    {word: 'whirl', meaning: 'ぐるぐる回る'},
    {word: 'proprietor', meaning: '所有者'},
    {word: 'discerning', meaning: '洞察力のある'},
    {word: 'masonry', meaning: '石造物'},
    {word: 'jolt', meaning: '揺さぶる'},
    {word: 'mole', meaning: 'もぐら'},
    {word: 'strive', meaning: '戦う'},
    {word: 'dispatch', meaning: '急送する'},
    {word: 'discourse', meaning: '論文'},
    {word: 'prose', meaning: '散文'},
    {word: 'smash', meaning: '砕ける'},
    {word: 'brand', meaning: '烙印を押す'},
    {word: 'appraise', meaning: '鑑定する'},
    {word: 'upright', meaning: '真っ直ぐに'},
    {word: 'withdraw', meaning: '撤退する、引き出す'},
    {word: 'congregate', meaning: '集まる'},
    {word: 'allure', meaning: '魅惑する'},
    {word: 'equity', meaning: '公平'},
    {word: 'bristle', meaning: '剛毛'},
    {word: 'leverage', meaning: 'てこの原理'},
    {word: 'articulate', meaning: 'はっきり述べる'},
    {word: 'cardiac', meaning: '心臓の'},
    {word: 'conspicuous', meaning: '目立つ'},
    {word: 'materialism', meaning: '物質主義'},
    {word: 'absolute', meaning: '完全に'},
    {word: 'imprison', meaning: '刑務所に入れる'},
    {word: 'satire', meaning: '風刺'},
    {word: 'salvation', meaning: '救済'},
    {word: 'herald', meaning: '先触れ'},
    {word: 'dew', meaning: '露'},
    {word: 'culminate', meaning: '頂点に達する'},
    {word: 'renounce', meaning: '権利を放棄する'},
    {word: 'surcharge', meaning: '追加料金'},
    {word: 'lofty', meaning: '崇高な'},
    {word: 'dune', meaning: '砂丘'},
    {word: 'scrutinize', meaning: '詳細に調べる'},
    {word: 'philanthropist', meaning: '博愛主義者'},
    {word: 'stoop', meaning: 'かがむ'},
    {word: 'detain', meaning: '引き留める'},
    {word: 'seclusion', meaning: '隔離'},
    {word: 'aloft', meaning: '高く'},
    {word: 'tranquil', meaning: '穏やかな'},
    {word: 'shrewd', meaning: '賢い'},
    {word: 'proposition', meaning: '提案'},
    {word: 'incite', meaning: '鼓舞する'},
    {word: 'reckless', meaning: '無謀な'},
    {word: 'diverge', meaning: '(意見などが)異なる、分岐する'},
    {word: 'lethal', meaning: '致死の'},
    {word: 'margin', meaning: '縁'},
    {word: 'potent', meaning: '有力な'},
    {word: 'aggression', meaning: '侵害'},
    {word: 'fringe', meaning: 'へり'},
    {word: 'assassinate', meaning: '暗殺する'},
    {word: 'intake', meaning: '摂取量'},
    {word: 'epilogue', meaning: 'エピローグ'},
    {word: 'composure', meaning: '落ち着き'},
    {word: 'insane', meaning: '正気でない'},
    {word: 'levy', meaning: '徴収する'},
    {word: 'mutter', meaning: 'ぶつぶつ言う'},
    {word: 'desperate', meaning: '必死の'},
    {word: 'inventory', meaning: '在庫の'},
    {word: 'dismantle', meaning: '分解する'},
    {word: 'scavenger', meaning: '清掃動物、清掃人'},
    {word: 'kindle', meaning: '点火する'},
    {word: 'uprising', meaning: '反乱'},
    {word: 'reactor', meaning: '原子炉'},
    {word: 'relic', meaning: '遺跡'},
    {word: 'tundra', meaning: 'ツンドラ'},
    {word: 'invoke', meaning: '訴える'},
    {word: 'meadow', meaning: '牧草地'},
    {word: 'thrive', meaning: '成長する'},
    {word: 'pragmatic', meaning: '実践的な'},
    {word: 'deference', meaning: '服従、敬意'},
    {word: 'pupa', meaning: 'さなぎ'},
    {word: 'disclose', meaning: '暴露する'},
    {word: 'displace', meaning: 'とってかわる'},
    {word: 'ominous', meaning: '不穏な'},
    {word: 'oscillate', meaning: '振動する'},
    {word: 'symptom', meaning: '兆候'},
    {word: 'deputy', meaning: '代理'},
    {word: 'agile', meaning: '機敏な'},
    {word: 'wither', meaning: '衰退する'},
    {word: 'accompaniment', meaning: '伴奏、付属品'},
    {word: 'bolster', meaning: '高める'},
    {word: 'blink', meaning: '見て見ぬふりをする'},
    {word: 'accumulate', meaning: '集める'},
    {word: 'appease', meaning: 'なだめる'},
    {word: 'cruel', meaning: '残酷な'},
    {word: 'cosmic', meaning: '宇宙の'},
    {word: 'insolent', meaning: '横柄な'},
    {word: 'nostalgia', meaning: '郷愁'},
    {word: 'abruptly', meaning: '突然に'},
    {word: 'invert', meaning: '逆にする'},
    {word: 'oblique', meaning: '斜めの'},
    {word: 'reconcile', meaning: '和解させる'},
    {word: 'coffin', meaning: '棺'},
    {word: 'lucrative', meaning: '利益が上がる'},
    {word: 'prosecution', meaning: '起訴'},
    {word: 'submerge', meaning: '水に浸す'},
    {word: 'dividend', meaning: '配当'},
    {word: 'endorse', meaning: '裏書きをする、承認する'},
    {word: 'confine', meaning: '制限する、閉じ込める'},
    {word: 'indecisive', meaning: '優柔不断の'},
    {word: 'ritual', meaning: '儀式'},
    {word: 'conceive', meaning: '思いつく'},
    {word: 'spur', meaning: '刺激する'},
    {word: 'wrath', meaning: '激怒'},
    {word: 'obliterate', meaning: '完全に破壊する'},
    {word: 'apathy', meaning: '無感動'},
    {word: 'surpass', meaning: '勝る'},
    {word: 'realm', meaning: '領域、王国'},
    {word: 'intervene', meaning: '仲裁をする'},
    {word: 'defiance', meaning: '挑'},
    {word: 'frail', meaning: '脆い'},
    {word: 'deliberate', meaning: '計画的な'},
    {word: 'leukemia', meaning: '白血病'},
    {word: 'feudal', meaning: '封建的な'},
    {word: 'municipal', meaning: '地方自治体の'},
    {word: 'meddle', meaning: '干渉する'},
    {word: 'monarchy', meaning: '君主国'},
    {word: 'turbulent', meaning: '騒々しい'},
    {word: 'collective', meaning: '集団的な'},
    {word: 'prodigal', meaning: '浪費する'},
    {word: 'outset', meaning: '着手'},
    {word: 'pastime', meaning: '娯楽'},
    {word: 'soot', meaning: 'すす'},
    {word: 'brittle', meaning: '脆い'},
    {word: 'paddy field', meaning: '水田'},
    {word: 'lucid', meaning: 'わかりやすい'},
    {word: 'cradle', meaning: 'ゆりかご'},
    {word: 'penetrate', meaning: '貫く'},
    {word: 'abide', meaning: '守る'},
    {word: 'converge', meaning: '集中する'},
    {word: 'decomposer', meaning: 'バクテリアなどの分解生物'},
    {word: 'tangible', meaning: '有形な'},
    {word: 'distrust', meaning: '疑惑'},
    {word: 'empirical', meaning: '実験に基づいた'},
    {word: 'ambivalence', meaning: '相反する感情'},
    {word: 'contempt', meaning: 'さげすみ'},
    {word: 'console', meaning: '慰める'},
    {word: 'volatile', meaning: '揮発性の'},
    {word: 'eccentric', meaning: '常軌を逸した'},
    {word: 'alleviate', meaning: '和らげる'},
    {word: 'credulity', meaning: 'すぐに信じ込む性格'},
    {word: 'elapse', meaning: '経過する'},
    {word: 'exile', meaning: '追放'},
    {word: 'addiction', meaning: '常用、ふけること、依存症'},
    {word: 'distort', meaning: '歪める'},
    {word: 'commence', meaning: '始める'},
    {word: 'zealot', meaning: '熱狂する人'},
    {word: 'finesse', meaning: '技巧'},
    {word: 'numb', meaning: 'かじかんだ'},
    {word: 'conifer', meaning: '針葉樹'},
    {word: 'tractable', meaning: '扱いやすい'},
    {word: 'stalk', meaning: '茎'},
    {word: 'husbandry', meaning: '農業'},
    {word: 'torture', meaning: '拷問'},
    {word: 'infringe', meaning: '権利を侵害する'},
    {word: 'momentous', meaning: '重大な'},
    {word: 'incur', meaning: '負債などを被る'},
    {word: 'affliction', meaning: '苦痛'},
    {word: 'extort', meaning: '強要する'},
    {word: 'tame', meaning: '調教する'},
    {word: 'consecutive', meaning: '連続的な'},
    {word: 'segregation', meaning: '人種差別'},
    {word: 'heterogeneous', meaning: '不均質の'},
    {word: 'periphery', meaning: '周辺部'},
    {word: 'insecticide', meaning: '殺虫剤'},
    {word: 'rebellion', meaning: '反乱'},
    {word: 'pupil', meaning: '瞳孔'},
    {word: 'infallible', meaning: '絶対に確実な'},
    {word: 'blatant', meaning: '図々しい'},
    {word: 'blanket', meaning: '覆う'},
    {word: 'rugged', meaning: '険しい'},
    {word: 'notoriety', meaning: '悪評'},
    {word: 'infer', meaning: '推測する'},
    {word: 'Neptune', meaning: '海王星'},
    {word: 'oblivion', meaning: '忘却'},
    {word: 'innate', meaning: '生来の'},
    {word: 'formidable', meaning: '手強い'},
    {word: 'luminous', meaning: '光り輝く'},
    {word: 'communal', meaning: '共同の'},
    {word: 'nuisance', meaning: '迷惑な行動'},
    {word: 'incompatible', meaning: '馬が合わない'},
    {word: 'ascertain', meaning: '確かめる'},
    {word: 'gale', meaning: '疾風'},
    {word: 'lateral', meaning: '横の'},
    {word: 'miscellaneous', meaning: '種々雑多な'},
    {word: 'rubble', meaning: '石くず'},
    {word: 'fluorescence', meaning: '蛍光発光'},
    {word: 'inception', meaning: '開始'},
    {word: 'allotment', meaning: '割り当て'},
    {word: 'render', meaning: '与える'},
    {word: 'submissive', meaning: '従順な'},
    {word: 'outright', meaning: '率直に'},
    {word: 'nominal', meaning: '名ばかりの'},
    {word: 'burden', meaning: '負担'},
    {word: 'frugal', meaning: '質素な'},
    {word: 'dubious', meaning: 'いかがわしい'},
    {word: 'cardinal', meaning: '主要な'},
    {word: 'tacit', meaning: '無言の'},
    {word: 'mucous membrane', meaning: '粘膜'},
    {word: 'grim', meaning: '険しい'},
    {word: 'catastrophe', meaning: '大変動'},
    {word: 'barely', meaning: 'かろうじて'},
    {word: 'ardent', meaning: '熱心な'},
    {word: 'stake', meaning: '利害'},
    {word: 'jargon', meaning: '特殊用語'},
    {word: 'emancipate', meaning: '解放する'},
    {word: 'simultaneous', meaning: '同時に起こる'},
    {word: 'quarry', meaning: '(石などを)切り出す'},
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
    if (!timerBar) return; // タイマーバーが存在しない場合は処理を中止
    
    // 既存のクラスをリセット
    timerBar.classList.remove('warning', 'danger');
    
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    // 既存のタイマーをクリア
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
        
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
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