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
 1    2     6

 p = 1, q = 2

 Output: 4
 
*/

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

root = node5;
node5.left = node4;
node5.right = node3;
node4.left = node1;
node4.right = node2;
node3.right = node6;

let p = node1, q = node2;
console.log(lowestCommonAncestor(root, p, q));