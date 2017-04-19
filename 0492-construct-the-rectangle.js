/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let l = 0
  let w = 0
  for (w = Math.floor(Math.sqrt(area)); w > 0; w--) {
    let tmp = area / w
    if (Math.round(tmp) === tmp) {
      l = tmp
      break
    }
  }
  return [l, w]
}
