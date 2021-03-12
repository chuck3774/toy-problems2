/*Defang IP address (replace '.' with '[.]')
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let array = address.split('');
  let newArray = [];
  for (let i = 0; i < array.length; i ++) {
      let value = array[i];
      if (value === '.') {
          value = '[.]'
      }
      newArray.push(value);
  }
  return newArray.join('');
};