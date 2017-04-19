/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0
  let result = num % 9
  return result === 0 ? 9 : result
}
