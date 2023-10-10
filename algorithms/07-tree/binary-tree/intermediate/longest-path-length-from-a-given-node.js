const { TreeNode } = require('../tree-node');

// @TODO
var longestPath = function (root, node) {

    var dfs = function (root) {
        if (root === null) return 0;
        const leftDepth = 1 + dfs(root.left);
        const rightDepth = 1 + dfs(root.right);

        if (leftDepth > maxDistance

        return Math.max(leftDepth, rightDepth);
    }

    return dfs(root, 0);
};

/*
Input:

      5
    /   \
   4     3
  /  \     \
 1    2     6

 node = 3

 Output: 3 (4-5, 5-3, 3-6)
 
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

let node = node4;
console.log(longestPath(root, node));