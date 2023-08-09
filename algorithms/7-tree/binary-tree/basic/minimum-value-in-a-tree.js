const { tree2, tree6 } = require('../binary-tree-example');

// using bfs
const treeMinValue = (root) => {
    const queue = [ root ];
    let smallest = Infinity;

    while(queue.length) {
        let curr = queue.shift();
        smallest = Math.min(smallest, curr.val);

        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return smallest;
}

// using dfs
const treeMinValueDfs = (root) => {
    if(!root) return Infinity;
    const leftMin = treeMinValueDfs(root.left);
    const rightMin = treeMinValueDfs(root.right);
    return Math.min(root.val, leftMin, rightMin);
}


/*
tree 2:

      5
    /   \
   4     3
  /  \     \
 1    2     1

*/
console.log(treeMinValue(tree2));

/*
tree 6:

      5
    /    \
   6       3
 /  \     /
8    4  7
*/
console.log(treeMinValueDfs(tree6));