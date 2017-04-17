/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let isOne = false
  let maxLen = 0
  let curLen = 0
  for (let i = 0; i < nums.length; i++) {
    if (!isOne && nums[i]) {
      // start
      curLen = 1
      isOne = true
    } else if (isOne && !nums[i]) {
      // end
      isOne = false
      maxLen = maxLen > curLen ? maxLen : curLen
    } else if (isOne && nums[i]) {
      // add
      curLen++
    }
  }
  // bounadry problem
  if (isOne) {
    maxLen = maxLen > curLen ? maxLen : curLen
  }
  return maxLen
}
