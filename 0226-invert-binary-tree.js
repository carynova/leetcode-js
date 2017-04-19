/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root

  var tmpNode = root.left
  root.left = root.right
  root.right = tmpNode
  
  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)

  return root
}
