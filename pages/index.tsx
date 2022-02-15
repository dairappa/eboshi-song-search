import Head from 'next/head'
import React, { useState } from 'react'
import { songs, Utawaku } from '../data/songs'
import { Time, timeToNumber } from '../lib/time'

type SortOrder = 'newest' | 'oldest'

export const Home = (): JSX.Element => {
  const [searchText, setSearchText] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')

  function matchSearch(song: Utawaku['songs'][0]) {
    if (!searchText) {
      return true
    }

    return (
      song.songName.includes(searchText) || song.artist.includes(searchText)
    )
  }

  function compareSortOrder(right: Utawaku, left: Utawaku) {
    return (right.number - left.number) * (sortOrder == 'newest' ? 1 : -1)
  }

  function convertToSecond(timeStart: Time) {
    return timeToNumber(timeStart)
  }

  const songsBody = songs
    .sort((left, right) => {
      return compareSortOrder(right, left)
    })
    .flatMap((waku) =>
      waku.songs
        .filter((song) => matchSearch(song))
        .map((song, index) => {
          const timeStart = convertToSecond(song.timeStart)

          return (
            <tr key={`${waku.id}-${index}`}>
              <td className="border-main">{`#${waku.number}`}</td>
              <td className="border-main">{song.artist}</td>
              <td className="border-main">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://youtu.be/${waku.id}?&t=${timeStart}s`}
                >
                  {song.songName}
                </a>
              </td>
            </tr>
          )
        })
    )

  return (
    <div className="misaki bg-sub font-main">
      <div dangerouslySetInnerHTML={{ __html: searchText }} />
      <Head>
        <title>EBOSHI song search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto items-center p-5 bg-subsub border-main border-4 m-0 md:m-5 md:mb-0">
        <h1 className="text-4xl">
          <span className="font-accent">EBOSHI</span> Song Search
        </h1>
        <div className="flex flex-col md:flex-row md:items-end">
          <div className="nes-field flex-grow md:max-w-2xl">
            <input
              type="text"
              id="name_field"
              className="nes-input h-12 outline-main bg-subsub"
              placeholder="曲名、アーティスト"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
          <div className="flex flex-row flex-grow">
            <label className="ml-3 text-lg md:text-xl">
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                checked={sortOrder === 'newest'}
                onChange={(event) =>
                  setSortOrder(event.target.checked ? 'newest' : 'oldest')
                }
              />
              <span>新しい順</span>
            </label>

            <label className="text-lg md:text-xl">
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                checked={sortOrder === 'oldest'}
                onChange={(event) =>
                  setSortOrder(event.target.checked ? 'oldest' : 'newest')
                }
              />
              <span>古い順</span>
            </label>
            <label className="flex-grow md:text-xl text-right">
              <span>ヒット数:</span>
              <span className=" md:text-3xl">{songsBody.length}</span>
            </label>
          </div>
        </div>

        <div className="nes-table-responsive mt-5 pl-0 p-2">
          <table className="nes-table outline-main bg-subsub is-bordered table-fixed w-auto md:w-full">
            <thead>
              <tr>
                <th className="w-auto md:w-11 border-main">#</th>
                <th className="w-1/2 md:w-1/3 border-main">アーティスト</th>
                <th className="w-auto border-main">曲名</th>
              </tr>
            </thead>
            <tbody>{songsBody}</tbody>
          </table>
        </div>
      </div>

      <footer className="container flex flex-row-reverse items-end">
        <a
          href="https://twitter.com/dairappa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maintained by @dairappa
        </a>
      </footer>
    </div>
  )
}

export default Home
