const { TreeNode } = require('../../tree-node');

const treeMinValueDfs = (root) => {
    if(!root) return Infinity;
    const leftMin = treeMinValueDfs(root.left);
    const rightMin = treeMinValueDfs(root.right);
    return Math.min(root.val, leftMin, rightMin);
}


let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(treeMinValue(tree));
console.log(treeMinValueDfs(tree));