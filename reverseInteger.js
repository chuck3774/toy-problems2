/*Given a number x reverse and return the integer.  Can be a positive or negative integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let string = x.toString();
 let array = string.split('');
 let newArray = [];
  for (let i = array.length - 1; i >= 0; i -- ) {
      newArray.push(array[i]);

  }
  let newString = newArray.join('');
  if (string[0] === '-') {
      return -(parseInt(newString))
  } else {
       return parseInt(newString)
  }

};