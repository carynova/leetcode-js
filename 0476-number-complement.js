/**
 * @param {number} num
 * @return {number}
 */
var findComplement = (num) => {
  let startBit = 30
  for (; startBit >= 0; startBit--) {
    if (1 << startBit & num) break
  }
  let allOne = 0
  while (startBit >= 0) {
    allOne += 1 << startBit
    startBit--
  }
  return num ^ allOne
}
