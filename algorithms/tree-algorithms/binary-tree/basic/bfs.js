const { tree1 } = require('../binary-tree-example');

const breadthFirstSeach = (root) => {
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

console.log(breadthFirstSeach(tree1));