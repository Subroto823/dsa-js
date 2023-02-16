// @@@@@@@@@@ working on - not done yet
'use strict';

const COLOR = {
  RED : 0,
  BLACK : 1
}

class Node {
    constructor(key, color) {
        this.key = key || null;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color || COLOR.RED;
    }

    isRed() {
        return this.color === COLOR.RED;
    }

    getValue() {
        return this.key;
    }
}

class RBT {
    constructor() {
        this.leaf = new Node(0, COLOR.BLACK);
        this.root = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(value) {
        this.size++;
    }

    insertNode(root, newNode) {
        
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

    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    delete(value) {
        
    }

    deleteNode(root, value) {
        
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
        process.stdout.write(curr.value + "\n");
    }
}

const rbtree = new RBT();

// rbtree.insert(10);
// rbtree.insert(5);
// rbtree.insert(15);
// rbtree.insert(3);
// rbtree.insert(7);

// rbtree.preOrder(rbtree.root);
// console.log();

// rbtree.inOrder(rbtree.root);
// console.log();

// rbtree.postOrder(rbtree.root);
// console.log();

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
// displayTree(rbtree);
