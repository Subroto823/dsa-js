/*
A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.

A complete binary tree is just like a full binary tree, but with two major differences

    * All the leaf elements must lean towards the left.
    * The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isCompleteTree(node) {
        const numOfNodes = this.countNumNodes(node);
        return this.isComplete(node, 0, numOfNodes);
    }

    // count the number of nodes
    countNumNodes(node) {
        if (node === null) return 0;

        return (1 + this.countNumNodes(node.left) + this.countNumNodes(node.right));
    }

    isComplete(node, indx, numOfNodes) {
        if (node === null) return true;

        if (indx >= numOfNodes) return false;

        return this.isComplete(node.left, 2 * indx + 1, numOfNodes)
            && this.isComplete(node.right, 2 * indx + 2, numOfNodes)
    }


    // iterative
    isCompleteTreeII(root) {
        const queue = [root];
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
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.right = new Node(5);
tree.root.left.left = new Node(4);
tree.root.right.left = new Node(6);

if (tree.isCompleteTree(tree.root))
    console.log("The tree is a complete binary tree");
else
    console.log("The tree is not a complete binary tree");


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
