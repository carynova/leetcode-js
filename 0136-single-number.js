/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var result = 0
  // arrow function should not return assignment
  nums.forEach(val => { result ^= val })
  return result
}
