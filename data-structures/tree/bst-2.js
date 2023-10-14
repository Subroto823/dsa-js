const { TreeNode: Node } = require('./tree-node.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(root, value) {
        const newNode = new Node(value);
        if (root === null) {
            root = newNode;
        } else if (value < root.value) {
            root.left = this.insertNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.insertNode(root.right, value);
        }

        return root;
    }

    preOrder(root) {
        if (root) {
            process.stdout.write(root.value + " ");
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            process.stdout.write(root.value + " ");
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            process.stdout.write(root.value + " ");
        }
    }

    // Find the inorder successor
    minValue(root) {
        let currNode = root;
        while (currNode.left !== null) {
            currNode = currNode.left;
        }

        return currNode.value;
    }

    delete(value) {
        if (!value) return;
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {

            // If the node - has only one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            /* node - has two child
            In this scenerio, we copy the value of the inorder successor to the node and delete the inorder successor 

            @ The inorder successor of a node is the minimum value of the right subtree
            */
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    isValidBST(root, min = -Infinity, max = Infinity) {
        if (!root) return true;
    
        if (root.val <= min || root.val >= max) {
            return false;
        }
    
        return isValidBST(root.left, min, root.val)
            && isValidBST(root.right, root.val, max);
    };
}

const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(4);

process.stdout.write("Inorder traversal: ");
tree.inOrder(tree.root);

console.log("\n\nAfter deleting 10");
tree.delete(10);

process.stdout.write("Inorder traversal: ");
tree.inOrder(tree.root);
console.log();

const displayTree = tree => console.log(JSON.stringify(tree, null, 2));
displayTree(tree);
