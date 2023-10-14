/*
  Problem: Longest path length from a given node.

  Input: 
    - root (TreeNode)
    - node (TreeNode)

    Input:

          0 (root)
        /   \
       4     3
      /  \     \
     1    2     5
               /
              6

    node = 5
    

  Output:
    - result (number): 4 (path -> 5-3, 3-0, 0-4, 4-1)
    
  Pseudocode:
    1. Calculate longest inner path length (height) of each node.
    2. Initialize longest outer path length of every node to 0.
    3. Calculate longest outer path length of each node.
        - For the left child, 
        the longest outer path can be determined by taking the greater of two values: 
        either the current node's parent's outer path length + 1, or the height of the right sibling's (right child of parent) + 2.
        - For the right child, the idea is similar as left child.
    4. Return the maximum value between the inner and outer path lengths of the node.

*/
const { TreeNode } = require('../tree-node');


class LongestPaths {
    constructor(root) {
        this.root = root;
        this.in = {};
        this.out = {};

        this.build(root)
    }

    build(root) {
        this.dfs(root);

        for (let node of Object.keys(this.in)) {
            this.out[node] = 0;
        }

        this.dfsII(root)
    }

    dfs (node) {
        if (node === null) return -1;
        const l = this.dfs(node.left);
        const r = this.dfs(node.right);
        this.in[node.val] = 1 + Math.max(l, r);
        return this.in[node.val];
    }

    dfsII(root) {
        const leftHeight = root.left ? this.in[root.left.val] : -1;
        const rightHeight = root.right ? this.in[root.right.val] : -1;

        if (root.left) {
            this.out[root.left.val] = Math.max(this.out[root.val] + 1, rightHeight + 2)
            this.dfsII(root.left);
        }
        
        if (root.right) {
            this.out[root.right.val] = Math.max(this.out[root.val] + 1, leftHeight + 2)
            this.dfsII(root.right);
        }
    }
    
    get(node) {
        return Math.max(this.in[node.val], this.out[node.val]) || -1;
    }
}


function main() {
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

    let node = node5;
    lp = new LongestPaths(root);
    console.log(lp.get(node));
}

if (require.main === module) {
    main();
}