const { TreeNode } = require('../tree-node');

// bfs solution
const treeIncludes = (root, value) => {
    if(!root) return [];

    
}

let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(treeIncludes(tree));