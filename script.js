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
    {word: 'lethal', meaning: '致���の'},
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
    {word: 'defiance', meaning: '挑戦'},
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
    {word: 'counterpart', meaning: '対応する人やもの'},
    {word: 'pasteurization', meaning: '低温殺菌'},
    {word: 'hay', meaning: '干し草'},
    {word: 'unearth', meaning: '明るみに出す'},
    {word: 'relevancy', meaning: '関連性'},
    {word: 'runoff', meaning: '地面を流れる雨水'},
    {word: 'sodium', meaning: 'ナトリウム'},
    {word: 'coherent', meaning: '首尾一貫した'},
    {word: 'oppression', meaning: '圧迫'},
    {word: 'enmity', meaning: '敵意'},
    {word: 'bovine', meaning: 'ウシ科の'},
    {word: 'reclaim', meaning: '開墾する'},
    {word: 'apathetic', meaning: '無関心な'},
    {word: 'mitigate', meaning: '和らげる'},
    {word: 'tribute', meaning: '賛辞'},
    {word: 'esteem', meaning: '尊敬する'},
    {word: 'intrude', meaning: '侵入する'},
    {word: 'glossary', meaning: '用語解説'},
    {word: 'elliptical', meaning: '楕円の'},
    {word: 'whisker', meaning: 'ひげ'},
    {word: 'setback', meaning: '後転'},
    {word: 'affirmative', meaning: '賛成の'},
    {word: 'crescent', meaning: '三日月'},
    {word: 'eulogy', meaning: '賛辞'},
    {word: 'sparrow', meaning: '雀'},
    {word: 'tempt', meaning: '誘惑する'},
    {word: 'inoculation', meaning: '予防接種'},
    {word: 'incidental', meaning: '臨時の、偶然'},
    {word: 'embellish', meaning: '飾る'},
    {word: 'insensitive', meaning: '無関心な'},
    {word: 'elusive', meaning: '理解しにくい'},
    {word: 'embryonic', meaning: '胎児の'},
    {word: 'freight', meaning: '貨物'},
    {word: 'agent', meaning: '成分、物質'},
    {word: 'creditor', meaning: '債権者'},
    {word: 'exploit', meaning: '活用する'},
    {word: 'candor', meaning: '素直さ'},
    {word: 'shred', meaning: 'シュレッダーの(名)動詞版'},
    {word: 'foresight', meaning: '先見'},
    {word: 'clemency', meaning: '寛大さ'},
    {word: 'methodical', meaning: '秩序だった'},
    {word: 'rectify', meaning: '改正する'},
    {word: 'scrape', meaning: 'こすり取る'},
    {word: 'precipitous', meaning: '険しい'},
    {word: 'animate', meaning: '活気づける'},
    {word: 'baroque', meaning: 'バロック式の'},
    {word: 'disintegrate', meaning: '崩壊する'},
    {word: 'nullify', meaning: '無効にする'},
    {word: 'myriad', meaning: '無数'},
    {word: 'phonetic', meaning: '音声上の'},
    {word: 'chaotic', meaning: '混沌とした'},
    {word: 'meticulously', meaning: '綿密に'},
    {word: 'poultry', meaning: '家禽'},
    {word: 'anthropology', meaning: '人類学'},
    {word: 'upheaval', meaning: '激変'},
    {word: 'impair', meaning: '損なう'},
    {word: 'exoskeleton', meaning: '外骨格'},
    {word: 'thrifty', meaning: 'つましい、倹約な'},
    {word: 'precaution', meaning: '予防'},
    {word: 'latent', meaning: '潜伏している'},
    {word: 'liner', meaning: '定期船'},
    {word: 'huddle', meaning: '体を寄せ合う'},
    {word: 'besiege', meaning: '包囲する'},
    {word: 'common sense', meaning: '良識'},
    {word: 'perish', meaning: '腐る'},
    {word: 'touchy', meaning: '厄介な'},
    {word: 'retiring', meaning: '内気な'},
    {word: 'peril', meaning: '危険'},
    {word: 'profusion', meaning: '豊富'},
    {word: 'abstain', meaning: '慎む'},
    {word: 'preside', meaning: '司会する'},
    {word: 'predominant', meaning: '圧倒的な'},
    {word: 'bizarre', meaning: '風変わりな'},
    {word: 'bewilder', meaning: '当惑させる'},
    {word: 'deplore', meaning: '非難する'},
    {word: 'oxidize', meaning: '酸化する'},
    {word: 'authenticate', meaning: '本物であると証明する'},
    {word: 'futile', meaning: '無駄な'},
    {word: 'plead', meaning: '弁護する'},
    {word: 'mend', meaning: '補修する'},
    {word: 'sluggish', meaning: '停滞した'},
    {word: 'spawn', meaning: '卵'},
    {word: 'indispensable', meaning: '不可欠の'},
    {word: 'gum', meaning: '歯茎'},
    {word: 'veto', meaning: '拒否権'},
    {word: 'psychiatrist', meaning: '精神科医'},
    {word: 'liability', meaning: '責任'},
    {word: 'seismology', meaning: '地震学'},
    {word: 'ordinance', meaning: '法令'},
    {word: 'herbicide', meaning: '除草剤'},
    {word: 'rookery', meaning: '集団繁殖地'},
    {word: 'appendix', meaning: '付録'},
    {word: 'topography', meaning: '地形'},
    {word: 'mediate', meaning: '仲介する'},
    {word: 'coagulate', meaning: '凝固する'},
    {word: 'anonymity', meaning: '匿名者'},
    {word: 'unwarranted', meaning: '不当な'},
    {word: 'coniferous tree', meaning: '針葉樹'},
    {word: 'makeshift', meaning: '間に合わせの'},
    {word: 'smother', meaning: '（火などを）消す'},
    {word: 'tangle', meaning: '紛糾する'},
    {word: 'taper', meaning: '先細りになること'},
    {word: 'redundant', meaning: '余分な'},
    {word: 'replicate', meaning: '複製する'},
    {word: 'procession', meaning: '行列'},
    {word: 'celestial', meaning: '天の'},
    {word: 'sophistication', meaning: '洗礼された考え'},
    {word: 'dine', meaning: '食事をする'},
    {word: 'heredity', meaning: '遺伝'},
    {word: 'aberration', meaning: '異常'},
    {word: 'marital', meaning: '結婚の'},
    {word: 'exert', meaning: '努力する'},
    {word: 'illusive', meaning: '錯覚を起こさせる'},
    {word: 'stockpile', meaning: '備蓄する'},
    {word: 'greenback', meaning: '米ドル紙幣'},
    {word: 'coercion', meaning: '強制'},
    {word: 'offshore', meaning: 'オフショアの'},
    {word: 'lapse', meaning: '失う'},
    {word: 'whistle', meaning: '口笛を吹く'},
    {word: 'audit', meaning: '監査する'},
    {word: 'tow', meaning: 'けん引する'},
    {word: 'jurisdiction', meaning: '管轄権'},
    {word: 'dissident', meaning: '反体制派（の人）'},
    {word: 'dismiss', meaning: '解雇する'},
    {word: 'enlightenment', meaning: '啓蒙'},
    {word: 'evergreen', meaning: '常緑の'},
    {word: 'levity', meaning: '軽薄'},
    {word: 'wharf', meaning: '埠頭'},
    {word: 'defame', meaning: '中傷する'},
    {word: 'energize', meaning: '元気付ける'},
    {word: 'seismic', meaning: '地震の'},
    {word: 'buoy', meaning: 'ブイ'},
    {word: 'ardor', meaning: '熱心'},
    {word: 'siege', meaning: '包囲'},
    {word: 'mirage', meaning: '蜃気楼'},
    {word: 'transparent', meaning: '透明な'},
    {word: 'credence', meaning: '信用'},
    {word: 'flux', meaning: '流れ'},
    {word: 'lumber', meaning: 'のしのし歩く'},
    {word: 'solitary', meaning: '孤独'},
    {word: 'hinder', meaning: '妨害する'},
    {word: 'constraint', meaning: '制約'},
    {word: 'divergent', meaning: '異なる'},
    {word: 'integrate', meaning: '統一する'},
    {word: 'anomaly', meaning: '異例な人物'},
    {word: 'proximity', meaning: '近接'},
    {word: 'amicable', meaning: '友好的な'},
    {word: 'repent', meaning: '後悔する'},
    {word: 'conversion', meaning: '転換'},
    {word: 'diurnal', meaning: '昼間活動する'},
    {word: 'ordeal', meaning: '試練'},
    {word: 'incubate', meaning: '培養する'},
    {word: 'cumbersome', meaning: '扱いにくい'},
    {word: 'maternal', meaning: '母親の'},
    {word: 'spark', meaning: '火花'},
    {word: 'thorax', meaning: '胸部'},
    {word: 'preclude', meaning: '排除する'},
    {word: 'exacerbate', meaning: '悪化する'},
    {word: 'erratic', meaning: '不規則な'},
    {word: 'petty', meaning: '些細な・つまらない'},
    {word: 'latency period', meaning: '潜伏期間'},
    {word: 'faction', meaning: '党派'},
    {word: 'woe', meaning: '悲痛'},
    {word: 'equivocal', meaning: 'はっきりしない'},
    {word: 'afflict', meaning: '悩ます'},
    {word: 'eradicate', meaning: '根絶する'},
    {word: 'despise', meaning: '軽蔑する'},
    {word: 'riverbed', meaning: '川底'},
    {word: 'rudimentary', meaning: '基本的な'},
    {word: 'static', meaning: '変化のない'},
    {word: 'benign', meaning: '穏やかな'},
    {word: 'intermittent', meaning: '断続的な'},
    {word: 'onlooker', meaning: '傍観者'},
    {word: 'evasion', meaning: '回避'},
    {word: 'remorse', meaning: '深い悔恨'},
    {word: 'cite', meaning: '引用する'},
    {word: 'oust', meaning: '取り上げる'},
    {word: 'manipulate', meaning: '巧みに操作する'},
    {word: 'overwhelm', meaning: '圧倒する'},
    {word: 'concession', meaning: '譲歩'},
    {word: 'prone', meaning: '〜する傾向がある'},
    {word: 'tariff', meaning: '関税'},
    {word: 'demystify', meaning: '解明する'},
    {word: 'utmost', meaning: '最大限の'},
    {word: 'itchy', meaning: 'かゆい'},
    {word: 'exhaustive', meaning: '完全な'},
    {word: 'testimony', meaning: '証明'},
    {word: 'requisite', meaning: '必要な'},
    {word: 'opportunist', meaning: '日和味主義者'},
    {word: 'legislation', meaning: '法律'},
    {word: 'congruence', meaning: '一致'},
    {word: 'grope', meaning: '手探りする'},
    {word: 'don', meaning: '着る'},
    {word: 'ratify', meaning: '批准する'},
    {word: 'tantalize', meaning: '焦らす'},
    {word: 'stipulate', meaning: '明記する'},
    {word: 'clumsy', meaning: '不器用な'},
    {word: 'resonant', meaning: '朗々とした'},
    {word: 'exquisite', meaning: 'この上なく素晴らしい'},
    {word: 'avalanche', meaning: '雪崩'},
    {word: 'preface', meaning: '序文'},
    {word: 'enigma', meaning: '謎'},
    {word: 'bureaucracy', meaning: '官僚政治'},
    {word: 'per capita', meaning: '一人当たりの'},
    {word: 'interim', meaning: 'しばらくの間'},
    {word: 'averse', meaning: '嫌って'},
    {word: 'startle', meaning: '驚かせる'},
    {word: 'hefty', meaning: '多量の'},
    {word: 'incontrovertible', meaning: '議論の余地のない'},
    {word: 'prolific', meaning: '多作の'},
    {word: 'stereotype', meaning: '固定観念'},
    {word: 'perpetual', meaning: '永続的な'},
    {word: 'stray', meaning: 'それる'},
    {word: 'dogmatic', meaning: '独断的な'},
    {word: 'embezzle', meaning: '横領する'},
    {word: 'statistics', meaning: '統計学'},
    {word: 'unleash', meaning: '解放する'},
    {word: 'diligence', meaning: '勤勉な'},
    {word: 'inhibit', meaning: '抑制する'},
    {word: 'mountain lion', meaning: 'アメリカライオン'},
    {word: 'visionary', meaning: '先見の明がある'},
    {word: 'preponderance', meaning: '優勢'},
    {word: 'canine', meaning: '犬の'},
    {word: 'pliable', meaning: '曲げやすい'},
    {word: 'provincial', meaning: '州の'},
    {word: 'smuggle', meaning: '密輸する'},
    {word: 'thorn', meaning: 'とげ'},
    {word: 'subsidize', meaning: '補助金を支給する'},
    {word: 'credential', meaning: '信任状'},
    {word: 'stagnant', meaning: 'よどんだ'},
    {word: 'disruption', meaning: '混乱'},
    {word: 'token', meaning: 'トークン'},
    {word: 'induce', meaning: '誘発する'},
    {word: 'glimpse', meaning: 'ちらりとみる'},
    {word: 'sanction', meaning: '認可'},
    {word: 'impulse', meaning: '衝動'},
    {word: 'luminary', meaning: '発光体'},
    {word: 'rehabilitate', meaning: 'リハビリする'},
    {word: 'rhetoric', meaning: '修辞学'},
    {word: 'gastric ulcer', meaning: '胃潰瘍'},
    {word: 'equilibrium', meaning: '釣り合い'},
    {word: 'subsequent', meaning: 'その後の'},
    {word: 'underpin', meaning: '支える'},
    {word: 'illusion', meaning: '幻想'},
    {word: 'sporadic', meaning: '散発的な'},
    {word: 'founder', meaning: '創設者'},
    {word: 'exemplify', meaning: '例証する'},
    {word: 'idiosyncrasy', meaning: '特異性'},
    {word: 'Uranus', meaning: '天王星'},
    {word: 'austere', meaning: '厳しい'},
    {word: 'condolence', meaning: 'お悔やみ'},
    {word: 'skeptic', meaning: '懐疑的な'},
    {word: 'ambiguous', meaning: '曖昧な'},
    {word: 'practitioner', meaning: '開業者'},
    {word: 'lubricate', meaning: 'なめらかにする'},
    {word: 'revenue', meaning: '歳入'},
    {word: 'purge', meaning: '取り除く'},
    {word: 'traumatic', meaning: 'トラウマの'},
    {word: 'convene', meaning: '招集する'},
    {word: 'legacy', meaning: '遺産'},
    {word: 'peer', meaning: '同僚'},
    {word: 'pretentious', meaning: 'うぬぼれた'},
    {word: 'obsolete', meaning: '古くなった'},
    {word: 'autonomous', meaning: '自治権のある'},
    {word: 'legitimate', meaning: '正当な'},
    {word: 'definitive', meaning: '最終的な'},
    {word: 'novelty', meaning: '珍しい'},
    {word: 'maritime', meaning: '海事の'},
    {word: 'alert', meaning: '用心深い'},
    {word: 'recede', meaning: '後退する'},
    {word: 'consequently', meaning: '結果として'},
    {word: 'acquire', meaning: '手にいれる'},
    {word: 'extravagant', meaning: '贅沢な'},
    {word: 'seep', meaning: '水が漏れる'},
    {word: 'glitter', meaning: 'キラキラ輝く'},
    {word: 'additive', meaning: '添加物'},
    {word: 'agenda', meaning: '議題'},
    {word: 'intriguing', meaning: '興味をそそる'},
    {word: 'massacre', meaning: '大虐殺'},
    {word: 'censor', meaning: '校閲する'},
    {word: 'outgoing', meaning: '社交的な'},
    {word: 'fortress', meaning: '要塞'},
    {word: 'gloomy', meaning: '憂鬱な'},
    {word: 'concede', meaning: '認める'},
    {word: 'universal', meaning: '普遍的な'},
    {word: 'lieu', meaning: '場所'},
    {word: 'preeminent', meaning: '卓越した'},
    {word: 'inflate', meaning: '膨らませる'},
    {word: 'incomprehensible', meaning: '理解できない'},
    {word: 'momentum', meaning: '運動量'},
    {word: 'barren', meaning: '不毛の'},
    {word: 'pertinent', meaning: '関連する'},
    {word: 'elated', meaning: '大得意の'},
    {word: 'mob', meaning: '群衆'},
    {word: 'jellyfish', meaning: 'クラゲ'},
    {word: 'havoc', meaning: '大混乱'},
    {word: 'eclectic', meaning: '折衷的な'},
    {word: 'obstinate', meaning: '頑固な'},
    {word: 'standstill', meaning: '停止'},
    {word: 'fervor', meaning: '熱情'},
    {word: 'tuberculosis', meaning: '結核'},
    {word: 'incisive', meaning: '明敏な'},
    {word: 'nautical', meaning: '航海の'},
    {word: 'deplete', meaning: '使い果たす'},
    {word: 'defendant', meaning: '被告'},
    {word: 'improbable', meaning: 'ありそうもない'},
    {word: 'decay', meaning: '衰退する'},
    {word: 'nectar', meaning: '植物の蜜'},
    {word: 'concise', meaning: '簡潔な'},
    {word: 'ascendancy', meaning: '優位'},
    {word: 'lean', meaning: '寄りかかる・傾ける'},
    {word: 'gargle', meaning: 'うがいをする'},
    {word: 'abolish', meaning: '廃止する'},
    {word: 'devastate', meaning: '荒廃させる・打ちのめす'},
    {word: 'shudder', meaning: '（恐怖や嫌悪で）身震いする'},
    {word: 'illiterate', meaning: '読み書きのできない'},
    {word: 'wedge', meaning: 'くさび・押し込む'},
    {word: 'living standard', meaning: '生活水準'},
    {word: 'hypothetical', meaning: '仮定の・仮説上の'},
    {word: 'plateau', meaning: '高原・台地'},
    {word: 'dismal', meaning: '陰気な・憂うつな'},
    {word: 'parameter', meaning: '（測定可能な）要因・パラメーター'},
    {word: 'phobia', meaning: '恐怖症・病的恐怖'},
    {word: 'posterity', meaning: '子孫'},
    {word: 'saturate', meaning: 'すっかり湿らす・満たす'},
    {word: 'compensate', meaning: '補償する・埋め合わせる'},
    {word: 'fanaticism', meaning: '熱狂・狂信'},
    {word: 'provision', meaning: '条項・供給'},
    {word: 'cease', meaning: 'やめる・終わる'},
    {word: 'presumption', meaning: '推定・仮定'},
    {word: 'suffocate', meaning: '窒息させる'},
    {word: 'sore', meaning: '痛い・いらいらした'},
    {word: 'mystical', meaning: '神秘的な・秘教の'},
    {word: 'forbearance', meaning: '我慢・忍耐'},
    {word: 'imaginable', meaning: '想像できる'},
    {word: 'monumental', meaning: '（程度が）途方もない・非常に大きい'},
    {word: 'pueblo', meaning: 'プエブロ族'},
    {word: 'haphazard', meaning: 'でたらめの・偶然の・無計画な'},
    {word: 'precede', meaning: '先導する・先立つ'},
    {word: 'soothe', meaning: '和らげる・なだめる'},
    {word: 'prompt', meaning: '迅速な・即座の'},
    {word: 'depict', meaning: '描写する・描く'},
    {word: 'reservoir', meaning: '貯水池・貯蔵所'},
    {word: 'propriety', meaning: '礼儀正しさ・作法・適切さ'},
    {word: 'speculate', meaning: '推測する・考察する'},
    {word: 'quota', meaning: '割り当て・分担'},
    {word: 'footnote', meaning: '脚注'},
    {word: 'outnumber', meaning: '数で勝る'},
    {word: 'curtail', meaning: '削減する・短縮する'},
    {word: 'restless', meaning: '眠れない・休まらない・不安な'},
    {word: 'augment', meaning: '増大させる・増やす'},
    {word: 'contingency', meaning: '不測の事態・偶然性'},
    {word: 'benevolent', meaning: '慈善深い・親切な'},
    {word: 'scorch', meaning: '焦がす���焼く'},
    {word: 'burrow', meaning: '（動物の）穴・隠れ場所'},
    {word: 'terminate', meaning: '終わらせる・終了させる'},
    {word: 'wax', meaning: 'うるうるする・ワックスをかける'},
    {word: 'salient', meaning: '目立つ・際立った'},
    {word: 'perplex', meaning: '当惑させる・困らせる'},
    {word: 'provoke', meaning: '怒らせる・引き起こす'},
    {word: 'compatible', meaning: '互換性のある・矛盾のない'},
    {word: 'divert', meaning: 'そらす・迂回させる'},
    {word: 'temporary', meaning: '一時的な・臨時の'},
    {word: 'lagoon', meaning: '潟湖・小さな沼'},
    {word: 'plague', meaning: '疫病・災害'},
    {word: 'elaborate', meaning: '詳しく説明する・入念な'},
    {word: 'consolidate', meaning: '合併する・強固にする'},
    {word: 'inert', meaning: '不活性の・不活発な'},
    {word: 'precise', meaning: '正確な・精密な'},
    {word: 'vowel', meaning: '母音'},
    {word: 'irrelevant', meaning: '関連のない・見当違いの'},
    {word: 'trough', meaning: '波の谷・最低点'},
    {word: 'valid', meaning: '有効な・合法的な'},
    {word: 'incentive', meaning: '刺激・誘因'},
    {word: 'pathetic', meaning: '痛ましい・哀れな'},
    {word: 'growl', meaning: '（犬などが）うなる'},
    {word: 'expiration', meaning: '（契約期間などの）満了・満期'},
    {word: 'perfunctory', meaning: 'いい加減な・やる気のない'},
    {word: 'forerunner', meaning: '先駆者・前身・前ぶれ'},
    {word: 'influenza', meaning: 'インフルエンザ'},
    {word: 'prevail', meaning: '広く行き渡る'},
    {word: 'ascribe', meaning: '～のせいにする'},
    {word: 'right angle', meaning: '直角'},
    {word: 'comply', meaning: '（規則・基準などに）従う'},
    {word: 'enhance', meaning: '高める・増す'},
    {word: 'ponder', meaning: '熟考する'},
    {word: 'timid', meaning: '臆病な'},
    {word: 'bill', meaning: '法案・請求書・請求書を送る'},
    {word: 'hoist', meaning: 'つり上げる・持ち上げる'},
    {word: 'pest', meaning: '害虫・疫病'},
    {word: 'obese', meaning: '肥満した'},
    {word: 'fleet', meaning: '艦隊・船団'},
    {word: 'manifest', meaning: '明白な・はっきりとした'},
    {word: 'foreshadow', meaning: '予兆となる・暗示する'},
    {word: 'menace', meaning: '脅迫・おどし・危険人物'},
    {word: 'ascend', meaning: '上昇する・登る'},
    {word: 'industrious', meaning: '勤勉な'},
    {word: 'trivial', meaning: 'ささいな・つまらない'},
    {word: 'furor', meaning: '興奮・激怒'},
    {word: 'indulge', meaning: '甘やかす・夢中になる'},
    {word: 'capricious', meaning: '気まぐれな・変わりやすい'},
    {word: 'introvert', meaning: '内向的な・内向性の人'},
    {word: 'retract', meaning: '取り消す・引っ込める'},
    {word: 'waive', meaning: '（権利などを）自発的に放棄する'},
    {word: 'monetary', meaning: '通貨の・金融上の・金銭の'},
    {word: 'concord', meaning: '一致・調和・協調'},
    {word: 'rebel', meaning: '反逆者'},
    {word: 'prototype', meaning: '原型・模型・原型品・試作品'},
    {word: 'finite', meaning: '限られた・有限の'},
    {word: 'detached', meaning: '公平な・独立した'},
    {word: 'criterion', meaning: '（判断・評価の）基準・標準'},
    {word: 'satirical', meaning: '風刺的な・皮肉な'},
    {word: 'bold', meaning: '大胆な・勇敢な'},
    {word: 'compromise', meaning: '妥協する・譲歩する'},
    {word: 'hurl', meaning: '強く投げつける・放り投げる'},
    {word: 'attribute', meaning: '（功績・結果などを）のせいにする'},
    {word: 'turbulence', meaning: '大荒れ・動揺・乱気流'},
    {word: 'principal', meaning: '（利子に対して）元金・校長'},
    {word: 'concur', meaning: '賛成する・同時に起こる'},
    {word: 'install', meaning: '取り付ける・設置する'},
    {word: 'erroneous', meaning: '誤った・間違った'},
    {word: 'mandate', meaning: '権限・命令'},
    {word: 'still', meaning: 'じっとしている・静止した'},
    {word: 'rigor', meaning: '厳しさ・厳密さ'},
    {word: 'arduously', meaning: '骨を折って・苦労して'},
    {word: 'imposing', meaning: '印象的な・人目を引く・堂々とした'},
    {word: 'inertia', meaning: '慣性・惰性・不活発・ものぐさ'},
    {word: 'texture', meaning: '（布地・皮膚などの）感触'},
    {word: 'imprudent', meaning: '軽率な・思慮の浅い・無分別な'},
    {word: 'perspire', meaning: '発汗する・汗をかく'},
    {word: 'extol', meaning: '褒めそやす・激賞する'},
    {word: 'irreparable', meaning: '（損害・損傷などが）'},
    {word: 'emit', meaning: '（ガス・光・熱などを）発する・放出する'},
    {word: 'withhold', meaning: '差し控える・（'},
    {word: 'dump', meaning: '投棄する・捨てる'},
    {word: 'consent', meaning: '同意・承諾・一致'},
    {word: 'renewal', meaning: '更新・再開・再建'},
    {word: 'expedite', meaning: 'はかどらせる・促進する'},
    {word: 'notorious', meaning: '悪名高い'},
    {word: 'bedrock', meaning: '基盤・基礎・根底'},
    {word: 'pathology', meaning: '病理学'},
    {word: 'scramble', meaning: 'よじ登る・先を争う'},
    {word: 'didactic', meaning: '教訓的な・説教的な'},
    {word: 'forgo', meaning: '控える・なしで済ませる'},
    {word: 'beset', meaning: '悩ませる・つきまとう'},
    {word: 'aesthetic', meaning: '美の・芸術的な'},
    {word: 'susceptible', meaning: '影響を受けやすい・感染しやすい'},
    {word: 'compulsion', meaning: '強制・衝動'},
    {word: 'spectrum', meaning: 'スペクトル・波長・範囲'},
    {word: 'partisan', meaning: '熱心な支持者・同党派'},
    {word: 'hug', meaning: '抱きしめる'},
    {word: 'metabolism', meaning: '新陳代謝・物質代謝'},
    {word: 'frigid', meaning: '極寒の・冷淡な'},
    {word: 'pervasive', meaning: '広がった・浸透する'},
    {word: 'retreat', meaning: '退却する・撤退する'},
    {word: 'doom', meaning: '運命づける'},
    {word: 'apparatus', meaning: '器具・装置'},
    {word: 'erupt', meaning: '噴火する'},
    {word: 'arbitrary', meaning: '独断的な・任意の'},
    {word: 'supplementary', meaning: '追加の・補充的な'},
    {word: 'commitment', meaning: '約束・責任'},
    {word: 'literacy', meaning: '読み書き能力'},
    {word: 'aggravate', meaning: '悪化させる'},
    {word: 'redefine', meaning: '再評価する'},
    {word: 'heed', meaning: '注意を払う'},
    {word: 'apprehend', meaning: '懸念する・恐れる'},
    {word: 'roost', meaning: 'ねぐら・止まる'},
    {word: 'ignite', meaning: '点火する'},
    {word: 'adversary', meaning: '敵・対戦相手'},
    {word: 'denounce', meaning: '公然と非難する'},
    {word: 'particle', meaning: '粒子'},
    {word: 'foe', meaning: '敵'},
    {word: 'abbreviate', meaning: '省略する'},
    {word: 'dilute', meaning: '薄める・弱める'},
    {word: 'jeopardy', meaning: '危険'},
    {word: 'linear', meaning: '線形の'},
    {word: 'counterfeit', meaning: '偽造の'},
    {word: 'repertoire', meaning: 'レパートリー'},
    {word: 'proliferation', meaning: '拡散'},
    {word: 'fingerprint', meaning: '指紋'},
    {word: 'dissolution', meaning: '消滅・解散'},
    {word: 'negligence', meaning: '怠慢・手抜き'},
    {word: 'bankruptcy', meaning: '倒産'},
    {word: 'reminiscence', meaning: '思い出'},
    {word: 'prohibit', meaning: '禁止する'},
    {word: 'liquidate', meaning: '清算する'},
    {word: 'scar', meaning: '傷跡'},
    {word: 'diabetic', meaning: '糖尿病の'},
    {word: 'debris', meaning: 'がれき・破片'},
    {word: 'discriminating', meaning: '識別力のある'},
    {word: 'sympathize', meaning: '同情する'},
    {word: 'plausible', meaning: 'もっともらしい'},
    {word: 'ironic', meaning: '皮肉な'},
    {word: 'tumor', meaning: '腫瘍'},
    {word: 'tedious', meaning: '退屈な'},
    {word: 'placid', meaning: '穏やかな'},
    {word: 'ethnology', meaning: '民族学'},
    {word: 'acclaim', meaning: '賞賛する'},
    {word: 'profound', meaning: '深い・難解な'},
    {word: 'disdain', meaning: '軽蔑する'},
    {word: 'vigor', meaning: '活力・活気'},
    {word: 'treaty', meaning: '条約'},
    {word: 'submit', meaning: '提出する'},
    {word: 'rebut', meaning: '反論する'},
    {word: 'meteorology', meaning: '気象学'},
    {word: 'fortification', meaning: '要塞化'},
    {word: 'discretion', meaning: '裁量・思慮分別'},
    {word: 'wander', meaning: 'ぶらつく'},
    {word: 'impromptu', meaning: '即興の'},
    {word: 'contagious', meaning: '感染性の'},
    {word: 'veterinarian', meaning: '獣医'},
    {word: 'refurbish', meaning: '改装する'},
    {word: 'aggregate', meaning: '集計する'},
    {word: 'elastic', meaning: '弾性の'},
    {word: 'wary', meaning: '用心深い'},
    {word: 'judicious', meaning: '賢明な'},
    {word: 'zinc', meaning: '亜鉛'},
    {word: 'vow', meaning: '誓う'},
    {word: 'converse', meaning: '逆の・会話する'},
    {word: 'strife', meaning: '争い'},
    {word: 'remedy', meaning: '治療・解決策'},
    {word: 'corrupt', meaning: '腐敗した'},
    {word: 'memorialize', meaning: '記念する'},
    {word: 'allocate', meaning: '割り当てる'},
    {word: 'sewer', meaning: '下水道'},
    {word: 'standpoint', meaning: '観点'},
    {word: 'paleontology', meaning: '古生物学'},
    {word: 'haunt', meaning: 'たびたび訪れる'},
    {word: 'compile', meaning: '編纂する'},
    {word: 'uneasy', meaning: '不安な'},
    {word: 'acute', meaning: '鋭い'},
    {word: 'lick', meaning: '舐める'},
    {word: 'censure', meaning: '非難する'},
    {word: 'crude', meaning: '粗野な・未完成の'},
    {word: 'outlet', meaning: '出口'},
    {word: 'relief', meaning: '安心・救済'},
    {word: 'acoustic', meaning: '音響の'},
    {word: 'compel', meaning: '強制する'},
    {word: 'hamper', meaning: '妨害する'},
    {word: 'nocturnal', meaning: '夜行性の'},
    {word: 'amiable', meaning: '愛想の良い'},
    {word: 'reserve', meaning: '蓄える'},
    {word: 'detect', meaning: '検出する'},
    {word: 'abrasive', meaning: '研磨剤の'},
    {word: 'striking', meaning: '著しい'},
    {word: 'deadlock', meaning: '行き詰まり'},
    {word: 'archetype', meaning: '典型例'},
    {word: 'consensus', meaning: '合意'},
    {word: 'frown', meaning: '眉をひそめる'},
    {word: 'blast', meaning: '爆破する'},
    {word: 'intact', meaning: '無傷の'},
    {word: 'cohesive', meaning: '結束力のある'},
    {word: 'acid', meaning: '酸性の'},
    {word: 'bearish', meaning: '弱気の・(熊のように)粗暴な'},
    {word: 'indifferent', meaning: '無関心な・中立の'},
    {word: 'practicable', meaning: '実行可能な・実用的な'},
    {word: 'recession', meaning: '不況・景気後退'},
    {word: 'thatch', meaning: 'わらぶき屋根・屋根ふき材'},
    {word: 'maneuver', meaning: '(車などの)巧みな操縦・作戦行動'},
    {word: 'antipathy', meaning: '嫌悪・反感'},
    {word: 'indigestion', meaning: '消化不良'},
    {word: 'obsess', meaning: '取りつかれる・悩まされる'},
    {word: 'conclusive', meaning: '決定的な・最終的な'},
    {word: 'acquisition', meaning: '獲得・習得'},
    {word: 'armored', meaning: '装甲した'},
    {word: 'condone', meaning: '許す・大目に見る'},
    {word: 'captivity', meaning: '捕らわれの身・監禁・拘留'},
    {word: 'turmoil', meaning: '混乱・動揺'},
    {word: 'languish', meaning: '衰える・やつれる'},
    {word: 'uniformity', meaning: '均一・統一性'},
    {word: 'patriot', meaning: '愛国者'},
    {word: 'constituency', meaning: '(特定の)有権者・選挙区'},
    {word: 'narrative', meaning: '物語・話'},
    {word: 'embed', meaning: '埋め込む・埋める'},
    {word: 'banal', meaning: 'ありふれた・陳腐な'},
    {word: 'contend', meaning: '(困難などと)対処する・争う'},
    {word: 'rigid', meaning: '硬直した・厳格な'},
    {word: 'dissent', meaning: '異議を唱える・不賛成'},
    {word: 'aloof', meaning: '離れて・距離を置いて'},
    {word: 'divorce', meaning: '分離する・離婚する'},
    {word: 'critical', meaning: '批判的な・重大な'},
    {word: 'somber', meaning: '陰気な・憂うつな'},
    {word: 'reminiscent', meaning: '連想させる・追憶の'},
    {word: 'landfill', meaning: 'ごみ埋め立て地'},
    {word: 'expel', meaning: '放出する・排出する'},
    {word: 'sterilize', meaning: '殺菌する・不妊にする'},
    {word: 'leak', meaning: '漏れる・漏洩する'},
    {word: 'apprehension', meaning: '懸念・不安・恐れ'},
    {word: 'reclaimed land', meaning: '埋め立て地・開墾地'},
    {word: 'disposal', meaning: '処分・処理・配置'},
    {word: 'mating season', meaning: '繁殖期・交尾期'},
    {word: 'corrosive', meaning: '腐食性の・侵食する'},
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
