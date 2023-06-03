/*
A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

    * All the internal nodes have a degree of 2.

    Recursively, a perfect binary tree can be defined as:

        * If a single node has no children, it is a perfect binary tree of height h = 0,
        * If a node has h > 0, it is a perfect binary tree if both of its subtrees are of height h - 1 and are non-overlapping.
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

    // calculate the depth
    depth(node) {
        let d = 0;
        while (node != null) {
            d++;
            node = node.left;
        }
        return d;
    }

    // check if the tree is perfect binary
    isPerfect(node, depth, level) {
        if (node === null) return true;

        if (node.left === null && node.right === null) return depth === level + 1;

        if (node.left === null || node.right === null) {
            return false;
        }

        return this.isPerfect(node.left, depth, level + 1)
            && this.isPerfect(node.right, depth, level + 1);
    }

    // wrapper method
    isPerfectTree(node) {
        let d = this.depth(node);
        return this.isPerfect(node, d, 0);
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

if (tree.isPerfectTree(tree.root))
    console.log("The tree is a perfect binary tree");
else
    console.log("The tree is not a perfect binary tree");

/*
Perfect Binary Tree Theorems

    * A perfect binary tree of height h has 2h + 1 – 1 node.
    * A perfect binary tree with n nodes has height log(n + 1) – 1 = Θ(ln(n)).
    * A perfect binary tree of height h has 2h leaf nodes.
    * The average depth of a node in a perfect binary tree is Θ(ln(n)).
*/