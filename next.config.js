const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_EXPORT) {
    return { basePath: '/liver-song-search' }; //for github pages
  }
  return {};
};
