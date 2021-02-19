import '../styles/global.scss'
import React from 'react'
import 'nes.css/css/nes.css'

function MyApp({ Component, pageProps }) {
  const basePath = process.env.basePath ?? ''
  const fontPath = `${basePath}/fonts/misaki_gothic.ttf`

  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        @font-face {
          font-family: 'misakigothic';
          src: url('${fontPath}') format('truetype');
        }
      `}</style>
    </>
  )
}

export default MyApp
