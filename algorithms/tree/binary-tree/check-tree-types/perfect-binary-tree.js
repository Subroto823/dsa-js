/*
A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

    * All the internal nodes have a degree of 2.

    Recursively, a perfect binary tree can be defined as:

        * If a single node has no children, it is a perfect binary tree of height h = 0,
        * If a node has h > 0, it is a perfect binary tree if both of its subtrees are of height h - 1 and are non-overlapping.
*/

const { tree1, tree2 } = require('../binary-tree-example');

function isPerfectBinaryTree(node) {
    let d = depth(node);
    return checkPerfect(node, d, 0);
}

function depth(node) {
    let d = 0;
    while (node != null) {
        d++;
        node = node.left;
    }
    return d;
}

// check if the tree is perfect binary
function checkPerfect(node, depth, level) {
    if (node === null) return true;

    if (node.left === null && node.right === null) return depth === level + 1;

    if (node.left === null || node.right === null) {
        return false;
    }

    return (
        checkPerfect(node.left, depth, level + 1) &&
        checkPerfect(node.right, depth, level + 1)
    );
}


isPerfectBinaryTree(tree1) ?
    console.log("The tree is a perfect binary tree")
    : console.log("The tree is not a perfect binary tree");

isPerfectBinaryTree(tree2) ?
    console.log("The tree is a perfect binary tree")
    : console.log("The tree is not a perfect binary tree");


/*
Perfect Binary Tree Theorems

    * A perfect binary tree of height h has 2h + 1 – 1 node.
    * A perfect binary tree with n nodes has height log(n + 1) – 1 = Θ(ln(n)).
    * A perfect binary tree of height h has 2h leaf nodes.
    * The average depth of a node in a perfect binary tree is Θ(ln(n)).
*/