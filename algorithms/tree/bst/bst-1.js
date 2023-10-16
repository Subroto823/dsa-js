const { TreeNode : Node } = require('../../../data-structures/tree/tree-node.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        if(!value) return;
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        else if(value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // for leaf node
            if(!root.left && !root.right) {
                return null;
            }

            // node - has one child
            if(!root.left) {
                return root.right;
            } else if(!root.right) {
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
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// bst.preOrder(bst.root);
// console.log();

// bst.inOrder(bst.root);
// console.log();

// bst.postOrder(bst.root);
// console.log();

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
// bst.delete(15);
displayTree(bst);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));
