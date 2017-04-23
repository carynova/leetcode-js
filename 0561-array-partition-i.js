/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sortedArr = nums.sort((a, b) => {
    if (a < b) return -1
    else if (a > b) return 1
    return 0
  })
  let sum = 0
  for (let i = 0; i < nums.length; i += 2) {
    sum += sortedArr[i]
  }
  return sum
}
