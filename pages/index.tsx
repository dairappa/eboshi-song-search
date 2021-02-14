import Head from 'next/head'
import React, {useState} from "react";
import {songs, Utawaku} from "../data/songs"
import {Time, timeToNumber} from "../lib/time";

type SortOrder = "newest" | "oldest"

export const Home = (): JSX.Element => {
    const [searchText, setSearchText] = useState("")
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest")

    function matchSearch(song: Utawaku["songs"][0]) {
        if (!searchText) {
            return true
        }

        return song.song_name.includes(searchText) || song.artist.includes(searchText)
    }

    function compareSortOrder(right: Utawaku, left: Utawaku) {
        return (right.number - left.number) * (sortOrder == "newest" ? 1 : -1);
    }

    function convertToSecond(time_start: Time) {
        return timeToNumber(time_start);
    }

    return (

        <div className="misaki">
            <Head>
                <title>MONOE song search</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="container mx-auto items-center p-5 border-black border-4 m-0 md:m-5 md:mb-0">
                <h1 className="text-4xl">MONOE Song Search</h1>
                <div className="flex flex-col md:flex-row md:items-end">
                    <div className="nes-field flex-grow md:max-w-2xl">
                        <input type="text" id="name_field" className="nes-input h-12" placeholder="曲名、アーティスト"
                               value={searchText}
                               onChange={event => setSearchText(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className="ml-3 text-lg md:text-xl">
                            <input type="radio" className="nes-radio" name="answer" checked={sortOrder === "newest"}
                                   onChange={event => setSortOrder(event.target.checked ? "newest" : "oldest")}/>
                            <span>新しい順</span>
                        </label>

                        <label className="text-lg md:text-xl">
                            <input type="radio" className="nes-radio" name="answer" checked={sortOrder === "oldest"}
                                   onChange={event => setSortOrder(event.target.checked ? "oldest" : "newest")}/>
                            <span>古い順</span>
                        </label>
                    </div>
                </div>

                <div className="nes-table-responsive mt-5">
                    <table className="nes-table is-bordered table-fixed w-auto md:w-11/12">
                        <thead>
                        <tr>
                            <th className="w-auto md:w-10">#</th>
                            <th className="w-1/2 md:w-1/3">アーティスト</th>
                            <th className="w-auto">曲名</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            songs
                                .sort((left, right) => {
                                    return compareSortOrder(right, left)
                                })
                                .flatMap(waku => waku.songs
                                    .filter(song => matchSearch(song))
                                    .map((song, index) => {
                                        const time_start = typeof song.time_start === "number" ? song.time_start : convertToSecond(song.time_start)

                                        return (
                                            <tr key={`${waku.id}-${index}`}>
                                                <td>{`#${waku.number}`}</td>
                                                <td>{song.artist}</td>
                                                <td>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={`https://youtu.be/${waku.id}?&t=${time_start}s`}>
                                                        {song.song_name}
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    }))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="container flex flex-row-reverse items-end">
                <a
                    href="https://twitter.com/dairappa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Created by @dairappa
                </a>
            </footer>


        </div>
    );
}

export default Home
