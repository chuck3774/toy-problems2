/*Verify if number is Palindrome
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numReversed = Number(x.toString().split('').reverse().join(''));
  if (x === numReversed) {
      return true;
  } else {
      return false;
  }
};