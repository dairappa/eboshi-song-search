const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return { assetPrefix: 'liver-song-search' }; //for github pages
  }
  return {};
};
