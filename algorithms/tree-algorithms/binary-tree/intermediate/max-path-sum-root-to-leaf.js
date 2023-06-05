const { tree2 } = require('../binary-tree-example');

const maxPathSum = (root) => {
    if(!root) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChild;
}


/*
Max Path Sum from root to leaf
        5
      /   \
    4      3
   /  \     \
  1    2     1

result - 11 ( 5 -> 4 -> 2);
*/
console.log(maxPathSum(tree2));