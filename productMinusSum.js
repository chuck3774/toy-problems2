/* Calculate the product of numbers integers and sum of numbers integer, then return product minus sum
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
  let stringNumber = n.toString().split('');
  let sum = 0;
  let product = 1;
  for (let i = 0; i < stringNumber.length; i ++) {
      sum += Number(stringNumber[i]);
      product *= Number(stringNumber[i]);
  }
  return product - sum;
};