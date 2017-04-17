/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var resultArr = []
  var n = nums.length
  for (let i = 0; i < n; i++) {
    nums[(nums[i] - 1) % n] += n
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) resultArr.push(i + 1)
  }
  return resultArr
}
