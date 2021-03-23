/*Return the number of pairs in array
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let pairCount = 0;
  for (let i = 0; i < nums.length; i ++) {
      for (let j = i + 1; j < nums.length; j ++) {
          if (nums[i] === nums[j]) {
              pairCount++;
          }
      }
  }
  return pairCount;
};