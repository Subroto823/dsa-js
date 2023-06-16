// optimized

/*
Balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.

    # difference between the left and the right subtree for any node is not more than one
    # the left subtree is balanced
    # the right subtree is balanced

*/
const { tree1, tree5 } = require('../binary-tree-example');

function isBalancedTree(root) {
    if (!root) return { balanced: true, height: 0};

    let left = isBalancedTree(root.left),
        right = isBalancedTree(root.right);
    
    const height = Math.max(left.height, right.height) + 1,
        balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;

    return { balanced, height }
}

function isBalanced(root) {
    return isBalancedTree(root).balanced;
}

console.log(isBalanced(tree1));
console.log(isBalanced(tree5));