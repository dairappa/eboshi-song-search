export type Monsters = 'Pikamee' | 'Tomoshika' | 'Monoe'
export type Utawaku = {
    number: number;
    kind: Monsters;
    songs: {
        artist: string;
        time_start: number;
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
    }
]


