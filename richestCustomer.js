/* Given an array of customer's account totals return customer total that is the highest.
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let richestTotal = 0;
  for (let i = 0; i < accounts.length; i ++) {
      let customer = accounts[i];
      let customerTotal = 0;
      for (let j = 0; j < customer.length; j ++) {
          customerTotal += customer[j];
      }
      if (customerTotal > richestTotal) {
          richestTotal = customerTotal;
      }
  }
  return richestTotal;

};