class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    height(node) {
        if (node === null) return 0;
        return node.height;
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;

        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;

        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    getBalanceFactor(node) {
        if (node === null) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return (new Node(value));
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node;
        }

        // update balance factor
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
        // balance factor
        let balanceFactor = this.getBalanceFactor(node);

        // If balanceFactor > 1, it means the height of the left subtree is greater than that of the right subtree. So, do a right rotation or left-right rotation
        if (balanceFactor > 1) {

            // left left case (right rotation)
            if (value < node.left.value) {
                return this.rightRotate(node);
            }

            // left right case (left - right rotation)
            else if (value > node.left.value) {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        // If balanceFactor < -1, it means the height of the right subtree is greater than that of the left subtree. So, do right rotation or right-left rotation
        if (balanceFactor < -1) {

            // right right case (left rotation)
            if (value > node.right.value) {
                return this.leftRotate(node);
            }
            
            // right left case (right-left rotation)
            else if (value < node.right.value) {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
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

        if (!root) return root;

        // update balance factor
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        let balanceFactor = this.getBalanceFactor(root);

        if (balanceFactor > 1) {
            if (this.getBalanceFactor(root.left) >= 0) {
                return this.rightRotate(root);
            } else {
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        }

        if (balanceFactor < -1) {
            if (this.getBalanceFactor(root.right) <= 0) {
                return this.leftRotate(root);
            } else {
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        }

        return root;
    }

    printTree(node, indent, last) {
        if (node !== null) {
            process.stdout.write(indent);
            if (last) {
                process.stdout.write("R----");
                indent += "   ";
            } else {
                process.stdout.write("L----");
                indent += "|  ";
            }
            process.stdout.write(node.value + "\n");
            this.printTree(node.left, indent, false);
            this.printTree(node.right, indent, true);
        }
    }
}

const tree = new AVLTree();
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
// tree.delete(5);

const displayTree = tree => console.log(JSON.stringify(tree, null, 2));
displayTree(tree);
tree.printTree(tree.root, "", true);
