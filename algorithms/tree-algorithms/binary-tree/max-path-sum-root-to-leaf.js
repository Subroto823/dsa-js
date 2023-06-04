/*
Max Path Sum from root to leaf
        5
      /   \
    4      3
   /  \     \
  1    2     1

result - 11 ( 5 -> 4 -> 2);
*/
const { TreeNode } = require('../tree-node');

const maxPathSum = (root) => {
    if(!root) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChild;
}


let tree = new TreeNode(5);

tree.left = new TreeNode(4);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);
tree.right.right = new TreeNode(1);

console.log(maxPathSum(tree));