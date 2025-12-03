import { Phrase, MenuItem, ManualSection } from './types';

// New: Basic Restaurant Rules & Etiquette
export const BASIC_RULES: ManualSection[] = [
  {
    id: 'appearance',
    title: '身だしなみ・準備',
    content: [
      '制服：清潔に保つ。エプロンの紐は綺麗に結ぶ。',
      '髪型：長い髪は結ぶ。前髪が目にかからないように。',
      '爪：短く切る。ネイルは派手なものはNG。',
      '手洗い：出勤時、トイレ後、バッシング後は必ずアルコール消毒。'
    ]
  },
  {
    id: 'aisatsu_staff',
    title: '出退勤・挨拶（重要）',
    content: [
      '出勤時：「おはようございます！」（夜でも業界用語で「おはようございます」を使います）',
      '退勤時：「お先に失礼します。お疲れ様でした！」',
      'すれ違い時：「お疲れ様です！」と元気よく声をかけ合う。',
      '入店時：「いらっしゃいませ！」と全員で声を合わせる（活気作り）。'
    ]
  }
];

// Extracted from Page 1 & 2 & 6
export const SERVICE_FLOW: ManualSection[] = [
  {
    id: 'entry',
    title: 'ご案内・お出迎え',
    content: [
      '予約確認：名前、時間、2-3分で飲み物が出せるか確認。',
      '飛び込み（未予約）：空いている席へご案内。「確認して参ります」とワンクッション置くと丁寧。',
      '外国人・子供：お通しは不要です。',
      '敬語：「いらっしゃいませ。本日はご予約いただいておりますか？」'
    ]
  },
  {
    id: 'serving',
    title: '配膳・バッシング',
    content: [
      '忙しい時期：お料理優先、バッシング（片付け）も意識。',
      'トレー：皿やコップのバランスに注意。体に近い方にお皿、遠くにグラスなどを置くと安定する。',
      'ドリンク：数量と種類を必ずチェックしてから運ぶ。',
      'バッシング順序：お皿 → 鍋（コンロを消す）→ ゴミ',
      '中間バッシング：空いたお皿はこまめに下げる（「お下げしてもよろしいでしょうか」と声かけ）。'
    ]
  },
  {
    id: 'nabe_service',
    title: 'お鍋の提供',
    content: [
      '出し方：お客様の邪魔にならない位置へ。熱いので注意喚起。',
      '説明：位置と味を説明する。「火をおつけします」と声をかける。',
      '食べ頃：「お肉に火が通りましたら、召し上がりください」',
      '薬味：もつ鍋には柚子胡椒をお好みで。'
    ]
  },
  {
    id: 'closing',
    title: '締め・お会計',
    content: [
      '締め確認：鍋の具が残り1〜2個になったら聞く。',
      '種類：ちゃんぽん、うどん、雑炊セット。',
      '雑炊：お出しはいらない（スープが残っていれば）。',
      'ラストオーダー：フード 21:00統一。',
      '会計：テーブル会計 または レジにて。'
    ]
  }
];

// Extracted from Page 1, 2, 3
export const MENU_ITEMS: Record<string, MenuItem[]> = {
  nabe: [
    { name: 'もつ鍋', description: '柚子胡椒付き。当店看板メニュー。', tags: ['定番', '柚子胡椒'] },
    { name: '二色鍋', description: '最大4人前。みそ、醤油、ネギ塩、ネギしゃぶから2種選択', tags: ['人気', '4人まで'] },
    { name: '水炊き鍋', description: '万能ねぎ、塩、水ポンプ、鉄桶を使用。博多名物。' }
  ],
  sides: [
    { name: '餃子', description: '人数分のタレ皿を用意（しょうゆ）。' },
    { name: '枝豆', description: '殻入れ（とり皿）を必ずセットで出す。' },
    { name: '茶碗蒸し', description: '小スプーン付き。熱いので注意。' },
    { name: '自家製豆腐', description: '小スプーン付き。' },
    { name: '馬刺し五種盛り', description: '専用醤油付き。薬味（生姜・ニンニク）の説明。' }
  ],
  dessert: [
    { name: 'かぼちゃのぷりん', tags: ['小スプーン'] },
    { name: 'カタラーナ', tags: ['小スプーン'] },
    { name: 'ソルベ', tags: ['小スプーン'] }
  ],
  drinks: [
    { name: '角ハイボール', description: 'ソーダ割り。レモンあり/なし確認。' },
    { name: '芋焼酎（島美人）', description: '鹿児島。定番の芋焼酎。' },
    { name: '大隅（おおすみ）', description: '芋焼酎。香りが高い。' },
    { name: '伊佐小町', description: '芋焼酎。いざこまち。' },
    { name: 'レモンサワー', description: 'ソーダ割り。' },
    { name: '日本酒', description: '冷酒（れいしゅ） or 熱燗（あつかん）。徳利とお猪口を用意。' }
  ]
};

// Extracted from Page 5 & 6 + Standard Japanese Service Phrases
export const CUSTOMER_PHRASES: Phrase[] = [
  {
    situation: '来店時 (Greeting)',
    script: 'いらっしゃいませ。本日はご予約いただいておりますか？',
    note: '予約ありの場合：○○様ですね。ありがとうございます。'
  },
  {
    situation: '席への案内 (Seating)',
    script: 'お席のご案内をいたします。こちらへどうぞ。お荷物は椅子の下にお入れくださいませ。',
    note: '手で方向を示しながら案内する。'
  },
  {
    situation: 'ファーストドリンク (First Drink)',
    script: 'まずお飲み物からお伺いしてもよろしいでしょうか。',
    note: 'お決まりになりましたらお呼びくださいませ。'
  },
  {
    situation: 'ドリンク提供 (Serving Drinks)',
    script: 'お待たせいたしました、○○でございます。こちら、グラスお下げしてもよろしいでしょうか。'
  },
  {
    situation: '料理提供 (Serving Food)',
    script: '失礼いたします。こちら○○でございます。熱いのでお気をつけください。',
    note: '空いたお皿があれば「こちらお下げしますね」と一声かける。'
  },
  {
    situation: '鍋の提供 (Serving Nabe)',
    script: 'お待たせいたしました、もつ鍋でございます。上ににらがのっております。コンロをお付けいたしますね。',
    note: '「お肉に火が通りましたら、召し上がりくださいませ」'
  },
  {
    situation: 'ラストオーダー (Last Order)',
    script: '恐れ入りますが、ただいまラストオーダーのお時間となっております。お料理の追加注文はよろしいでしょうか？',
    note: 'フードLOは 21:00'
  },
  {
    situation: 'お会計 (Check)',
    script: '以上でお会計よろしいでしょうか。お会計はお席でお願いいたします（またはレジにて）。',
    note: 'ありがとうございました。またのご来店をお待ちしております。'
  }
];

export const STAFF_PHRASES: Phrase[] = [
  {
    situation: '出勤時 (Start Shift)',
    script: 'おはようございます！本日もよろしくお願いします。',
    note: '元気に、キッチン・ホール全員に聞こえるように。'
  },
  {
    situation: '退勤時 (End Shift)',
    script: 'お先に失礼します。お疲れ様でした！',
    note: '着替えた後、店を出る際も挨拶を忘れずに。'
  },
  {
    situation: '休憩に入る時 (Break)',
    script: '休憩いただきます。',
    note: '戻った時は「休憩戻りました！」'
  },
  {
    situation: '指示を受けた時 (Acknowledge)',
    script: 'はい！ありがとうございます。',
    note: '「分かりました」より「はい」が基本。'
  },
  {
    situation: 'お客様が来店した時 (Incoming)',
    script: 'いらっしゃいませー！',
    note: '他のスタッフの声に続いて連呼する（やまびこ挨拶）。'
  }
];

export const SYSTEM_INSTRUCTION = `
You are a friendly and experienced restaurant trainer (Senpai) for a "Motsu Nabe" (Offal Hotpot) restaurant.
Your goal is to help new part-time staff understand the manual and Japanese hospitality (Omotenashi).
Use the following context from the store manual to answer questions.
Be polite, encouraging, and clear. If the information is not in the manual, say you don't know but suggest asking the manager.

MANUAL CONTEXT:
Basic Rules: ${JSON.stringify(BASIC_RULES)}
Service Flow: ${JSON.stringify(SERVICE_FLOW)}
Menu Items: ${JSON.stringify(MENU_ITEMS)}
Customer Phrases: ${JSON.stringify(CUSTOMER_PHRASES)}
Staff Phrases: ${JSON.stringify(STAFF_PHRASES)}

Additional Rules from Manual:
- Two-color pot (Nishoku Nabe) can serve up to 4 people. Flavors: Miso, Shoyu, Negi-shio, Negi-shabu.
- Gion Course does not come with Otoshi (appetizer).
- For Mizutaki: Use green onions, salt, water pump, and iron bucket.
- Time card flow: Change clothes -> Clock In -> Work -> Clock Out -> Change clothes.
- Drink check: Shochu (Water/Rock/Soda?), Plum wine (Rock/Water/Soda?), Highball (Soda).
- "Osumi" is a type of potato shochu (Imo Shochu). "Shima Bijin" is also Imo Shochu.
- Last order for food is 21:00.

Style Guide:
- Use emojis occasionally to be friendly 🍲✨
- Emphasize "Greeting" (Aisatsu) as it is the most important part of working in a Japanese restaurant.
`;