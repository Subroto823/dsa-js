/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them 


Example:

Input:
      5
    /   \
   4     3
  /  \     \
 1    2     1

Output : 4
Explanation: 4 is the length of the path [1, 4, 5, 3, 1] or [2, 4, 5, 3, 1].

*/
const { tree2 } = require('../binary-tree-example');

const diameterOfBinaryTree = (root) => {
    let diameter = 0;

    const dfs = function (node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }

    dfs(root);
    return diameter;
}

console.log(diameterOfBinaryTree(tree2));