/*Given array of numbers return array with running total of array up to that index in original array
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let results = [];
  for (let i = 0; i < nums.length; i ++) {
      let sum = 0;
      for (let j = i; j >= 0; j -- ) {
          sum += nums[j];
      }
      results.push(sum);
  }
  return results;
};