const { TreeNode } = require('../tree-node');

// iterative
const depthFirstSeach = (root) => {
    const stack = [ root ],
        result = [];

    while(stack.length) {
        let curr = stack.pop();
        result.push(curr.val);

        if(curr.left) stack.push(curr.left);
        if(curr.right) stack.push(curr.right);
    }
    return result;
}

// recursive
const depthFirstSeachRecursive = (root) => {
    if(!root) return [];

    const leftValues = depthFirstSeach(root.left);
    const rightValues = depthFirstSeach(root.right);

    return [root.val, ...leftValues, ...rightValues];
}


let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(depthFirstSeach(tree));
console.log(depthFirstSeachRecursive(tree));
