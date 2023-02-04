class BTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    
}

const btree = new BTree();
console.log(bst.isEmpty());

btree.insert(10);
btree.insert(5);
btree.insert(15);
btree.insert(3);
btree.insert(7);

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
