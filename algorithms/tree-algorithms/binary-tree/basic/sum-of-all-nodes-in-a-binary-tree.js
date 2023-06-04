const { TreeNode } = require('../../tree-node');

// dfs
const treeSum = (root) => {
    if(!root) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}


let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(treeSum(tree));