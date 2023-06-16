/*
Balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.

    # difference between the left and the right subtree for any node is not more than one
    # the left subtree is balanced
    # the right subtree is balanced

*/
const { tree1, tree2, tree3, tree4, tree5 } = require('../binary-tree-example');

function isBalanced(node) {
    return isHeightBalanced(node);
}

function isHeightBalanced(node) {
    if (node === null) return true;

    let leftHeight = calculateHeight(node.left),
        rightHeight = calculateHeight(node.right)
        heightDiff = Math.abs(leftHeight - rightHeight);;

    if (heightDiff > 1) return false;
    return (
        isHeightBalanced(node.left) &&
        isHeightBalanced(node.right)
    );
}

function calculateHeight(node) {
    if (!node) return 0;

    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

console.log(isBalanced(tree1))
console.log(isBalanced(tree2))
console.log(isBalanced(tree3))
console.log(isBalanced(tree4))
console.log(isBalanced(tree5))

/*
Balanced Binary Tree Applications

    AVL tree
    Balanced Binary Search Tree
*/