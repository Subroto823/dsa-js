/*
Minimum Spanning Tree
Prim's Algorithm (With priority queue)

Time Complexity: O(Elog(V))
*/

const { MinPriorityQueue, } = require('../../../__helpers/min-priority-queue');

var primsMST = function (graph) {
    let N = graph.length;
    const seen = new Array(N).fill(false);
    const queue = new MinPriorityQueue();

    queue.enqueue(0, 0);
    let ans = 0;

    while (N) {
        if (queue.isEmpty()) {
            console.log("No MST :(");
            return 0;
        }

        let { element: node, priority: cost } = queue.dequeue();

        if (seen[node]) continue;
        seen[node] = true;
        ans += cost;

        for (let [neighbor, weight] of graph[node]) {
            if (seen[neighbor]) continue;
            queue.enqueue(neighbor, weight);
        }

        N--;
    }

    return ans;
}


/*

Input: 
    Weighted adjacency list

    [
        [[neighbor(index), weight], ...],
        [[neighbor, weight], ...]
        ...
    ]
*/

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


/*
What if we also want the mst?
*/


var primsMST = function (graph) {
    let N = graph.length;
    const seen = new Array(N).fill(false);
    const queue = new MinPriorityQueue();

    queue.enqueue(0, 0);
    const mst = [];

    while (N) {
        if (queue.isEmpty()) {
            console.log("No MST :(");
            return [];
        }

        const { element: node } = queue.dequeue();

        if (seen[node]) continue;
        seen[node] = true;
        mst.push(node);

        for (let [neighbor, weight] of graph[node]) {
            if (seen[neighbor]) continue;
            queue.enqueue(neighbor, weight);
        }

        N--;
    }

    return mst;
}

console.log(primsMST(graph1));
console.log(primsMST(graph2));
console.log(primsMST(graph3));
console.log(primsMST(graph4));
console.log(primsMST(graph5));
console.log();