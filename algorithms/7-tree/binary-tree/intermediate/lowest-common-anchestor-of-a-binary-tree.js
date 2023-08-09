const { TreeNode } = require('../tree-node');

var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left !== null && right !== null) return root;
    return left !== null ? left : right;
};

/*
Input:

      5
    /   \
   4     3
  /  \     \
 1    2     1

 p = 1, q = 2

 Output: 4
*/

let tree = new TreeNode(5);

tree.left = new TreeNode(4);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);
tree.right.right = new TreeNode(1);

let p = tree.left.left, q = tree.left.right;
console.log(lowestCommonAncestor(tree, p, q));