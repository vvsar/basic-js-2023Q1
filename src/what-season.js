const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) != "[object Date]" || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  let date1 = new Date(date);
  let seasons = ['winter', 'spring', 'summer', 'autumn']
  let m = date1.getMonth();
  let n = 0
  if (m >= 2 && m <= 4) n = 1;
  if (m >= 5 && m <= 7) n = 2;
  if (m >= 8 && m <= 10) n = 3;
  return seasons[n];
}

module.exports = {
  getSeason
};
