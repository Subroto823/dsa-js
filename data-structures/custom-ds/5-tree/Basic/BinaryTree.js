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

    postOrder(root) {
        if (root === null) return;

        this.postOrder(root.left);
        this.postOrder(root.right);
        process.stdout.write(root.value + " ");
    }

    inOrder(root) {
        if (root === null) return;

        this.inOrder(root.left);
        process.stdout.write(root.value + " ");
        this.inOrder(root.right);
    }

    preOrder(root) {
        if (root === null) return;

        process.stdout.write(root.value + " ");
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(12);
tree.root.right = new Node(9);
tree.root.left.left = new Node(5);
tree.root.left.right = new Node(6)

process.stdout.write("Postorder traversal: ")
tree.postOrder(tree.root);

process.stdout.write("\nInorder traversal: ")
tree.inOrder(tree.root);

process.stdout.write("\nPreorder traversal: ")
tree.preOrder(tree.root);