const { TreeNode : Node } = require('./tree-node.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(root.value === value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if(root) {
            process.stdout.write(root.value + " ");
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            process.stdout.write(root.value + " ");
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            process.stdout.write(root.value + " ");
        }
    }

    /*bfs
    # here we are using array as a queue(for simplicity) which can lead to higher time complexity. Intstead of this we can use the optimized queue that we have created before. */
    levelOrder() {
        const queue = [];
        queue.push(this.root);

        while(queue.length) {
            let curr = queue.shift();
            process.stdout.write(curr.value + " ");
            
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }
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
