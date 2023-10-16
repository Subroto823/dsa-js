/*
Problem Statement: Delete a Node from a Binary Search Tree (BST)

Given the root of a binary search tree (BST) and a key value to delete, remove the node with the given value while maintaining the BST properties.

Input:
    - The root of a binary search tree.
    - An integer value to be deleted from the BST.

Output:
    - Return the updated root of the BST after deleting the specified value.

Example 1:
    Input:
            4
           / \
          2   7
         / \
        1   3

        key = 3

    Output:

            4
           / \
          2   7
         /
        1

Example 2:
    Input:
             10
           /     \
          5       12
         / \      / \
        2   8    11  15

        key = 10

    Output:
             11
           /    \
          5      12
         / \       \
        2   8       15
*/
const { bst1, bst2 } = require('./_bsts');

const deleteNode = function (root, key) {
    if (!root) return root;
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // If the node has one child or no child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        /* 
        When node has two child,
        In this scenerio, we copy the value of the inorder successor to the node and delete the inorder successor, to maintain BST properties. 

        The inorder successor of a node is the minimum value of the right subtree
        */
        let cur = root.right;
        while (cur.left) cur = cur.left;
        root.val = cur.val;
        root.right = deleteNode(root.right, root.val);
    }

    return root;
}

function main() {
    console.log(deleteNode(bst1, 3));
    console.log(deleteNode(bst2, 10));
}

if (require.main === module) main();

module.exports = deleteNode;