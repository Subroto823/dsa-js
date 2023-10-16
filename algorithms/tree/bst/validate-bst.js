/*
Problem Statement: Validate Binary Search Tree (BST)

Given the root of a binary tree, determine if it is a Binary Search Tree (BST). A Binary Search Tree is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

Input:
    The root of a binary tree.

Output:
    Return true if the given binary tree is a valid BST; otherwise, return false


Example:
   
    Input:
         4
        / \
       2   7
      / \
     1   3

    Output: true


    Input:

           1
         /    \
        2      3
       / \    /  \
      4   5  6    7

    Output: false


Idea Of The Solution:
We know that inorder traversal in a BST always produces sorted data. We can use this property to validate a BST.
*/
const {bst1} = require('./_bsts');
const {tree1} = require('./../binary-tree/binary-tree-example');


const isValidBST = function(root) {
    const inorder = function(root) {
        if (root === null) return true;

        if (!inorder(root.left)) return false;

        if (root.val <= prev) return false;
        prev = root.val;

        return inorder(root.right);
    }

    let prev = -Infinity;
    return inorder(root);
}

function main() {
    console.log(isValidBST(bst1));
    console.log(isValidBST(tree1));
}

if (require.main === module) main();

module.exports = isValidBST;