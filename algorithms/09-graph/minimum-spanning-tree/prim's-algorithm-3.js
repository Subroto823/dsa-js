/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)
*/
const { MinPriorityQueue } = require('../../../__helpers/min-priority-queue');


var primsMST = function(graph) {
    const N = graph.length;
    const parent = new Array(N).fill(-1);
    const seen = new Array(N).fill(false);
    const queue = new MinPriorityQueue();

    queue.enqueue(0, 0);
    parent[0] = 0;

    while(queue.size()) {
        const { element: node } = queue.dequeue();
        seen[node] = true;

        for(let [neighbor, weight] of graph[node]) {
            if(seen[neighbor]) continue;
            parent[neighbor] = node;
            queue.enqueue(neighbor, weight);
        }
    }

    const mst = [];
    
    for(let i = 0; i < N; i++) {
        if (parent[i] === -1) {
            console.log("No MST :(");
            return [];
        }
        mst.push([parent[i], i]);
    }

   return mst;
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
console.log();