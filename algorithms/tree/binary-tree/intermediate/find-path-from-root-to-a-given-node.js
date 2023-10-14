const { TreeNode } = require('../tree-node');

var findPath = function(root, target) {
    const path = [];

    var dfs = function(root) {
        if (root === null) return false;
        if (root === target) {
            path.push(root.val);
            return true;
        }

        if (dfs(root.left) || dfs(root.right)) {
            path.push(root.val);
            return true;
        }

        return false;
    }

    dfs(root);
    return path.reverse();
};

/*
Input:

      5
    /   \
   4     3
  /  \     \
 1    2     6

 node = 2

 Output: [5, 4, 2]
 
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

let target = node2
console.log(findPath(root, target));