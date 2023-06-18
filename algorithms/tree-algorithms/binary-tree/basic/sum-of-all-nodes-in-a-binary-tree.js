const { tree1 } = require('../binary-tree-example');

// dfs
const treeSum = (root) => {
    if(!root) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}


/*
tree1:

      1
    /    \
   2      3
  / \    /  \
 4   5  6    7

*/
console.log(treeSum(tree1));