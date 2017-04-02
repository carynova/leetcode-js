/**
 * Traverse the input nums, and use a map to store the position infos of nums.
 * 
 * For num in nums
 *   If the position of target-num exist in the map, answer found.
 *   Otherwise, store the position info like map[num] = position.
 *   Continue
 * 
 * Boundary problems are not included, as the answer exactly exists.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var tmpMap = []
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i]
        if (tmpMap[tmp] !== undefined) return [tmpMap[tmp], i]
        tmpMap[nums[i]] = i
    }
};
