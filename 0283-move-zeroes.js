/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, waitForSwap = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let tmpInt = nums[i]
      nums[i] = nums[waitForSwap]
      nums[waitForSwap] = tmpInt
      waitForSwap++
    }
  }
}
