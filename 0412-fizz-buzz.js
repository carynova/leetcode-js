/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = n => {
  let resultArr = []
  for (let i = 1; i <= n; i++) {
    let tmpStr = ''
    if (i % 3 === 0) {
      tmpStr += 'Fizz'
    }
    if (i % 5 === 0) {
      tmpStr += 'Buzz'
    }
    if (!tmpStr.length) tmpStr += i
    resultArr.push(tmpStr)
  }
  return resultArr
}
