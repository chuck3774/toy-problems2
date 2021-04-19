/* Given an array on numbers representing the amount of candy each kid has, verify if given extra candies if each kid would now have the most out of the group
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
  let greatestWithExtras = [];
  for (let i = 0; i < candies.length; i ++) {
      let isGreatest = true;
      for (let j = 0; j < candies.length; j ++) {
          if ((candies[i] + extraCandies) < candies[j] ) {
              isGreatest = false;
          }
      }
      greatestWithExtras.push(isGreatest);
  }
  return greatestWithExtras;
};