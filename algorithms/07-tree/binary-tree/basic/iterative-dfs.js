const { tree1 } = require('../binary-tree-example');

// iterative dfs
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

console.log(depthFirstSeach(tree1));