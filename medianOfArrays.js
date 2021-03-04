/* Given to sorted arrays, merge the arrays and find the median value.  Assume all values will be a positive integer.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArray = nums1.concat(nums2);
  let sortedMerg = mergedArray.sort();
  console.log(sortedMerg);
  if (sortedMerg.length % 2 === 1) {
      let index = Math.floor(sortedMerg.length/2);
      return sortedMerg[index];
  } else {
     let index = sortedMerg.length/2;
      return ((sortedMerg[index] + sortedMerg[index - 1])/2)
  }

};