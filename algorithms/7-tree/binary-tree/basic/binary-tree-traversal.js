const { tree1 } = require('../binary-tree-example');

class BinaryTreeTraversal {
    preOrder(root, traversal = []) {
        if (root === null) return;

        traversal.push(root.val);
        this.preOrder(root.left, traversal);
        this.preOrder(root.right, traversal);

        return traversal;
    }

    inOrder(root, traversal = []) {
        if (root === null) return;

        this.inOrder(root.left, traversal);
        traversal.push(root.val);
        this.inOrder(root.right, traversal);

        return traversal;
    }

    postOrder(root, traversal = []) {
        if (root === null) return;

        this.postOrder(root.left, traversal);
        this.postOrder(root.right, traversal);
        traversal.push(root.val);

        return traversal;
    }
}

/*
      1
    /   \
   2      3
  / \    /  \
 4   5  6    7

 */

const traversal = new BinaryTreeTraversal();

console.log("preorder traversal :", traversal.preOrder(tree1));
console.log("inorder traversal :", traversal.inOrder(tree1));
console.log("postorder treversal :", traversal.postOrder(tree1));