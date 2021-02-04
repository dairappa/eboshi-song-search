import Head from 'next/head'
import React from "react";

export const Home = (): JSX.Element => (
  <div >
    <Head>
      <title>VOMS song search</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <p>Hello World</p>
        <button
            onClick={() => {
                window.alert('With typescript and Jest')
            }}
        >
            Test Button
        </button>
    </main>

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
