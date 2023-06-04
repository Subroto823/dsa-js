const { TreeNode } = require('./tree-node');

const depthFirstSeach = (root) => {
    const queue = [ root ],
        result = [];

    while(queue.length) {
        let curr = queue.shift();
        result.push(curr.val);

        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return result;
}

let tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(8);

console.log(depthFirstSeach(tree));