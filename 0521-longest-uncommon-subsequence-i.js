/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a !== b) return a.length > b.length ? a.length : b.length
  else return -1
}
