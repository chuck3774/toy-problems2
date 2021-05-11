/* Check if two arrays of strings are representing equal strings when all indexes are combined.
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
  let string1 = '';
  let string2 = '';
  for (let i = 0; i < word1.length; i ++) {
      string1 += word1[i];
  }
    for (let j = 0; j < word2.length; j ++) {
      string2 += word2[j];
  }
  if (string1 === string2){
      return true;
  } else {
      return false;
  }

};