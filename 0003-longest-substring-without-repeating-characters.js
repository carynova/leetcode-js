/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var hashMap = {}
  var startPos = 0
  var maxLen = 0

  // triverse the string
  for (var i = 0, len = s.length; i < len; i++) {
    var char = s[i]

    if (!hashMap[char]) {
      // new character
      hashMap[char] = true
    } else {
      // get rid of the prefix one by one
      while (1) {
        if (s[startPos] === char) {
          startPos++
          break
        }

        hashMap[s[startPos]] = false
        startPos++
      }
    }

    // update max length
    maxLen = Math.max(maxLen, i - startPos + 1)
  }

  return maxLen
}
