const { TreeNode } = require('../../tree-node');

// bfs solution
const treeIncludes = (root, target) => {
    if(!root) return false;
    const queue = [ root ];

    while(queue.length) {
        let curr = queue.shift();

        if(curr.val === target) return true;
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return false;
}

// dfs solution (recursive)
const treeIncludesDfs = (root, target) => {
    if(!root) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(treeIncludes(tree, 4));
console.log(treeIncludesDfs(tree, 4));