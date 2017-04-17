/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  let depthArr = [1]
  let recurseArr = [root]

  for (let i = 0; i < recurseArr.length; i++) {
    if (recurseArr[i].left) {
      depthArr.push(depthArr[i] + 1)
      recurseArr.push(recurseArr[i].left)
    }
    if (recurseArr[i].right) {
      depthArr.push(depthArr[i] + 1)
      recurseArr.push(recurseArr[i].right)
    }
  }

  return depthArr[depthArr.length - 1]
}
