/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)

*/
const { PriorityQueue } = require('../../_/priority-queue');

function primsMST(graph, source) {
    const N = graph.length,
        cost = new Array(N).fill(Infinity),
        parent = new Array(N).fill(-1),
        visited = new Array(N).fill(false),
        queue = new PriorityQueue();

    queue.enQueue(source, 0);
    cost[source] = 0;

    while(queue.length) {
        let { node: currentNode } = queue.deQueue();

        if(visited[currentNode]) continue;
        visited[currentNode] = true;

        for(let [neighbor, weight] of graph[currentNode]) {
            if(visited[neighbor]) continue;

            if(weight < cost[neighbor]) {
                cost[neighbor] = weight;
                parent[neighbor] = currentNode;
                queue.enQueue(neighbor, weight);
            }
        }
    }

    const mst = [];
    
    for(let i = 0; i < N; i++) {
        if(parent[i] === -1) continue;
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
console.log(primsMST(graph, 0));

graph = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primsMST(graph, 0));

graph = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
]
console.log(primsMST(graph, 0));