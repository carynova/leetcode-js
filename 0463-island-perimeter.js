/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let rowNum = grid.length
  let colNum = grid[0].length
  let result = 0
  // count by rows
  for (let i = 0; i < rowNum; i++) {
    let isIsland = false
    let count = 0
    for (let j = 0; j < colNum; j++) {
      if (!isIsland && grid[i][j] === 1) {
        count++
        isIsland = true
      }
      if (isIsland && grid[i][j] === 0) {
        count++
        isIsland = false
      }
    }
    if (isIsland) count++
    result += count
  }

  // count by columns
  for (let i = 0; i < colNum; i++) {
    let isIsland = false
    let count = 0
    for (let j = 0; j < rowNum; j++) {
      if (!isIsland && grid[j][i] === 1) {
        count++
        isIsland = true
      }
      if (isIsland && grid[j][i] === 0) {
        count++
        isIsland = false
      }
    }
    if (isIsland) count++
    result += count
  }

  return result
}
