const { TreeNode } = require('../tree-node');

var countNodes = function(root) {
    if (root === null) return 0
    const leftCount = countNodes(root.left)
    const rightCount = countNodes(root.right)

    return 1 + leftCount + rightCount
}


function main() {
    
    /*
    Input:

          5
        /   \
       4     3
      /  \     \
     1    2     6

    Output: 6
        
    */

    let node1 = new TreeNode(1);
    let node2 = new TreeNode(2);
    let node3 = new TreeNode(3);
    let node4 = new TreeNode(4);
    let node5 = new TreeNode(5);
    let node6 = new TreeNode(6);

    root = node5;
    node5.left = node4;
    node5.right = node3;
    node4.left = node1;
    node4.right = node2;
    node3.right = node6;
    console.log(countNodes(root));
}

if (require.main === module) {
    main();
}

module.exports = {
    countNodes
}