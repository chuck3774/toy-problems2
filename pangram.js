/* Check if sentence is a pangram(contains all letters of the alphabet)
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
  let pangram = {};
  let count = 0;
  for (let i = 0; i < sentence.length; i ++) {

      if (pangram[sentence[i]] === undefined) {
          pangram[sentence[i]] = 1;
          count++
      }
  }
  if (count === 26) {
      return true;
  } else {
      console.log(count);
      return false;
  }

};