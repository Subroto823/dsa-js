const { TreeNode } = require('./tree-node');

const depthFirstSeach = (root) => {
    if(!root) return [];

    const leftValues = depthFirstSeach(root.left);
    const rightValues = depthFirstSeach(root.right);

    return [root.val, ...leftValues, ...rightValues];
}

let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(depthFirstSeach(tree));