// ????????????????????
// optimized

/*
Balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.

    # difference between the left and the right subtree for any node is not more than one
    # the left subtree is balanced
    # the right subtree is balanced

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

    isBalancedTree(root) {
        if(root === null) return 0;

        let lH = this.isBalancedTree(root.left);
        if(lH === -1) return -1;

        let rH = this.isBalancedTree(root.right);
        if(rH === -1) return -1;

        return Math.abs(lH - rH) > 1 
            ? -1 
            : Math.max(lH, rH) + 1;
    }

    isBalanced(root) {
        return this.isBalancedTree(root) > 0;
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

if (tree.isBalanced(tree.root))
    console.log("The tree is balanced");
else
    console.log("The tree is not balanced");

/*
Balanced Binary Tree Applications

    AVL tree
    Balanced Binary Search Tree
*/