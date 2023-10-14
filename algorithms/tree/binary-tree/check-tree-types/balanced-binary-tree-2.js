// optimized

/*
Balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.

    # difference between the left and the right subtree for any node is not more than one
    # the left subtree is balanced
    # the right subtree is balanced

*/
const { tree1, tree5 } = require('../binary-tree-example');

function isBalancedTree(root) {
    if (root === null) return 0;

    let leftHeight = isBalancedTree(root.left);
    if (leftHeight === -1) return -1;

    let rightHeight = isBalancedTree(root.right);
    if (rightHeight === -1) return -1;

    return Math.abs(leftHeight - rightHeight) > 1
        ? -1
        : Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
    return isBalancedTree(root) != -1;
}

console.log(isBalanced(tree1));
console.log(isBalanced(tree5));