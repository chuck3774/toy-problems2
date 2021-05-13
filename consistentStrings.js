/*given a string of allowed letters, return the number of words in word array that contain only the allowed letters.
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
  let lettersAllowed = allowed.split('');
  let consistentCount = 0;
  for (let i = 0; i < words.length; i ++){
      let currentString = words[i].split('');
      let consistent = true;
      for (let j = 0; j < currentString.length; j ++) {
        let notAMatch = 0;
          for (let k = 0; k < lettersAllowed.length; k ++) {
              if (currentString[j] !== lettersAllowed[k]) {
                  notAMatch++;
              }
          }

          if (notAMatch === lettersAllowed.length) {

              consistent = false;
          }
      }
      if (consistent) {
          consistentCount++;
      }
  }
  return consistentCount;
};