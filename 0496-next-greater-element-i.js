/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = (findNums, nums) => {
  return findNums.map(ele => {
    let flag = false
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === ele) flag = true
      if (flag && nums[i] > ele) {
        return nums[i]
      }
    }
    return -1
  })
}
