/* Return the number of steps to get to zero, allowed steps are if it is even divide by 2 and if it is odd substract 1
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let steps = 0;
  const funkstep = (currentNum) => {

   if (currentNum === 0) {

       return;
   } else if (currentNum % 2 === 0) {
       steps++
       funkstep(currentNum/2);
   } else {
       steps++
       funkstep(currentNum - 1)
   }
  }

  funkstep(num);
  return steps;
};