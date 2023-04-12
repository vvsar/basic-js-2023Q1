const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  if (arr.length > 1) {
    let values = [];
    let positions = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        values.push(arr[i]);
        positions.push([i]);
      }
    }
    values.sort((a, b) => a - b);
    for (let j = 0; j < values.length; j++) {
      arr[positions[j]] = values[j];
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
