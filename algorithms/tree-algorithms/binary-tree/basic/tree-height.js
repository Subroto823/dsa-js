/*
The height of a binary tree is the number of edges between the tree's root and its furthest leaf. 

The height of an empty tree is typically defined as -1.
*/

const { tree1, tree2, tree3 } = require('../binary-tree-example');

function height(root) {
    if(!root) return -1;

    return Math.max(
        height(root.left), 
        height(root.right)
    ) + 1;
}

console.log(height(tree1));
console.log(height(tree2));
console.log(height(tree3));