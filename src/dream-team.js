const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  if (members == []) return "";
  if (typeof members !== "object" || members === null) return false;
  let arr = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === "string")
    arr.push(members[i]);
  }
  let letters = [];
  for (j = 0; j < arr.length; j++) {
    for (k = 0; k < arr[j].length; k++) {
      let str = arr[j];
      if (str[k] == " ") continue;
      letters.push(str[k])
      break;
    }
  }
  for (m = 0; m < letters.length; m++) {   
    letters[m] = letters[m].toUpperCase();
  }  
  letters.sort();
  let teamname = letters.join("")
  return teamname;
}

module.exports = {
  createDreamTeam
};
