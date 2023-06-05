const { tree1 } = require('../binary-tree-example');

class BinaryTreeTraversal {
    preOrder(root, traversal = []) {
        if (root === null) return;

        traversal.push(root.value);
        this.preOrder(root.left, traversal);
        this.preOrder(root.right, traversal);

        return traversal;
    }

    inOrder(root, traversal = []) {
        if (root === null) return;

        this.inOrder(root.left, traversal);
        traversal.push(root.value);
        this.inOrder(root.right, traversal);

        return traversal;
    }

    postOrder(root, traversal = []) {
        if (root === null) return;

        this.postOrder(root.left, traversal);
        this.postOrder(root.right, traversal);
        traversal.push(root.value);

        return traversal;
    }
}

const traversal = new BinaryTreeTraversal();

console.log("preorder traversal :", traversal.preOrder(tree1));
console.log("inorder traversal :", traversal.inOrder(tree1));
console.log("postorder treversal :", traversal.postOrder(tree1));