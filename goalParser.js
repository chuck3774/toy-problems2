/* Parse command where 'G' is parsed as 'G', () is parsed as 'o', and '(al)' is parsed as 'al' * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
  let solution = '';
  for (let i = 0; i < command.length; i ++) {
      if (command[i] === 'G') {
          solution += 'G';
      } else if (command[i] + command[i + 1] === '()') {
          solution += 'o';
      } else if (command[i] + command[i + 1] === '(a') {
          solution += 'al';
      }
  }
  return solution;

};