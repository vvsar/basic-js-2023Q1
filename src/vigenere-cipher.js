const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dirMach = true) {
    this.dirMach = dirMach;
  };
  encrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    if (str == (null || undefined) || key == (null || undefined)) {
      throw new Error('Incorrect arguments!');
    }
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let j = 0;
    for (i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) == -1) {
        arr.push(str[i]);
        continue;
      }
      let k = abc[((abc.indexOf(str[i]) + abc.indexOf(key[j])) % 26)];
      j++;
      if (j == key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    let newStr = arr.join('');
    return newStr;
  }
  decrypt(encryptedStr, key) {
    // throw new NotImplementedError('Not implemented');
    if (encryptedStr == (null || undefined) || key == (null || undefined)) {
      throw new Error('Incorrect arguments!');
    };
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedStr = encryptedStr.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let j = 0;
    for (i = 0; i < encryptedStr.length; i++) {
      if (abc.indexOf(encryptedStr[i]) == -1) {
        arr.push(encryptedStr[i]);
        continue;
      }
      let k = abc[(abc.indexOf(encryptedStr[i]) - abc.indexOf(key[j]) + 26) % 26]; 
      j++;
      if (j == key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    let newStr = arr.join('');
    return newStr;
  
  }
}

module.exports = {
  VigenereCipheringMachine
};
