const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.array.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    this.array.push(String(value));
    return this;
  },
  removeLink(pos) {
    // throw new NotImplementedError('Not implemented');
    if (typeof pos != "number" || pos % 1 != 0 || (pos > 0 && pos <= this.array.length)) {
      this.array.splice(pos - 1, 1);
      return this;
    }
    this.array = [];
    throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.array.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let str = `( ${this.array.join(" )~~( ")} )`;
    this.array = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
