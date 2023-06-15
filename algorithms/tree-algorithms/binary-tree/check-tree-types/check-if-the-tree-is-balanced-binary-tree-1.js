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

class Height {
    height = 0;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isHeightBalanced(node, height) {
        if (node === null) {
            height.height = 0;
            return true;
        }

        let leftHeight = new Height();
        let rightHeight = new Height();

        let lH = this.isHeightBalanced(node.left, leftHeight);
        let rH = this.isHeightBalanced(node.right, rightHeight);

        height.height = Math.max(leftHeight.height, rightHeight.height) + 1;

        if (Math.abs(leftHeight.height - rightHeight.height >= 2))
            return false;
        else
            return lH & rH;
    }

    isBalanced(node) {
        const height = new Height();
        return this.isHeightBalanced(node, height);
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