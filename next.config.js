const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_EXPORT) {
    return {
      basePath: '/eboshi-song-search',
      assetPrefix: '/eboshi-song-search/',
      env: {
        basePath: '/eboshi-song-search',
      },
    } //for github pages
  }
  return {}
}
