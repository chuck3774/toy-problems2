/*Unshuffle sentence and return
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
  let sentArray = s.split(' ');
  let sortedArray = [];
  for (let i = 0; i < sentArray.length; i ++) {
      let index = Number(sentArray[i].split('').pop());
      let word = sentArray[i].split('');
      word.pop();
      sortedArray[index - 1] = word.join('');
  }
  return sortedArray.join(' ');
};