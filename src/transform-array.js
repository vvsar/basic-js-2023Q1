const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr == []) return arr;
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev") {
    newArr.push(arr[i]);
    continue;
    } switch (arr[i]) {
        case "--discard-next":
          if (i == arr.length - 1) break;
          i++;
          if (arr[i + 1] == "--double-prev" || arr[i + 1] == "--discard-prev") i++;
          break;
        case "--double-next":
          if (i == arr.length - 1) break;
          newArr.push(arr[i + 1]);
          newArr.push(arr[i + 1]);
          i++;
          break;
        case "--discard-prev":
          if (i == 0) break;
          newArr.pop();
          break;
        case "--double-prev":
          if (i == 0) break;
          newArr.push(arr[i - 1]);  
      }
  }
  return newArr;
}

module.exports = {
  transform
};
