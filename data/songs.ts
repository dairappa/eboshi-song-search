import {Time} from "../lib/time";

export type Monsters = 'Pikamee' | 'Tomoshika' | 'Monoe'
export type Utawaku = {
    number: number;
    kind: Monsters;
    songs: {
        artist: string;
        time_start: number | Time
        song_name: string
    }[];
    id: string
}

export const songs: Utawaku[] = [
    {
        kind: 'Monoe',
        number: 1,
        id: 'eoqcL7-iRbc',
        songs: [
            {
                'artist': '須田景凪(バルーン)',
                'song_name': 'シャルル',
                'time_start': 520
            },
            {
                'artist': '柊キライ',
                'song_name': 'エバ',
                'time_start': 974
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（一回目）',
                'time_start': 1663
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（二回目）',
                'time_start': 2117
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（三回目）',
                'time_start': 2226
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（四回目）',
                'time_start': 2333
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（五回目）',
                'time_start': 2563
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（六回目）',
                'time_start': 2672
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（七回目）',
                'time_start': 2865
            },
            {
                'artist': 'ナユタン星人',
                'song_name': '太陽系デスコ',
                'time_start': 3137
            },
        ]
    },
    {
        kind: 'Monoe',
        number: 2,
        id: 'lXGom5pjK6Q',
        songs: [
            {
                'artist': 'みきとP',
                'song_name': '少女レイ',
                'time_start': 260
            },
            {
                'artist': 'みきとP',
                'song_name': 'ロキ',
                'time_start': 995
            },
            {
                'artist': 'WOWAKA',
                'song_name': '裏表ラバーズ',
                'time_start': 1772
            },
            {
                'artist': 'Ayase',
                'song_name': 'シニカルナイトプラン',
                'time_start': 2724
            },
            {
                'artist': 'カラスヤサボウ',
                'song_name': '天才ロック',
                'time_start': 2226
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 3,
        id: 'oY37CTruDXk',
        songs: [
            {
                'artist': 'syoudou',
                'song_name': '孤独の宗教',
                'time_start': 352
            },
            {
                'artist': '柊キライ',
                'song_name': 'ポッカデラベリタ',
                'time_start': 828
            },
            {
                'artist': 'ギガP',
                'song_name': '劣等上等',
                'time_start': 1481
            },
            {
                'artist': 'Eight',
                'song_name': 'とても素敵な六月でした',
                'time_start': 3370
            },
            {
                'artist': 'minato',
                'song_name': 'magnet',
                'time_start': 3978
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 4,
        id: 'JmHY5OqfRVI',
        songs: [
            {
                'artist': 'ナユタン星人',
                'song_name': '彗星ハネムーン',
                'time_start': 145
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ',
                'time_start': 985
            },
            {
                'artist': '薄塩指数',
                'song_name': 'つらい！やばい！つらい！',
                'time_start': 1385
            },
            {
                'artist': 'すりぃ',
                'song_name': 'テレキャスタービーボーイ',
                'time_start': 3570
            },
            {
                'artist': 'Last Note.',
                'song_name': 'セツナトリップ',
                'time_start': 4480
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 5,
        id: '1OOjOPvxt28',
        songs: [
            {
                'artist': 'すりぃ',
                'song_name': 'ジャンキーナイトタウンオーケストラ',
                'time_start': 176
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている',
                'time_start': 780
            },
            {
                'artist': 'Ayase',
                'song_name': '幽霊東京',
                'time_start': 1724
            },
            {
                'artist': 'Junky',
                'song_name': 'メランコリック',
                'time_start': 3140
            },
            {
                'artist': 'てにをは',
                'song_name': 'ヴィラン',
                'time_start': 3724
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 6,
        id: 'ZiX7PXiLNKI',
        songs: [
            {
                'artist': 'すりぃ',
                'song_name': '右に曲ガール',
                'time_start': 290
            },
            {
                'artist': 'YOASOBI',
                'song_name': 'ハルジオン',
                'time_start': 696
            },
            {
                'artist': 'ニュー速VIP作曲スレ',
                'song_name': 'RAINBOW GIRL',
                'time_start': 1054
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ルマ',
                'time_start': 1344
            },
            {
                'artist': 'まふまふ',
                'song_name': '猛独が襲う',
                'time_start': 1732
            },
            {
                'artist': 'koyori',
                'song_name': '独りんぼエンヴィー',
                'time_start': 1971
            },
            {
                'artist': 'いきものがかり',
                'song_name': 'ブルーバード',
                'time_start': 2794
            },
            {
                'artist': 'きくお',
                'song_name': '愛して愛して愛して',
                'time_start': 3195
            },
            {
                'artist': 'みきとP',
                'song_name': 'バレリーコ',
                'time_start': 3620
            },
            {
                'artist': 'n-buna',
                'song_name': '夜明けと蛍',
                'time_start': 4290
            },
            {
                'artist': 'ナナホシ管弦楽団',
                'song_name': '失楽ペトリ',
                'time_start': 4743
            },
            {
                'artist': 'syudou',
                'song_name': 'ビターチョコデコレーション',
                'time_start': 5127
            },
            {
                'artist': '日向電工',
                'song_name': 'ブリキノダンス',
                'time_start': 5395
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ',
                'time_start': 5730
            },
            {
                'artist': 'King Gnu',
                'song_name': '白日',
                'time_start': 5992
            },
            {
                'artist': '一二三',
                'song_name': '美しく闇',
                'time_start': 6740
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 7,
        id: 'YEOfo3_MGCA',
        songs: [
            {
                'artist': 'まふまふ',
                'song_name': '女の子になりたい',
                'time_start': 374
            },
            {
                'artist': '女の子になりたい',
                'song_name': '愛欲のプリズナー',
                'time_start': 1486
            },
            {
                'artist': '米津玄師',
                'song_name': 'Lemon',
                'time_start': 2058
            },
            {
                'artist': '亜沙',
                'song_name': '吉原ラメント',
                'time_start': 2645
            },
            {
                'artist': 'IOSYS',
                'song_name': 'チルノのパーフェクトさんすう教室',
                'time_start': 3146
            },
            {
                'artist': 'しも',
                'song_name': 'ニコニコ動画流星群',
                'time_start': 3925
            },
            {
                'artist': 'syudou',
                'song_name': 'コールボーイ',
                'time_start': 5353
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 8,
        id: 'n_DdqP65APY',
        songs: [
            {
                'artist': '瑛人',
                'song_name': '香水',
                'time_start': "9:06"
            },
            {
                'artist': '蝶々P',
                'song_name': '心做し',
                'time_start': "20:00"
            },
            {
                'artist': 'yama',
                'song_name': '春を告げる',
                'time_start': "32:34"
            },
            {
                'artist': 'Oragestar',
                'song_name': 'Alice in 冷凍庫',
                'time_start': "39:53"
            },
            {
                'artist': '獅子志司',
                'song_name': '絶え間なく藍色',
                'time_start': "59:03"
            },
            {
                'artist': '天野月',
                'song_name': '聲',
                'time_start': "1:25:48"
            },
            {
                'artist': 'コメダワラ',
                'song_name': '自堕落',
                'time_start': "1:25:48"
            },
            {
                'artist': 'ハチ',
                'song_name': 'リンネ',
                'time_start': "1:39:01"
            },
            {
                'artist': 'R Sound Design',
                'song_name': 'flos',
                'time_start': "1:52:34"
            }
        ]
    },

    {
        kind: 'Monoe',
        number: 9,
        id: '9dhfkxdFTvA',
        songs: [
            {
                'artist': 'n-buna',
                'song_name': '夜明けと蛍',
                'time_start': "4:05"
            },
            {
                'artist': 'YOASOBI',
                'song_name': 'たぶん',
                'time_start': "15:28"
            },
            {
                'artist': 'ギガP',
                'song_name': 'ヒビカセ',
                'time_start': "24:20"
            },
            {
                'artist': 'mothy',
                'song_name': '悪ノ召使',
                'time_start': "37:20"
            },
            {
                'artist': '米津玄師',
                'song_name': '感電',
                'time_start': "57:47"
            },
            {
                'artist': 'koyori',
                'song_name': 'スキスキ絶頂症',
                'time_start': "1:06:07"
            },
            {
                'artist': 'ゆうゆ',
                'song_name': '天樂',
                'time_start': "1:17:04"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 10,
        id: 'cT-xRwAlfVg',
        songs: [
            {
                'artist': 'ササノマリイ',
                'song_name': '自傷無色(アカペラ)',
                'time_start': "7:38"
            },
            {
                'artist': 'ササノマリイ',
                'song_name': '自傷無色',
                'time_start': "8:18"
            },
            {
                'artist': 'DECO*27',
                'song_name': '乙女解剖',
                'time_start': "18:42"
            },
            {
                'artist': 'Kanaria',
                'song_name': 'KING',
                'time_start': "29:08"
            },
            {
                'artist': 'mothy',
                'song_name': '比較症候群',
                'time_start': "39:01"
            },
            {
                'artist': 'youまん',
                'song_name': 'タイニーバニー',
                'time_start': "54:20"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 11,
        id: 'YpJLwq4aFDg',
        songs: [
            {
                'artist': 'スペクタクルP',
                'song_name': 'The Beast',
                'time_start': "6:44"
            },
            {
                'artist': '蝶々P',
                'song_name': 'え？あぁ、そう。',
                'time_start': "14:07"
            },
            {
                'artist': '羽生まゐご',
                'song_name': '阿吽のビーツ',
                'time_start': "24:59"
            },
            {
                'artist': 'トーマ',
                'song_name': 'アザレアの亡霊',
                'time_start': "33:13"
            },
            {
                'artist': '奏音69',
                'song_name': 'クイーンオブハート',
                'time_start': "42:12"
            },
            {
                'artist': '女王蜂',
                'song_name': 'BL',
                'time_start': "50:50"
            },
            {
                'artist': '女王蜂',
                'song_name': '火炎',
                'time_start': "57:28"
            },
            {
                'artist': 'ツユ',
                'song_name': 'あの世行きのバスに乗ってさらば。',
                'time_start': "1:07:44"
            },
            {
                'artist': 'niki',
                'song_name': '-ERROR。',
                'time_start': "1:18:36"
            },
            {
                'artist': '須田景凪',
                'song_name': 'あの世行きのバスに乗ってさらば。',
                'time_start': "1:27:19"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 12,
        id: 'y5tBMJsaRj8',
        songs: [
            {
                'artist': 'P.I.N.A.',
                'song_name': 'レッド・パージ！！！',
                'time_start': "8:40"
            },
            {
                'artist': 'Ayase',
                'song_name': '幽霊東京',
                'time_start': "24:46"
            },
            {
                'artist': 'SEVENTHLINKS',
                'song_name': 'p.h',
                'time_start': "32:57"
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ',
                'time_start': "38:55"
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ（リベンジのリベンジ）',
                'time_start': "39:51"
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ダーリンダンス',
                'time_start': "44:13"
            },
            {
                'artist': '須田景凪',
                'song_name': '花瓶に触れた',
                'time_start': "59:26"
            },
            {
                'artist': 'supercell',
                'song_name': 'ブラック★ロックシューター',
                'time_start': "1:08:52"
            },
            {
                'artist': 'ツユ',
                'song_name': 'あの世行きのバスに乗ってさらば。',
                'time_start': "1:07:44"
            },
            {
                'artist': 'niki',
                'song_name': '-ERROR。',
                'time_start': "1:18:36"
            },
            {
                'artist': '須田景凪',
                'song_name': 'あの世行きのバスに乗ってさらば。',
                'time_start': "1:27:19"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 13,
        id: 'VGlckLlEVzs',
        songs: [
            {
                'artist': 'ねこぼーろ',
                'song_name': '共感性おばけ',
                'time_start': "4:50"
            },
            {
                'artist': 'バルーン',
                'song_name': 'シャルル',
                'time_start': "14:17"
            },
            {
                'artist': 'Halosy',
                'song_name': 'Fire◎Flower',
                'time_start': "26:16"
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ネロイズム',
                'time_start': "32:05"
            },
            {
                'artist': 'ぬゆり',
                'song_name': 'プロトディスコ',
                'time_start': "37:50"
            },
            {
                'artist': '奥華子',
                'song_name': '変わらないもの',
                'time_start': "47:29"
            },
            {
                'artist': 'LiSA',
                'song_name': '紅蓮華',
                'time_start': "56:47"
            },
            {
                'artist': 'YOASOBI',
                'song_name': 'ハルジオン',
                'time_start': "1:01:44"
            },
            {
                'artist': 'ONE OK ROCK',
                'song_name': '完全感覚Dreamer',
                'time_start': "1:13:40"
            },
            {
                'artist': 'こじろー',
                'song_name': '臨海ダイバー',
                'time_start': "1:21:20"
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ベノム',
                'time_start': "1:37:45"
            },
            {
                'artist': 'ねじ式',
                'song_name': 'パライソ・パライソ',
                'time_start': "1:45:13"
            },
            {
                'artist': 'ろくろ',
                'song_name': 'スロウダウナー',
                'time_start': "1:51:04"
            },
            {
                'artist': 'みきとP',
                'song_name': '小夜子',
                'time_start': "1:59:34"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 14,
        id: '_N3FRnfFP_M',
        songs: [
            {
                'artist': 'カラスヤサボウ',
                'song_name': '天才ロック',
                'time_start': "7:00"
            },
            {
                'artist': 'Junky',
                'song_name': 'Happy Halloween',
                'time_start': "14:44"
            },
            {
                'artist': 'Kanaria',
                'song_name': 'ヒトリユラリ',
                'time_start': "27:10"
            },
            {
                'artist': 'オーイシマサヨシ',
                'song_name': 'ようこそジャパリパークへ',
                'time_start': "35:31"
            },
            {
                'artist': 'ぬゆり',
                'song_name': 'プロトディスコ',
                'time_start': "37:50"
            },
            {
                'artist': 'Ado',
                'song_name': 'うっせぇわ',
                'time_start': "50:52"
            },
            {
                'artist': 'メル',
                'song_name': 'さようなら、花泥棒さん',
                'time_start': "58:59"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 15,
        id: 'N80fSWaErXs',
        songs: [
            {
                'artist': 'ぬゆり',
                'song_name': 'Hollow Sleep',
                'time_start': "6:47"
            },
            {
                'artist': '-',
                'song_name': 'ハッピーバースデートゥーユー',
                'time_start': "11:46"
            },
            {
                'artist': 'YOASOBI',
                'song_name': '群青',
                'time_start': "13:37"
            },
            {
                'artist': 'メル',
                'song_name': '翡翠のまち',
                'time_start': "19:57"
            },
            {
                'artist': 'DECO*27',
                'song_name': 'モザイクロール',
                'time_start': "27:20"
            },
            {
                'artist': 'ずっと真夜中でいいのに',
                'song_name': 'お勉強しといてよ',
                'time_start': "33:34"
            },
            {
                'artist': '卯花ロク',
                'song_name': '雁首、そろえてご機嫌よう',
                'time_start': "40:21"
            },
            {
                'artist': 'MARETU',
                'song_name': 'マインドブランド',
                'time_start': "45:13"
            },
            {
                'artist': 'Neru',
                'song_name': 'potatoになっていく',
                'time_start': "52:09"
            },
            {
                'artist': 'まふまふ',
                'song_name': 'イカサマダンス',
                'time_start': "1:06:32"
            },
            {
                'artist': 'Kanaria',
                'song_name': 'KING',
                'time_start': "1:12:50"
            },
            {
                'artist': 'syudou',
                'song_name': '邪魔',
                'time_start': "1:20:54"
            },
            {
                'artist': 'x0o0x_',
                'song_name': '　　　',
                'time_start': "1:26:23"
            },
            {
                'artist': 'DATEKEN',
                'song_name': 'ワンルーム・オール・ザット・ジャズ',
                'time_start': "1:30:27"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 16,
        id: 'dKTVxHLEX74',
        songs: [
            {
                'artist': 'DECO*27',
                'song_name': 'ヒバナ',
                'time_start': "6:38"
            },
            {
                'artist': 'みきとP',
                'song_name': '心臓デモクラシー',
                'time_start': "16:43"
            },
            {
                'artist': 'Chinozo',
                'song_name': 'グッバイ宣言',
                'time_start': "29:46"
            },
            {
                'artist': '糞田舎P',
                'song_name': 'ネコミミアーカイブ',
                'time_start': "41:15"
            },
            {
                'artist': '石風呂',
                'song_name': 'ゆるふわ樹海ガール',
                'time_start': "54:32"
            },
            {
                'artist': '柊キライ',
                'song_name': 'メビウス',
                'time_start': "59:02"
            },
            {
                'artist': 'ナナホシ管弦楽団',
                'song_name': '抜錨',
                'time_start': "1:03:59"
            },
            {
                'artist': '椎名もた',
                'song_name': 'ササメク',
                'time_start': "1:14:35"
            },
            {
                'artist': 'Vaundy',
                'song_name': '不可幸力',
                'time_start': "1:18:03"
            },
            {
                'artist': '水樹奈々×T.M.Revolution',
                'song_name': '革命デュアリズム',
                'time_start': "1:29:44"
            },
            {
                'artist': '煮ル果実',
                'song_name': '紗痲',
                'time_start': "1:36:54"
            },
            {
                'artist': '真島ゆろ',
                'song_name': 'チチンプイプイ',
                'time_start': "1:43:50"
            },
            {
                'artist': 'ナナホシ管弦楽団',
                'song_name': 'デリヘル呼んだら君が来た',
                'time_start': "1:47:37"
            },
            {
                'artist': 'ナポリP',
                'song_name': '嗤うマネキン',
                'time_start': "1:56:07"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 17,
        id: 'ldVo_0F3yMY',
        songs: [
            {
                'artist': 'YOASOBI',
                'song_name': '夜に駆ける',
                'time_start': "4:33"
            },
            {
                'artist': '米津玄師',
                'song_name': '春雷',
                'time_start': "18:27"
            },
            {
                'artist': 'クリスマス？なにそれ？美味しいの？',
                'song_name': 'ヒャダイン',
                'time_start': "26:42"
            },
            {
                'artist': 'きくお',
                'song_name': 'しかばねの踊り',
                'time_start': "32:19"
            },
            {
                'artist': '愛を伝えたいだとか',
                'song_name': 'あいみょん',
                'time_start': "37:38"
            },
            {
                'artist': '誰でもいいから付き合いたい',
                'song_name': '卓球少年',
                'time_start': "44:18"
            },
            {
                'artist': 'てにをは',
                'song_name': 'ヴィラン',
                'time_start': "48:04"
            },
            {
                'artist': '真島ゆろ',
                'song_name': 'チチンプイプイ',
                'time_start': "53:30"
            },
            {
                'artist': 'マイキP',
                'song_name': 'バケモノ信者',
                'time_start': "1:01:12"
            },
            {
                'artist': 'ナナヲアカリ',
                'song_name': 'ダダダダ天使',
                'time_start': "1:05:42"
            },
            {
                'artist': 'ぬゆり',
                'song_name': 'フィクサー',
                'time_start': "1:14:14"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 18,
        id: '82Arvle69v4',
        songs: [
            {
                'artist': 'Kanaria',
                'song_name': '百鬼祭',
                'time_start': "8:14"
            },
            {
                'artist': 'アド',
                'song_name': 'レディメイド',
                'time_start': "16:38"
            },
            {
                'artist': 'ナナヲアカリ feat.Sou',
                'song_name': 'チューリングラブ',
                'time_start': "25:16"
            },
            {
                'artist': 'WOWAKA',
                'song_name': 'アンノウンマザーグース',
                'time_start': "31:10"
            },
            {
                'artist': 'すりぃ',
                'song_name': 'テレキャスタービーボーイ',
                'time_start': "40:02"
            },
            {
                'artist': '石川さゆり',
                'song_name': '津軽海峡・冬景色',
                'time_start': "56:11"
            },
            {
                'artist': '柊キライ',
                'song_name': 'ラブカ？',
                'time_start': "1:10:42"
            },
            {
                'artist': 'WOWAKA',
                'song_name': 'ローリンガール',
                'time_start': "1:16:36"
            },
            {
                'artist': '運命のルーレット廻して',
                'song_name': 'ZARD',
                'time_start': "1:34:28"
            },
            {
                'artist': 'サスケ',
                'song_name': '青いベンチ',
                'time_start': "1:38:50"
            },
            {
                'artist': 'DECO*27',
                'song_name': '脱獄',
                'time_start': "1:46:36"
            },
            {
                'artist': '絢香',
                'song_name': '三日月',
                'time_start': "1:51:35"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 19,
        id: 'vPKnDLnoHOY',
        songs: [
            {
                'artist': 'アンジェラ・アキ',
                'song_name': '手紙〜拝啓一五の君へ〜',
                'time_start': "33:58"
            },
            {
                'artist': 'いきものがかり',
                'song_name': 'YELL',
                'time_start': "45:55"
            },
            {
                'artist': '時代',
                'song_name': '中島みゆき',
                'time_start': "1:16:27"
            },
            {
                'artist': '嵐',
                'song_name': 'Monster',
                'time_start': "1:24:35"
            },
            {
                'artist': 'GReeeeN',
                'song_name': 'キセキ',
                'time_start': "1:44:44"
            },
            {
                'artist': 'BUMP OF CHICKEN',
                'song_name': '天体観測',
                'time_start': "1:44:44"
            },
            {
                'artist': 'RADWIMPS',
                'song_name': 'DADA',
                'time_start': "1:59:30"
            },
            {
                'artist': 'ポルノグラフィティ',
                'song_name': 'アポロ',
                'time_start': "2:04:43"
            },
            {
                'artist': 'AKB48',
                'song_name': 'ヘビーローテーション',
                'time_start': "2:14:59"
            },
            {
                'artist': '米津玄師',
                'song_name': 'vivi',
                'time_start': "2:24:14"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 20,
        id: 'hD3aaUvjiBg',
        songs: [
            {
                'artist': '想太',
                'song_name': 'いかないで',
                'time_start': "11:05"
            },
            {
                'artist': 'IchiokuenP',
                'song_name': 'chocolate box',
                'time_start': "26:08"
            },
            {
                'artist': '勇魚',
                'song_name': 'メンヘラじゃないもん！',
                'time_start': "35:08"
            },
            {
                'artist': 'メガナガメ',
                'song_name': 'その電車、中津止まりにつき',
                'time_start': "46:51"
            },
            {
                'artist': 'YOASOBI',
                'song_name': '怪物',
                'time_start': "1:44:44"
            },
            {
                'artist': 'DECO*27',
                'song_name': '病名は愛だった',
                'time_start': "1:14:06"
            },
            {
                'artist': 'r-906',
                'song_name': 'パノプティコン',
                'time_start': "1:19:26"
            },
            {
                'artist': 'R Sound Design',
                'song_name': 'flos',
                'time_start': "1:26:47"
            },
            {
                'artist': '高橋洋子',
                'song_name': '残酷な天使のテーゼ',
                'time_start': "1:36:25"
            },
            {
                'artist': 'とあ',
                'song_name': 'ツギハギスタッカート',
                'time_start': "1:56:44"
            },
            {
                'artist': 'ナナホシ管弦楽団',
                'song_name': '失楽ペトリ',
                'time_start': "2:04:00"
            },
            {
                'artist': 'boomman',
                'song_name': 'ウオノエガール',
                'time_start': "2:11:13"
            },
            {
                'artist': 'クワガタP',
                'song_name': 'インタビュア',
                'time_start': "2:18:19"
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 21,
        id: 'ibOJEDKBOHQ',
        songs: [
            {
                'artist': 'Kanaria',
                'song_name': 'エンヴィーベイビー',
                'time_start': "12:02"
            },
            {
                'artist': 'まふまふ×かいりきベア',
                'song_name': 'マオ（アカペラ）',
                'time_start': "19:33"
            },
            {
                'artist': 'まふまふ×かいりきベア',
                'song_name': 'マオ',
                'time_start': "21:51"
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ルマ',
                'time_start': "40:35"
            },
            {
                'artist': 'YOASOBI',
                'song_name': 'ブリキノダンス',
                'time_start': "40:35"
            },
            {
                'artist': 'DECO*27',
                'song_name': '乙女解剖',
                'time_start': "1:14:06"
            },
            {
                'artist': 'とあ',
                'song_name': 'ミュージックミュージック',
                'time_start': "1:15:14"
            },
            {
                'artist': 'Omoi',
                'song_name': '君が飛び降りるのなら',
                'time_start': "1:20:14"
            },
            {
                'artist': 'ギガP',
                'song_name': '劣等上等',
                'time_start': "1:26:21"
            },
            {
                'artist': 'Eve',
                'song_name': '廻廻奇譚',
                'time_start': "1:42:15"
            },
            {
                'artist': 'mothy',
                'song_name': '比較症候群',
                'time_start': "1:56:27"
            }
        ]
    },


]


