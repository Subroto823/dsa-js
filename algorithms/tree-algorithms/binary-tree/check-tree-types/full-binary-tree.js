/*

A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.

Full Binary Tree theorem:

    Let,   
        i = the number of internal nodes
        n = be the total number of nodes
        l = number of leaves
        λ = number of levels

    1. The number of leaves is i + 1.
    2. The total number of nodes is 2i + 1.
    3. The number of internal nodes is (n – 1) / 2.
    4. The number of leaves is (n + 1) / 2.
    5. The total number of nodes is 2l – 1.
    6. The number of internal nodes is l – 1.
    7. The number of leaves is at most 2λ - 1.
*/
const { tree1, tree2, tree3 } = require('../binary-tree-example');

function isFullBinaryTree(node) {
    if (node === null) return true;

    if (node.left === null && node.right === null) return true;

    if ((node.left !== null) && (node.right !== null)) {
        return (isFullBinaryTree(node.left))
            && (isFullBinaryTree(node.right));
    }

    return false;
}

isFullBinaryTree(tree1) ?
    console.log("The tree is a full binary tree")
    : console.log("The tree is not a full binary tree");

isFullBinaryTree(tree2) ?
    console.log("The tree is a full binary tree")
    : console.log("The tree is not a full binary tree");

isFullBinaryTree(tree3) ?
    console.log("The tree is a full binary tree")
    : console.log("The tree is not a full binary tree");