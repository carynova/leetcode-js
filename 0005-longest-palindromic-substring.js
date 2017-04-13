/**
 * Manacher algorithm
 */

function manacher (originStr) {
  // 0. generate a new str to avoid boundary situations 'abcb' => '*#a#b#c#b#'
  var extStr = '*#'
  for (var i = 0; i < originStr.length; i++) {
    extStr += originStr[i] + '#'
  }

  var maxn = 0  // Index of the last character of the longest palindromic
                // substring
  var dp = []   // Array for dp
  var idx = 0   // Center of the longest palindromic substring
  for (let i = 1; i < extStr.length; i++) {
    // 1. dp, skip some counting ops
    if (maxn > i) {
      dp[i] = Math.min(dp[2 * idx - i], maxn - i)
    } else {
      dp[i] = 1
    }

    // 2. count the length
    while (extStr[i - dp[i]] === extStr[i + dp[i]]) {
      dp[i]++
    }

    if (dp[i] + i > maxn) { // 3. update the longest record
      maxn = dp[i] + i
      idx = i
    }
  }

  // 4. get the result
  var ans = 0
  var pos
  for (let i = 1; i < extStr.length; i++) {
    if (dp[i] > ans) {
      ans = dp[i]
      pos = i
    }
  }

  var ifSharpCenter = extStr[pos] === '#'
  var result = ifSharpCenter
    ? ''
    : extStr[pos]
  var startPos = ifSharpCenter
    ? pos + 1
    : pos + 2
  var endPos = ifSharpCenter
    ? dp[pos] - 3 + startPos
    : dp[pos] - 4 + startPos

  for (let i = startPos; i <= endPos; i += 2) {
    result = extStr[i] + result + extStr[i]
  }

  return result
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = s => {
  return manacher(s)
}
