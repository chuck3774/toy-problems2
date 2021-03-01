/*
takes in an array on nums and a target sum and returns array of indexes of numbers that total the target sum.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let sum = target;
  let solution = [];
  for (let i = 0; i < nums.length; i ++) {
      for (let j = 0; j < nums.length; j ++ ) {
          if (j === i) {

          } else {
              if (nums[i] + nums[j] === sum) {
                  solution.push(i);
                  solution.push(j);

              }
          }
      }
  }
  return solution.slice(0, 2);
};

//TEST

// console.log(twoSum([2, 7, 11, 15], 9));