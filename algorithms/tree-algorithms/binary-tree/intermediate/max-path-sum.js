const { TreeNode } = require('../helper/tree');

var maxPathSum = function (root) {
    let maxSum = -Infinity;

    const helper = (node) => {
        if (!node) return 0;

        let leftSum = Math.max(0, maxPathSum(node.left)),
            rightSum = Math.max(0, maxPathSum(node.right));

        maxSum = Math.max(
            maxSum,
            node.val + leftSum + rightSum
        );

        return node.val + Math.max(leftSum, rightSum);;
    }

    helper(root);
    return maxSum;
};

/*
    -10
    /  \
   9    20
       /  \
     15    7
*/

const root = new TreeNode(-10);

root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxPathSum(root));