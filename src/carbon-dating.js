const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (typeof(sampleActivity) !== "string") return false;
  let sa = Number(sampleActivity);
  if (sa && (sa > 0 && sa < MODERN_ACTIVITY)) {
  let d = Math.ceil(Math.log(MODERN_ACTIVITY / sa)/(0.693 / HALF_LIFE_PERIOD));
  return d;
  };
  return false;
}

module.exports = {
  dateSample
};
