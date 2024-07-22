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
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
/**
 * 层序遍历1
 * @param root 
 * @returns number[][]
 */
function levelOrderArr(root: TreeNode | null): number[][] {
  // 初始化队列，加入根节点
  let queue: TreeNode[] = [];
  if (!!root) {
      queue.push(root)
  }
  // 初始化一个列表，用于保存遍历序列
  const ans: number[][] = []
  while (queue.length) {
      let list: number[] = [];
      let size = queue.length
      for (let i = 0; i < size; i++) {
          let node = queue.shift() as TreeNode; // 队列出队
          list.push(node.val); // 保存节点值
          if (node.left) {
              queue.push(node.left); // 左子节点入队
          }
          if (node.right) {
              queue.push(node.right); // 右子节点入队
          }
      }
      ans.push(list)
  }
  return ans;
};

/**
 * 层序遍历 2
 * @param root 
 * @returns number[]
 */
function levelOrder(root: TreeNode | null): number[] {
    // 初始化队列，加入根节点
    const queue = [root];
    // 初始化一个列表，用于保存遍历序列
    const list: number[] = [];
    while (queue.length) {
        let node = queue.shift() as TreeNode; // 队列出队
        list.push(node.val); // 保存节点值
        if (node.left) {
            queue.push(node.left); // 左子节点入队
        }
        if (node.right) {
            queue.push(node.right); // 右子节点入队
        }
    }
    return list;
}