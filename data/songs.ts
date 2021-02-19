import { Time } from '../lib/time'

export type Monsters = 'Pikamee' | 'Tomoshika' | 'Monoe'
export type Utawaku = {
  number: number
  kind: Monsters
  songs: {
    artist: string
    timeStart: number | Time
    songName: string
  }[]
  id: string
}

export const songs: Utawaku[] = [
  {
    kind: 'Monoe',
    number: 1,
    id: 'eoqcL7-iRbc',
    songs: [
      {
        artist: '須田景凪(バルーン)',
        songName: 'シャルル',
        timeStart: 520,
      },
      {
        artist: '柊キライ',
        songName: 'エバ',
        timeStart: 974,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（一回目）',
        timeStart: 1663,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（二回目）',
        timeStart: 2117,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（三回目）',
        timeStart: 2226,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（四回目）',
        timeStart: 2333,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（五回目）',
        timeStart: 2563,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（六回目）',
        timeStart: 2672,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（七回目）',
        timeStart: 2865,
      },
      {
        artist: 'ナユタン星人',
        songName: '太陽系デスコ',
        timeStart: 3137,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 2,
    id: 'lXGom5pjK6Q',
    songs: [
      {
        artist: 'みきとP',
        songName: '少女レイ',
        timeStart: 260,
      },
      {
        artist: 'みきとP',
        songName: 'ロキ',
        timeStart: 995,
      },
      {
        artist: 'WOWAKA',
        songName: '裏表ラバーズ',
        timeStart: 1772,
      },
      {
        artist: 'Ayase',
        songName: 'シニカルナイトプラン',
        timeStart: 2724,
      },
      {
        artist: 'カラスヤサボウ',
        songName: '天才ロック',
        timeStart: 2226,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 3,
    id: 'oY37CTruDXk',
    songs: [
      {
        artist: 'syoudou',
        songName: '孤独の宗教',
        timeStart: 352,
      },
      {
        artist: '柊キライ',
        songName: 'ポッカデラベリタ',
        timeStart: 828,
      },
      {
        artist: 'ギガP',
        songName: '劣等上等',
        timeStart: 1481,
      },
      {
        artist: 'Eight',
        songName: 'とても素敵な六月でした',
        timeStart: 3370,
      },
      {
        artist: 'minato',
        songName: 'magnet',
        timeStart: 3978,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 4,
    id: 'JmHY5OqfRVI',
    songs: [
      {
        artist: 'ナユタン星人',
        songName: '彗星ハネムーン',
        timeStart: 145,
      },
      {
        artist: 'DIVELA',
        songName: 'ぼかろころしあむ',
        timeStart: 985,
      },
      {
        artist: '薄塩指数',
        songName: 'つらい！やばい！つらい！',
        timeStart: 1385,
      },
      {
        artist: 'すりぃ',
        songName: 'テレキャスタービーボーイ',
        timeStart: 3570,
      },
      {
        artist: 'Last Note.',
        songName: 'セツナトリップ',
        timeStart: 4480,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 5,
    id: '1OOjOPvxt28',
    songs: [
      {
        artist: 'すりぃ',
        songName: 'ジャンキーナイトタウンオーケストラ',
        timeStart: 176,
      },
      {
        artist: 'カンザキイオリ',
        songName: '命に嫌われている',
        timeStart: 780,
      },
      {
        artist: 'Ayase',
        songName: '幽霊東京',
        timeStart: 1724,
      },
      {
        artist: 'Junky',
        songName: 'メランコリック',
        timeStart: 3140,
      },
      {
        artist: 'てにをは',
        songName: 'ヴィラン',
        timeStart: 3724,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 6,
    id: 'ZiX7PXiLNKI',
    songs: [
      {
        artist: 'すりぃ',
        songName: '右に曲ガール',
        timeStart: 290,
      },
      {
        artist: 'YOASOBI',
        songName: 'ハルジオン',
        timeStart: 696,
      },
      {
        artist: 'ニュー速VIP作曲スレ',
        songName: 'RAINBOW GIRL',
        timeStart: 1054,
      },
      {
        artist: 'かいりきベア',
        songName: 'ルマ',
        timeStart: 1344,
      },
      {
        artist: 'まふまふ',
        songName: '猛独が襲う',
        timeStart: 1732,
      },
      {
        artist: 'koyori',
        songName: '独りんぼエンヴィー',
        timeStart: 1971,
      },
      {
        artist: 'いきものがかり',
        songName: 'ブルーバード',
        timeStart: 2794,
      },
      {
        artist: 'きくお',
        songName: '愛して愛して愛して',
        timeStart: 3195,
      },
      {
        artist: 'みきとP',
        songName: 'バレリーコ',
        timeStart: 3620,
      },
      {
        artist: 'n-buna',
        songName: '夜明けと蛍',
        timeStart: 4290,
      },
      {
        artist: 'ナナホシ管弦楽団',
        songName: '失楽ペトリ',
        timeStart: 4743,
      },
      {
        artist: 'syudou',
        songName: 'ビターチョコデコレーション',
        timeStart: 5127,
      },
      {
        artist: '日向電工',
        songName: 'ブリキノダンス',
        timeStart: 5395,
      },
      {
        artist: 'DIVELA',
        songName: 'ぼかろころしあむ',
        timeStart: 5730,
      },
      {
        artist: 'King Gnu',
        songName: '白日',
        timeStart: 5992,
      },
      {
        artist: '一二三',
        songName: '美しく闇',
        timeStart: 6740,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 7,
    id: 'YEOfo3_MGCA',
    songs: [
      {
        artist: 'まふまふ',
        songName: '女の子になりたい',
        timeStart: 374,
      },
      {
        artist: '女の子になりたい',
        songName: '愛欲のプリズナー',
        timeStart: 1486,
      },
      {
        artist: '米津玄師',
        songName: 'Lemon',
        timeStart: 2058,
      },
      {
        artist: '亜沙',
        songName: '吉原ラメント',
        timeStart: 2645,
      },
      {
        artist: 'IOSYS',
        songName: 'チルノのパーフェクトさんすう教室',
        timeStart: 3146,
      },
      {
        artist: 'しも',
        songName: 'ニコニコ動画流星群',
        timeStart: 3925,
      },
      {
        artist: 'syudou',
        songName: 'コールボーイ',
        timeStart: 5353,
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 8,
    id: 'n_DdqP65APY',
    songs: [
      {
        artist: '瑛人',
        songName: '香水',
        timeStart: '9:06',
      },
      {
        artist: '蝶々P',
        songName: '心做し',
        timeStart: '20:00',
      },
      {
        artist: 'yama',
        songName: '春を告げる',
        timeStart: '32:34',
      },
      {
        artist: 'Oragestar',
        songName: 'Alice in 冷凍庫',
        timeStart: '39:53',
      },
      {
        artist: '獅子志司',
        songName: '絶え間なく藍色',
        timeStart: '59:03',
      },
      {
        artist: '天野月',
        songName: '聲',
        timeStart: '1:25:48',
      },
      {
        artist: 'コメダワラ',
        songName: '自堕落',
        timeStart: '1:25:48',
      },
      {
        artist: 'ハチ',
        songName: 'リンネ',
        timeStart: '1:39:01',
      },
      {
        artist: 'R Sound Design',
        songName: 'flos',
        timeStart: '1:52:34',
      },
    ],
  },

  {
    kind: 'Monoe',
    number: 9,
    id: '9dhfkxdFTvA',
    songs: [
      {
        artist: 'n-buna',
        songName: '夜明けと蛍',
        timeStart: '4:05',
      },
      {
        artist: 'YOASOBI',
        songName: 'たぶん',
        timeStart: '15:28',
      },
      {
        artist: 'ギガP',
        songName: 'ヒビカセ',
        timeStart: '24:20',
      },
      {
        artist: 'mothy',
        songName: '悪ノ召使',
        timeStart: '37:20',
      },
      {
        artist: '米津玄師',
        songName: '感電',
        timeStart: '57:47',
      },
      {
        artist: 'koyori',
        songName: 'スキスキ絶頂症',
        timeStart: '1:06:07',
      },
      {
        artist: 'ゆうゆ',
        songName: '天樂',
        timeStart: '1:17:04',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 10,
    id: 'cT-xRwAlfVg',
    songs: [
      {
        artist: 'ササノマリイ',
        songName: '自傷無色(アカペラ)',
        timeStart: '7:38',
      },
      {
        artist: 'ササノマリイ',
        songName: '自傷無色',
        timeStart: '8:18',
      },
      {
        artist: 'DECO*27',
        songName: '乙女解剖',
        timeStart: '18:42',
      },
      {
        artist: 'Kanaria',
        songName: 'KING',
        timeStart: '29:08',
      },
      {
        artist: 'mothy',
        songName: '比較症候群',
        timeStart: '39:01',
      },
      {
        artist: 'youまん',
        songName: 'タイニーバニー',
        timeStart: '54:20',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 11,
    id: 'YpJLwq4aFDg',
    songs: [
      {
        artist: 'スペクタクルP',
        songName: 'The Beast',
        timeStart: '6:44',
      },
      {
        artist: '蝶々P',
        songName: 'え？あぁ、そう。',
        timeStart: '14:07',
      },
      {
        artist: '羽生まゐご',
        songName: '阿吽のビーツ',
        timeStart: '24:59',
      },
      {
        artist: 'トーマ',
        songName: 'アザレアの亡霊',
        timeStart: '33:13',
      },
      {
        artist: '奏音69',
        songName: 'クイーンオブハート',
        timeStart: '42:12',
      },
      {
        artist: '女王蜂',
        songName: 'BL',
        timeStart: '50:50',
      },
      {
        artist: '女王蜂',
        songName: '火炎',
        timeStart: '57:28',
      },
      {
        artist: 'ツユ',
        songName: 'あの世行きのバスに乗ってさらば。',
        timeStart: '1:07:44',
      },
      {
        artist: 'niki',
        songName: '-ERROR。',
        timeStart: '1:18:36',
      },
      {
        artist: '須田景凪',
        songName: 'あの世行きのバスに乗ってさらば。',
        timeStart: '1:27:19',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 12,
    id: 'y5tBMJsaRj8',
    songs: [
      {
        artist: 'P.I.N.A.',
        songName: 'レッド・パージ！！！',
        timeStart: '8:40',
      },
      {
        artist: 'Ayase',
        songName: '幽霊東京',
        timeStart: '24:46',
      },
      {
        artist: 'SEVENTHLINKS',
        songName: 'p.h',
        timeStart: '32:57',
      },
      {
        artist: 'DIVELA',
        songName: 'ぼかろころしあむ',
        timeStart: '38:55',
      },
      {
        artist: 'DIVELA',
        songName: 'ぼかろころしあむ（リベンジのリベンジ）',
        timeStart: '39:51',
      },
      {
        artist: 'かいりきベア',
        songName: 'ダーリンダンス',
        timeStart: '44:13',
      },
      {
        artist: '須田景凪',
        songName: '花瓶に触れた',
        timeStart: '59:26',
      },
      {
        artist: 'supercell',
        songName: 'ブラック★ロックシューター',
        timeStart: '1:08:52',
      },
      {
        artist: 'ツユ',
        songName: 'あの世行きのバスに乗ってさらば。',
        timeStart: '1:07:44',
      },
      {
        artist: 'niki',
        songName: '-ERROR。',
        timeStart: '1:18:36',
      },
      {
        artist: '須田景凪',
        songName: 'あの世行きのバスに乗ってさらば。',
        timeStart: '1:27:19',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 13,
    id: 'VGlckLlEVzs',
    songs: [
      {
        artist: 'ねこぼーろ',
        songName: '共感性おばけ',
        timeStart: '4:50',
      },
      {
        artist: 'バルーン',
        songName: 'シャルル',
        timeStart: '14:17',
      },
      {
        artist: 'Halosy',
        songName: 'Fire◎Flower',
        timeStart: '26:16',
      },
      {
        artist: 'かいりきベア',
        songName: 'ネロイズム',
        timeStart: '32:05',
      },
      {
        artist: 'ぬゆり',
        songName: 'プロトディスコ',
        timeStart: '37:50',
      },
      {
        artist: '奥華子',
        songName: '変わらないもの',
        timeStart: '47:29',
      },
      {
        artist: 'LiSA',
        songName: '紅蓮華',
        timeStart: '56:47',
      },
      {
        artist: 'YOASOBI',
        songName: 'ハルジオン',
        timeStart: '1:01:44',
      },
      {
        artist: 'ONE OK ROCK',
        songName: '完全感覚Dreamer',
        timeStart: '1:13:40',
      },
      {
        artist: 'こじろー',
        songName: '臨海ダイバー',
        timeStart: '1:21:20',
      },
      {
        artist: 'かいりきベア',
        songName: 'ベノム',
        timeStart: '1:37:45',
      },
      {
        artist: 'ねじ式',
        songName: 'パライソ・パライソ',
        timeStart: '1:45:13',
      },
      {
        artist: 'ろくろ',
        songName: 'スロウダウナー',
        timeStart: '1:51:04',
      },
      {
        artist: 'みきとP',
        songName: '小夜子',
        timeStart: '1:59:34',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 14,
    id: '_N3FRnfFP_M',
    songs: [
      {
        artist: 'カラスヤサボウ',
        songName: '天才ロック',
        timeStart: '7:00',
      },
      {
        artist: 'Junky',
        songName: 'Happy Halloween',
        timeStart: '14:44',
      },
      {
        artist: 'Kanaria',
        songName: 'ヒトリユラリ',
        timeStart: '27:10',
      },
      {
        artist: 'オーイシマサヨシ',
        songName: 'ようこそジャパリパークへ',
        timeStart: '35:31',
      },
      {
        artist: 'ぬゆり',
        songName: 'プロトディスコ',
        timeStart: '37:50',
      },
      {
        artist: 'Ado',
        songName: 'うっせぇわ',
        timeStart: '50:52',
      },
      {
        artist: 'メル',
        songName: 'さようなら、花泥棒さん',
        timeStart: '58:59',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 15,
    id: 'N80fSWaErXs',
    songs: [
      {
        artist: 'ぬゆり',
        songName: 'Hollow Sleep',
        timeStart: '6:47',
      },
      {
        artist: '-',
        songName: 'ハッピーバースデートゥーユー',
        timeStart: '11:46',
      },
      {
        artist: 'YOASOBI',
        songName: '群青',
        timeStart: '13:37',
      },
      {
        artist: 'メル',
        songName: '翡翠のまち',
        timeStart: '19:57',
      },
      {
        artist: 'DECO*27',
        songName: 'モザイクロール',
        timeStart: '27:20',
      },
      {
        artist: 'ずっと真夜中でいいのに',
        songName: 'お勉強しといてよ',
        timeStart: '33:34',
      },
      {
        artist: '卯花ロク',
        songName: '雁首、そろえてご機嫌よう',
        timeStart: '40:21',
      },
      {
        artist: 'MARETU',
        songName: 'マインドブランド',
        timeStart: '45:13',
      },
      {
        artist: 'Neru',
        songName: 'potatoになっていく',
        timeStart: '52:09',
      },
      {
        artist: 'まふまふ',
        songName: 'イカサマダンス',
        timeStart: '1:06:32',
      },
      {
        artist: 'Kanaria',
        songName: 'KING',
        timeStart: '1:12:50',
      },
      {
        artist: 'syudou',
        songName: '邪魔',
        timeStart: '1:20:54',
      },
      {
        artist: 'x0o0x_',
        songName: '　　　',
        timeStart: '1:26:23',
      },
      {
        artist: 'DATEKEN',
        songName: 'ワンルーム・オール・ザット・ジャズ',
        timeStart: '1:30:27',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 16,
    id: 'dKTVxHLEX74',
    songs: [
      {
        artist: 'DECO*27',
        songName: 'ヒバナ',
        timeStart: '6:38',
      },
      {
        artist: 'みきとP',
        songName: '心臓デモクラシー',
        timeStart: '16:43',
      },
      {
        artist: 'Chinozo',
        songName: 'グッバイ宣言',
        timeStart: '29:46',
      },
      {
        artist: '糞田舎P',
        songName: 'ネコミミアーカイブ',
        timeStart: '41:15',
      },
      {
        artist: '石風呂',
        songName: 'ゆるふわ樹海ガール',
        timeStart: '54:32',
      },
      {
        artist: '柊キライ',
        songName: 'メビウス',
        timeStart: '59:02',
      },
      {
        artist: 'ナナホシ管弦楽団',
        songName: '抜錨',
        timeStart: '1:03:59',
      },
      {
        artist: '椎名もた',
        songName: 'ササメク',
        timeStart: '1:14:35',
      },
      {
        artist: 'Vaundy',
        songName: '不可幸力',
        timeStart: '1:18:03',
      },
      {
        artist: '水樹奈々×T.M.Revolution',
        songName: '革命デュアリズム',
        timeStart: '1:29:44',
      },
      {
        artist: '煮ル果実',
        songName: '紗痲',
        timeStart: '1:36:54',
      },
      {
        artist: '真島ゆろ',
        songName: 'チチンプイプイ',
        timeStart: '1:43:50',
      },
      {
        artist: 'ナナホシ管弦楽団',
        songName: 'デリヘル呼んだら君が来た',
        timeStart: '1:47:37',
      },
      {
        artist: 'ナポリP',
        songName: '嗤うマネキン',
        timeStart: '1:56:07',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 17,
    id: 'ldVo_0F3yMY',
    songs: [
      {
        artist: 'YOASOBI',
        songName: '夜に駆ける',
        timeStart: '4:33',
      },
      {
        artist: '米津玄師',
        songName: '春雷',
        timeStart: '18:27',
      },
      {
        artist: 'クリスマス？なにそれ？美味しいの？',
        songName: 'ヒャダイン',
        timeStart: '26:42',
      },
      {
        artist: 'きくお',
        songName: 'しかばねの踊り',
        timeStart: '32:19',
      },
      {
        artist: '愛を伝えたいだとか',
        songName: 'あいみょん',
        timeStart: '37:38',
      },
      {
        artist: '誰でもいいから付き合いたい',
        songName: '卓球少年',
        timeStart: '44:18',
      },
      {
        artist: 'てにをは',
        songName: 'ヴィラン',
        timeStart: '48:04',
      },
      {
        artist: '真島ゆろ',
        songName: 'チチンプイプイ',
        timeStart: '53:30',
      },
      {
        artist: 'マイキP',
        songName: 'バケモノ信者',
        timeStart: '1:01:12',
      },
      {
        artist: 'ナナヲアカリ',
        songName: 'ダダダダ天使',
        timeStart: '1:05:42',
      },
      {
        artist: 'ぬゆり',
        songName: 'フィクサー',
        timeStart: '1:14:14',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 18,
    id: '82Arvle69v4',
    songs: [
      {
        artist: 'Kanaria',
        songName: '百鬼祭',
        timeStart: '8:14',
      },
      {
        artist: 'アド',
        songName: 'レディメイド',
        timeStart: '16:38',
      },
      {
        artist: 'ナナヲアカリ feat.Sou',
        songName: 'チューリングラブ',
        timeStart: '25:16',
      },
      {
        artist: 'WOWAKA',
        songName: 'アンノウンマザーグース',
        timeStart: '31:10',
      },
      {
        artist: 'すりぃ',
        songName: 'テレキャスタービーボーイ',
        timeStart: '40:02',
      },
      {
        artist: '石川さゆり',
        songName: '津軽海峡・冬景色',
        timeStart: '56:11',
      },
      {
        artist: '柊キライ',
        songName: 'ラブカ？',
        timeStart: '1:10:42',
      },
      {
        artist: 'WOWAKA',
        songName: 'ローリンガール',
        timeStart: '1:16:36',
      },
      {
        artist: '運命のルーレット廻して',
        songName: 'ZARD',
        timeStart: '1:34:28',
      },
      {
        artist: 'サスケ',
        songName: '青いベンチ',
        timeStart: '1:38:50',
      },
      {
        artist: 'DECO*27',
        songName: '脱獄',
        timeStart: '1:46:36',
      },
      {
        artist: '絢香',
        songName: '三日月',
        timeStart: '1:51:35',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 19,
    id: 'vPKnDLnoHOY',
    songs: [
      {
        artist: 'アンジェラ・アキ',
        songName: '手紙〜拝啓一五の君へ〜',
        timeStart: '33:58',
      },
      {
        artist: 'いきものがかり',
        songName: 'YELL',
        timeStart: '45:55',
      },
      {
        artist: '時代',
        songName: '中島みゆき',
        timeStart: '1:16:27',
      },
      {
        artist: '嵐',
        songName: 'Monster',
        timeStart: '1:24:35',
      },
      {
        artist: 'GReeeeN',
        songName: 'キセキ',
        timeStart: '1:44:44',
      },
      {
        artist: 'BUMP OF CHICKEN',
        songName: '天体観測',
        timeStart: '1:44:44',
      },
      {
        artist: 'RADWIMPS',
        songName: 'DADA',
        timeStart: '1:59:30',
      },
      {
        artist: 'ポルノグラフィティ',
        songName: 'アポロ',
        timeStart: '2:04:43',
      },
      {
        artist: 'AKB48',
        songName: 'ヘビーローテーション',
        timeStart: '2:14:59',
      },
      {
        artist: '米津玄師',
        songName: 'vivi',
        timeStart: '2:24:14',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 20,
    id: 'hD3aaUvjiBg',
    songs: [
      {
        artist: '想太',
        songName: 'いかないで',
        timeStart: '11:05',
      },
      {
        artist: 'IchiokuenP',
        songName: 'chocolate box',
        timeStart: '26:08',
      },
      {
        artist: '勇魚',
        songName: 'メンヘラじゃないもん！',
        timeStart: '35:08',
      },
      {
        artist: 'メガナガメ',
        songName: 'その電車、中津止まりにつき',
        timeStart: '46:51',
      },
      {
        artist: 'YOASOBI',
        songName: '怪物',
        timeStart: '1:44:44',
      },
      {
        artist: 'DECO*27',
        songName: '病名は愛だった',
        timeStart: '1:14:06',
      },
      {
        artist: 'r-906',
        songName: 'パノプティコン',
        timeStart: '1:19:26',
      },
      {
        artist: 'R Sound Design',
        songName: 'flos',
        timeStart: '1:26:47',
      },
      {
        artist: '高橋洋子',
        songName: '残酷な天使のテーゼ',
        timeStart: '1:36:25',
      },
      {
        artist: 'とあ',
        songName: 'ツギハギスタッカート',
        timeStart: '1:56:44',
      },
      {
        artist: 'ナナホシ管弦楽団',
        songName: '失楽ペトリ',
        timeStart: '2:04:00',
      },
      {
        artist: 'boomman',
        songName: 'ウオノエガール',
        timeStart: '2:11:13',
      },
      {
        artist: 'クワガタP',
        songName: 'インタビュア',
        timeStart: '2:18:19',
      },
    ],
  },
  {
    kind: 'Monoe',
    number: 21,
    id: 'ibOJEDKBOHQ',
    songs: [
      {
        artist: 'Kanaria',
        songName: 'エンヴィーベイビー',
        timeStart: '12:02',
      },
      {
        artist: 'まふまふ×かいりきベア',
        songName: 'マオ（アカペラ）',
        timeStart: '19:33',
      },
      {
        artist: 'まふまふ×かいりきベア',
        songName: 'マオ',
        timeStart: '21:51',
      },
      {
        artist: 'かいりきベア',
        songName: 'ルマ',
        timeStart: '40:35',
      },
      {
        artist: 'YOASOBI',
        songName: 'ブリキノダンス',
        timeStart: '40:35',
      },
      {
        artist: 'DECO*27',
        songName: '乙女解剖',
        timeStart: '1:14:06',
      },
      {
        artist: 'とあ',
        songName: 'ミュージックミュージック',
        timeStart: '1:15:14',
      },
      {
        artist: 'Omoi',
        songName: '君が飛び降りるのなら',
        timeStart: '1:20:14',
      },
      {
        artist: 'ギガP',
        songName: '劣等上等',
        timeStart: '1:26:21',
      },
      {
        artist: 'Eve',
        songName: '廻廻奇譚',
        timeStart: '1:42:15',
      },
      {
        artist: 'mothy',
        songName: '比較症候群',
        timeStart: '1:56:27',
      },
    ],
  },
]
