/**
 * BFS - 广度优先遍历搜索
 * DFS - 深度优先搜索
 */
// DFS 为 递归的方法，最先找到最深的节点，所以最大深度为最深的节点的深度
function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  //递归终止条件 1.到叶子节点
    if (root.left == null && root.right == null) {
      return 1;
    }
    //2.如果只有左子树或者只有右子树
    if (root.left == null) {
      return 1 + maxDepth(root.right);
    }
    if (root.right == null) {
      return 1 + maxDepth(root.left);
    }
    //3.如果左右子树都存在
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}