import '../styles/global.scss'
import React from 'react'
import 'nes.css/css/nes.css'

function MyApp({ Component, pageProps }) {
  const basePath = process.env.basePath ?? ''

  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        @font-face {
          font-family: 'misakigothic';
          src: url('${basePath}/fonts/misaki_gothic.ttf') format('truetype');
        }
      `}</style>
    </>
  )
}

export default MyApp
