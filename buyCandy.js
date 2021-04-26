/*Given an array of costs of candies and a total amount of coins(money) the person has to buy candies, return maximum number of candies person can buy
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
  let sortCosts = costs.sort(function(a, b){return a - b});
  let count = 0;
  let sum = 0;
  for (let i = 0; i < sortCosts.length; i ++) {
      if ((sum + sortCosts[i]) > coins) {
          return count
      } else {
          sum += sortCosts[i];
          count ++;
      }
  }
  return count;
};