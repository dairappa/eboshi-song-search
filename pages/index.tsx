import Head from 'next/head'
import React from "react";


export const Home = (): JSX.Element => (
    <div>
        <Head>
            <title>VOMS song search</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <div className="container mx-auto items-center">
            <h1 className="text-3xl">Hello World</h1>
            <button className="2xl:bg-green-100"
                onClick={() => {
                    window.alert('With typescript and Jest')
                }}
            >
                Test Button
            </button>
            <button type="button" className="nes-btn is-primary">Primary</button>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className="text-xl font-medium text-black">ChitChat</div>
                </div>
                <div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>

        <footer>
            <a
                href="https://twitter.com/dairappa"
                target="_blank"
                rel="noopener noreferrer"
            >
                Created by @dairappa
            </a>
        </footer>



    </div>
)

export default Home
