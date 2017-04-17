/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let flag = false
  let upperCaseCount = 0
  let firstUpper = false
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i)
    if (char === char.toUpperCase()) {
      flag = true
      upperCaseCount++
      if (i === 0) firstUpper = true
    }
  }

  if (!flag) {
    return true
  } else if (firstUpper && upperCaseCount === 1) {
    return true
  } else if (upperCaseCount === word.length) {
    return true
  } else {
    return false
  }
}
