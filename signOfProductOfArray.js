/* return the sign of the product of all numbers in an array (-1, 1, or 0)
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
  let value = 1;
  for (let i = 0; i < nums.length; i ++) {
      value *= nums[i];
  }
  if (value > 0) {
      return 1;
  } else if (value < 0) {
      return -1
  } else {
      return 0
  }
};