/**
 * Definition for a binary tree node. 前序遍历
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal( root: TreeNode | null ): number[] {
  if (!root) return []
  let result: number[] = []
  const LRM = (node: TreeNode) => {
      result.push(node.val)
      if (node.left) {
          LRM(node.left)
      }
      if (node.right) {
          LRM(node.right)
      }
  }
  LRM(root)
  return result
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  let result: number[] = []
  const DMS = (node: TreeNode) => {
      if (node.left) {
          DMS(node.left)
      }
      result.push(node.val)
      if (node.right) {
          DMS(node.right)
      }
  }
  DMS(root)
  return result
};
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  let result: number[] = []
  const DLS = (node: TreeNode) => {
      if (node.left) {
          DLS(node.left)
      }
      if (node.right) {
          DLS(node.right)
      }
      result.push(node.val)
  }
  DLS(root)
  return result
};