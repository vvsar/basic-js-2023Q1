const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  const result = {};
  const temp = [];
  const dmns = domains.slice();
  for (let i = 0; i < dmns.length; i++) {
    dmns[i] = dmns[i].split('.').reverse();
    for (let j = 0; j < dmns[i].length - 1; j++) {
      dmns[i][j + 1] = dmns[i][j] + '.' + dmns[i][j + 1];
    }
  }
  for (let i = 0; i < 3; i++) {
    for(let j = 0; j < dmns.length; j++) {
      if (!dmns[j][i]) continue;
      temp.push(dmns[j][i]);
    }
  }
  for (let k =0; k < temp.length; k++) {
    result[`.${temp[k]}`] = 1;
    while (temp[k + 1] == temp[k]){
      result[`.${temp[k]}`]++;
      k++;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
