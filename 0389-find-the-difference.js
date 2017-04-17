/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = (s, t) => {
  // convert char to num, since xor operator will cast char to num
  let c = t.charCodeAt(t.length - 1)
  for (let i = 0; i < s.length; i++) {
    c = c ^ s.charCodeAt(i) ^ t.charCodeAt(i)
  }
  return String.fromCharCode(c)
}
