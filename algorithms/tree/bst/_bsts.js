const { TreeNode } = require('./_tree-node')

/*
BST Example 1:
     4
    / \
   2   7
  / \
 1   3

*/
const bst1 = new TreeNode(4);
bst1.left = new TreeNode(2);
bst1.right = new TreeNode(7);

bst1.left.left = new TreeNode(1);
bst1.left.right = new TreeNode(3);


/*
BST Example 2:

       10
     /     \
    5       12
   / \      / \
  2   8    11   15

*/

const bst2 = new Node(10);
bst2.left = new Node(5);
bst2.right = new Node(12);

bst2.left.left = new Node(2)
bst2.left.right = new Node(8)
bst2.right.left = new Node(11)
bst2.right.right = new Node(15)


/*
BST Example 3:

       10
     /    \
    8      14
   /       / \
  5      12   15
 / \           \
2   7          20

*/

const bst3 = new Node(10);
bst3.left = new Node(8);
bst3.right = new Node(14);

bst3.left.left = new Node(5);
bst3.right.left = new Node(12)
bst3.right.right = new Node(15)

bst3.left.left.left = new Node(2);
bst3.left.left.right = new Node(7);
bst3.right.right.right = new Node(20);


/*
BST Example 4:

       12
     /     \
    8       15
   / \      / \
  5   10  14   18
 / \          /  \
2   7        16    25

*/

const bst4 = new Node(12);
bst4.left = new Node(8);
bst4.right = new Node(15);

bst4.left.left = new Node(5);
bst4.left.right = new Node(10);
bst4.right.left = new Node(14)
bst4.right.right = new Node(18)

bst4.left.left.left = new Node(2);
bst4.left.left.right = new Node(7);
bst4.right.right.left = new Node(16);
bst4.right.right.right = new Node(25);


module.exports = {
    bst1,
    bst2,
    bst3,
    bst4
}