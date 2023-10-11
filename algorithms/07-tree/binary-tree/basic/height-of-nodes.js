/**
 * Given a tree and root, find the height of all nodes (or the length of the longest path from all nodes to any of its leaf nodes.) 
 * The height of a node in a tree is the length of the longest path from that node to a leaf. 
 * In other words, it measures how many edges or levels you need to traverse from the node to reach a leaf node.
 * 
 */

const { TreeNode } = require('../tree-node');

var heightOfNodes = function(root) {
    const result = {};
    
    var dfs = function(node) {
        if (node === null) return -1;
        const l = dfs(node.left);
        const r = dfs(node.right);
        result[node.val] = 1 + Math.max(l, r);
        return result[node.val];
    }

    dfs(root);
    return result;
}

function main() {
    /*
    Input:

         5
       /   \
      4     3
     /  \     \
    1    2     6
          \
           7

    Output: {1: 0, 2: 1, 3: 1, 4: 2, 5: 3, 6: 0, 7: 0]
    
    */
    let node1 = new TreeNode(1);
    let node2 = new TreeNode(2);
    let node3 = new TreeNode(3);
    let node4 = new TreeNode(4);
    let node5 = new TreeNode(5);
    let node6 = new TreeNode(6);
    let node7 = new TreeNode(7);

    root = node5;
    node5.left = node4;
    node5.right = node3;
    node4.left = node1;
    node4.right = node2;
    node2.right = node7;
    node3.right = node6;

    console.log(heightOfNodes(root));
}

if (require.main === module) {
    main();
}

module.exports = {
    heightOfNodes
}