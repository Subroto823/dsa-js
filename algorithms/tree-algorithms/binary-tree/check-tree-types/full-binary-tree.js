/*

A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.

Full Binary Tree theorem:

    Let,   
        i = the number of internal nodes
        n = be the total number of nodes
        l = number of leaves
        λ = number of levels

    1. The number of leaves is i + 1.
    2. The total number of nodes is 2i + 1.
    3. The number of internal nodes is (n – 1) / 2.
    4. The number of leaves is (n + 1) / 2.
    5. The total number of nodes is 2l – 1.
    6. The number of internal nodes is l – 1.
    7. The number of leaves is at most 2λ - 1.
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

    isFullBinaryTree(node) {
        if(node === null) return true;

        if(node.left === null && node.right === null) return true;

        if((node.left !== null) && (node.right !== null)) {
            return (this.isFullBinaryTree(node.left)) 
                &&  (this.isFullBinaryTree(node.right));
        }

        return false;
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

if (tree.isFullBinaryTree(tree.root))
    console.log("The tree is a full binary tree");
else
    console.log("The tree is not a full binary tree");