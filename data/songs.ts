import { Time } from '../lib/time'

export type Utawaku = {
  number: number
  songs: {
    artist: string
    timeStart: number | Time
    songName: string
  }[]
  id: string
}

export const songs: Utawaku[] = [
  {
    number: 1,
    id: 'ZY2Ndj0x6xs',
    songs: [
      {
        artist: 'ツミキ',
        songName: 'フォニィ',
        timeStart: '4:52',
      },
      {
        artist: 'Ado',
        songName: '踊',
        timeStart: '9:40',
      },
      {
        artist: 'Chinozo',
        songName: 'グッバイ宣言',
        timeStart: '16:23',
      },
      {
        artist: 'DECO*27',
        songName: 'ヴァンパイア',
        timeStart: '22:42',
      },
      {
        artist: 'n-buna',
        songName: '夜明けと蛍',
        timeStart: '28:43',
      },
      {
        artist: 'tamon',
        songName: 'あなたクランケン',
        timeStart: '38:32',
      },
    ],
  },
  {
    number: 2,
    id: 'fqIVh5DiiPA',
    songs: [
      {
        artist: 'ゆうゆ',
        songName: '深海少女',
        timeStart: '9:44',
      },
      {
        artist: 'ナノウ',
        songName: 'ハロ・ハワユ',
        timeStart: '16:44',
      },
      {
        artist: 'Ayase',
        songName: 'シネマ',
        timeStart: '59:42',
      },
      {
        artist: 'wotaku',
        songName: 'マフィア',
        timeStart: '22:42',
      },
      {
        artist: '煮ル果実',
        songName: 'ヲズワルド',
        timeStart: '1:22:27',
      },
    ],
  },
  {
    number: 3,
    id: 'eFucjAQI28k',
    songs: [
      {
        artist: 'Ado',
        songName: '煮ル果実',
        timeStart: '17:04',
      },
      {
        artist: 'かいりきベア',
        songName: 'メンタルチェーンソー',
        timeStart: '25:57',
      },
      {
        artist: '¿?shimon',
        songName: '偽物人間40号',
        timeStart: '39:55',
      },
      {
        artist: 'parade × Belle',
        songName: 'U',
        timeStart: '50:55',
      },
      {
        artist: 'Kanaria',
        songName: 'EYE',
        timeStart: '1:00:07',
      },
      {
        artist: 'うたたP',
        songName: 'こちら、幸福安心委員会です。',
        timeStart: '1:03:55',
      },
      {
        artist: 'MARETU',
        songName: 'ナミダ',
        timeStart: '1:25:53',
      },
      {
        artist: 'MARETU',
        songName: 'ナミダ',
        timeStart: '1:25:53',
      },
      {
        artist: 'Eight',
        songName: 'とても素敵な六月でした',
        timeStart: '2:08:07',
      },
    ],
  },
  {
    number: 4,
    id: 'hEBGEyrf2DM',
    songs: [
      {
        artist: 'ツユ',
        songName: 'アサガオの散る頃に',
        timeStart: '6:29',
      },
      {
        artist: 'yama',
        songName: '春を告げる',
        timeStart: '12:38',
      },
      {
        artist: 'WOWAKA',
        songName: '裏表ラバーズ',
        timeStart: '40:48',
      },
      {
        artist: 'kemu',
        songName: '地球最後の告白を',
        timeStart: '51:28',
      },
      {
        artist: 'のぼる↑',
        songName: 'モノクロ∞ブルースカイ',
        timeStart: '1:03:23',
      },
      {
        artist: 'DECO*27',
        songName: 'シンデレラ',
        timeStart: '1:14:45',
      },
      {
        artist: 'syudou',
        songName: '爆笑',
        timeStart: '1:20:35',
      },
      {
        artist: '米津玄師',
        songName: '死神　',
        timeStart: '1:28:20',
      },
    ],
  },
]
