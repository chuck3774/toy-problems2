/*Decompress list where each pair in array the first num is the frequency and the second num is the value
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
  let list = [];
  for (let i = 0; i < nums.length; i += 2) {
      for (let j = 0; j < nums[i]; j ++) {
          list.push(nums[i + 1]);
      }
  }
  return list;
};