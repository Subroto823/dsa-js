/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)
*/
const { MinPriorityQueue } = require('../../../__helpers/min-priority-queue');


var primsMST = function(graph) {
    const N = graph.length;
    const parent = new Array(N).fill(-1);
    const cost = new Array(N).fill(Infinity);
    const seen = new Array(N).fill(false);
    const queue = new MinPriorityQueue();

    queue.enqueue(0, 0);
    parent[0] = 0;

    while(queue.size()) {
        const { element: node } = queue.dequeue();

        if (seen[node]) continue;
        seen[node] = true;

        for(let [neighbor, weight] of graph[node]) {
            if(seen[neighbor]) continue;
            if(weight >= cost[neighbor]) continue

            parent[neighbor] = node;
            cost[neighbor] = weight;
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

const graph1 = [
    [[1, 2], [2, 4]],
    [[0, 2], [2, 1], [3, 3]],
    [[0, 4], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];

const graph2 = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];

const graph3 = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
];

const graph4 = [
    [[1, 4], [2, 13], [3, 7], [4, 7]],
    [[0, 4], [2, 9], [3, 3], [4, 7]],
    [[0, 13], [1, 9], [3, 10], [4, 14]],
    [[0, 7], [1, 3], [2, 10], [4, 4]],
    [[0, 7], [1, 7], [2, 14], [3, 4]]
];

const graph5 = [
    [[1, 2]],
    [[0, 2]],
    [[3, 4]],
    [[2, 4]]
];

console.log(primsMST(graph1));
console.log(primsMST(graph2));
console.log(primsMST(graph3));
console.log(primsMST(graph4));
console.log(primsMST(graph5));
console.log();