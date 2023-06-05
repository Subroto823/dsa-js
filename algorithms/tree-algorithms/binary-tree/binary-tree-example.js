const { TreeNode } = require('./binary-tree-node')

/*
Binary Tree
is a tree data structure in which each parent node can have at most two children.

Example 1:

      1
    /    \
   2      3
  / \    /  \
 4   5  6    7

*/

const tree1 = new TreeNode(1);

tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(7);



/*
Example 2:

      5
    /   \
   4     3
  /  \     \
 1    2     1

*/

let tree2 = new TreeNode(5);

tree2.left = new TreeNode(4);
tree2.right = new TreeNode(3);

tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(2);
tree2.right.right = new TreeNode(1);


module.exports = {
    tree1,
    tree2
}