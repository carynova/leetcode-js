/**
 * @param {string} s
 * @return {string}
 */
var reverseString = s => {
  let result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    result += s.charAt(i)
  }
  return result
}
