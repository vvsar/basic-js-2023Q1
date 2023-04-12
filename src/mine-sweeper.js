const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  const arr = [];
  for (let h = 0; h < matrix.length; h++) {
    let t = [];
    for (let g = 0; g < matrix[0].length; g++) {
      t.push(0);
    }
    arr.push(t);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (matrix[i][j - 1]) {arr[i][j]++;}
      if (matrix[i][j + 1]) {arr[i][j]++;}
      if (i < (matrix.length - 1)) {
        if (matrix[i + 1][j]) {arr[i][j]++;}
        if (matrix[i + 1][j - 1]) {arr[i][j]++;}
        if (matrix[i + 1][j + 1]) {arr[i][j]++;}
      }      
      if (i > 0) {
        if (matrix[i - 1][j]) {arr[i][j]++;}
        if (matrix[i - 1][j - 1]) {arr[i][j]++;}
        if (matrix[i - 1][j + 1]) {arr[i][j]++;}
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
