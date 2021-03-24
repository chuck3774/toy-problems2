/*return number of stones that are jewels
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let numOfJewels = 0;
  for (let i = 0; i < stones.length; i ++) {
      for (let j = 0; j < jewels.length; j ++) {
          if (stones[i] === jewels[j]) {
              numOfJewels++
          }
      }
  }
  return numOfJewels;
};