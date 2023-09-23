/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)

*/
const { MinPriorityQueue,} = require('../../../__helpers/min-priority-queue');

var primsMST = function(graph) {
    let N = graph.length;
    const seen = new Array(N).fill(false);
    const queue = new MinPriorityQueue();

    queue.enqueue(0, 0);
    let ans = 0;

    while(N--) {
        if (queue.isEmpty()) {
            console.log("No MST :(");
            return 0;
        }

        let current = queue.dequeue();
        let {element: node, priority: cost} = current;

        seen[node] = true;
        ans += cost;

        for(let [neighbor, weight] of graph[node]) {
            if(seen[neighbor]) continue;
            queue.enqueue(neighbor, weight);
        }
    }
    
    return ans;
}

let graph = [
    [[1, 2], [2, 4]],
    [[0, 2], [2, 1], [3, 3]],
    [[0, 4], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primsMST(graph));

graph = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primsMST(graph));

graph = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
]
console.log(primsMST(graph));

graph = [
    [[1, 2]],
    [[0, 2]],
    [[3, 4]],
    [[2, 4]]
]
console.log(primsMST(graph));