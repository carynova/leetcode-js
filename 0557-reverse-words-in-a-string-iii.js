/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = (s) => {
  var strArr = s.split(' ')
  var result = ''
  for (let i = 0; i < strArr.length; i++) {
    if (i !== 0) result += ' '
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      result += strArr[i][j]
    }
  }
  return result
}
