/*
Problem Statement: Insert a Node in a Binary Search Tree (BST)

You are given a Binary Search Tree (BST) and a value to insert. Your task is to write a function that inserts the given value into the BST while maintaining the BST's properties.

Input:
    A pointer to the root of the BST.
    An integer value to be inserted into the BST.

Output:
    A pointer to the updated root of the BST after inserting the value.

Example:
   Input:
         4
        / \
       2   7
      / \
     1   3

    Value to Insert: 8

    Output:

            4
           / \
          2   7
         / \   \
        1   3   8
*/

const { TreeNode } = require('./_tree-node');
const { bst1 } = require('./_bsts');


const insertIntoBST = function(root, value) {
    const dfs = function(root) {
        if (root === null) return newNode;

        if (value < root.val) {
            root.left = dfs(root.left)
        } else if (value > root.val) {
            root.right = dfs(root.right);
        }

        return root;
    }

    const newNode = new TreeNode(value);
    return dfs(root);
}


function main() {
    let root = insertIntoBST(bst1, 8);
    console.log(root);
}

if (require.main === module) main();


module.exports = insertIntoBST;