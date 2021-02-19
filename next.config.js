import { PHASE_PRODUCTION_BUILD } from 'next/constants'

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return { assetPrefix: 'liver-song-search' } //for github pages build
  }
  return {}
}
