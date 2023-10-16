/*
Problem Statement: Search for a Value in a Binary Search Tree (BST)

You are given a Binary Search Tree (BST) and a target value. Your task is to write a function that searches for the target value within the BST and returns True if the value is found and False otherwise.

Input:

    A pointer to the root of the BST.
    An integer value to be searched for in the BST.

Output:

    True if the value is found in the BST.
    False if the value is not found.


Example:
    Input:
         4
        / \
       2   7
      / \
     1   3

    Value to Search: 3

    Output: True
*/
const { bst1 } = require('./_bsts');
const insertIntoBST = require('./insert-node-in-a-bst');


const searchInBST = function(root, value) {
    if (root === null) return false;
    if (root.val === value) return true;
    if (value < root.val) return searchInBST(root.left, value);
    if (value > root.val) return searchInBST(root.right, value);
}


function main() {
    console.log(searchInBST(bst1, 3));
    console.log(searchInBST(bst1, 5));
}

if (require.main === module) main();

module.exports = insertIntoBST;