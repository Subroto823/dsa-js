const { TreeNode } = require('../tree-node');

// @TODO
var longestPath = function (root, node) {

    var dfs = function (root) {
        if (root === null) return 0;
        const leftDepth = 1 + dfs(root.left);
        const rightDepth = 1 + dfs(root.right);

        if (leftDepth > maxDistance)

        return Math.max(leftDepth, rightDepth);
    }

    return dfs(root, 0);
};

function main() {
    /*
    Input:

          0
        /   \
       4     3
      /  \     \
     1    2     5
               /
              6

    node = 5
    Output: 4 (5-3, 3-0, 0-4, 4-1)
    
    */

    let node0 = new TreeNode(0);
    let node1 = new TreeNode(1);
    let node2 = new TreeNode(2);
    let node3 = new TreeNode(3);
    let node4 = new TreeNode(4);
    let node5 = new TreeNode(5);
    let node6 = new TreeNode(6);

    root = node0;
    node0.left = node4;
    node0.right = node3;
    node4.left = node1;
    node4.right = node2;
    node3.right = node5;
    node5.left = node6;

    let node = node3;
    console.log(longestPath(root, node));
}

if (require.main === module) {
    main();
}