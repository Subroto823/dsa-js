const { tree1, tree2 } = require('../binary-tree-example');

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

console.log(treeIncludes(tree1, 4));
console.log(treeIncludesDfs(tree2, 7));