/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = (words) => {
  var row = []
  row[0] = 'qwertyuiop'.split('')
  row[1] = 'asdfghjkl'.split('')
  row[2] = 'zxcvbnm'.split('')
  return words.filter(element => {
    let judgeResult = 0
    for (let char of element) {
      row.forEach((arr, key) => {
        if (arr.some(alphabet => alphabet === char || alphabet.toUpperCase() === char)) {
          judgeResult |= (1 << key)
        }
      })
    }
    return judgeResult === 1 || judgeResult === 2 || judgeResult === 4
  })
}
