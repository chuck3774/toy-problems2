/* Shuffle input array [x1, x2, y1, y2,] to format [x1, y1, x2, y2] where nums.length is 2n
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let x = nums.slice(0, n);
  let y = nums.slice(n, nums.length);
  let shuffle = [];
  for (let i = 0; i < n; i ++) {
      shuffle.push(x[i]);
      shuffle.push(y[i]);
  }
  return shuffle;
};