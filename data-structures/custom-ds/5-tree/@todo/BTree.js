class BTreeNode {
    constructor(T, isLeaf) {
        this.key = new Array(2 * T - 1).fill(0);
        this.children = new Array(2 * T).fill(null);
        this.leaf = isLeaf;
        this.n = 0;
        this.t = T;
    }

    find(k) {
        for(let i = 0; i < this.n; i++) {
            if(this.key[i] === k) {
                return i;
            }
        }
        return -1;
    }
}

class BTree {}

const btree = new BTree();

btree.insert(10);
btree.insert(5);
btree.insert(15);
btree.insert(3);
btree.insert(7);


var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
// bst.delete(15);
displayTree(bst);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));
