/*return array with each index corresponding to the number of numbers in original array less than the number in the original array at that index
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let answerArray = [];
  for (let i = 0; i < nums.length; i ++) {
      let count = 0;
      for (let j = 0; j < nums.length; j ++) {
          if (j !== i) {
              if (nums[j] < nums[i])
                  count++;
         }
      }
      answerArray.push(count);
  }
  return answerArray;

};