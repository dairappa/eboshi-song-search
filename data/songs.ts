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
        artist: 'カンザキイオリ',
        songName: '命に嫌われている（三回目）',
        timeStart: 2226,
      },
      {
        artist: 'DECO*27',
        songName: 'ヴァンパイア',
        timeStart: 2333,
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
]
