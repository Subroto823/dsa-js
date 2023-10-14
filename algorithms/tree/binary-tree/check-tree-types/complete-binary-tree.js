/*
A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.

A complete binary tree is just like a full binary tree, but with two major differences

    * All the leaf elements must lean towards the left.
    * The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.
*/
const { tree1, tree2, tree3, tree4 } = require('../binary-tree-example');

function isCompleteTree(node) {
    const numOfNodes = countNodes(node);
    return checkComplete(node, 0, numOfNodes);
}

// count the number of nodes
function countNodes(node) {
    if (node === null) return 0;
    return (1 + countNodes(node.left) + countNodes(node.right));
}

function checkComplete(node, index, numOfNodes) {
    if (node === null) return true;
    if (index >= numOfNodes) return false;

    return (
        checkComplete(node.left, 2 * index + 1, numOfNodes) &&
        checkComplete(node.right, 2 * index + 2, numOfNodes)
    );
}


// iterative implementation
function isCompleteTreeII(root) {
    const queue = [ root ];
    let nullFound, node;

    while (queue.length) {
        node = queue.shift();

        if (nullFound && node) return false;
        if (!node) nullFound = true;

        if (node) {
            queue.push(node.left, node.right);
        }
    }
    return true;
}

console.log(isCompleteTree(tree1))
console.log(isCompleteTree(tree2))
console.log(isCompleteTree(tree3))
console.log(isCompleteTree(tree4))


/*
@@@ Relationship between array indexes and tree element

    A complete binary tree has an interesting property that we can use to find the children and parents of any node.

    If the index of any element in the array is i, the element in the index 2i+1 will become the left child and element in 2i+2 index will become the right child. 
    
    Also, the parent of any element at index i is given by the lower bound of (i-1)/2.

    ### Understanding this mapping of array indexes to tree positions is critical to understanding how the Heap Data Structure works and how it is used to implement Heap Sort.

    Complete Binary Tree Applications
        Heap-based data structures
        Heap sort

*/
