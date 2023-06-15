const { TreeNode } = require('./tree-node')

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

/*
Example 3:

      5
    /    \
   4       3
 /  \     / \
1    2   7   1
            /  \
           8    9
*/

let tree3 = new TreeNode(5);

tree3.left = new TreeNode(4);
tree3.right = new TreeNode(3);

tree3.left.left = new TreeNode(1);
tree3.left.right = new TreeNode(2);
tree3.right.left = new TreeNode(7)
tree3.right.right = new TreeNode(1);

tree3.right.right.left= new TreeNode(8);
tree3.right.right.right = new TreeNode(9);


/*
Example 4:

      5
    /    \
   4       3
 /  \     /
1    2   7
*/

let tree4 = new TreeNode(5);

tree4.left = new TreeNode(4);
tree4.right = new TreeNode(3);

tree4.left.left = new TreeNode(1);
tree4.left.right = new TreeNode(2);
tree4.right.left = new TreeNode(7)


/*
Example 5:

      5
    /    \
   4       3
 /  \
1    2
    / \
   7   6
*/

let tree5 = new TreeNode(5);

tree5.left = new TreeNode(4);
tree5.right = new TreeNode(3);

tree5.left.left = new TreeNode(1);
tree5.left.right = new TreeNode(2);

tree5.left.right.left = new TreeNode(7);
tree5.left.right.right = new TreeNode(6);


module.exports = {
    tree1,
    tree2,
    tree3,
    tree4,
    tree5
}