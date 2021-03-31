/*Shuffle string corresponding to index at the same index in indices array
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  let shuffled = [];
  for (let i = 0; i < s.length; i ++) {
      let index = indices[i];
      shuffled[index] = s[i];
  }
  return shuffled.join('');
};