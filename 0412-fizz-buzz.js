/* global _ */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = n => {
  return _.range(1, n + 1).map(num => {
    let tmpStr = ''
    if (num % 3 === 0) {
      tmpStr += 'Fizz'
    }
    if (num % 5 === 0) {
      tmpStr += 'Buzz'
    }
    if (!tmpStr.length) tmpStr += num
    return tmpStr
  })
}

var fizzBuzz2 = n => {
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
