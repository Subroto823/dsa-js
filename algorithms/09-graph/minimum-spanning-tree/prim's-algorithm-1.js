/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)

*/
const { MinPriorityQueue,} = require('../../../__helpers/min-priority-queue');

var primsMST = function(graph, source) {
    const N = graph.length;
    const seen = new Array(N).fill(false);
    const cost = new Array(N).fill(Infinity);
    const queue = new MinPriorityQueue();

    cost[source] = 0;
    queue.enQueue(source, 0);
    let ans = 0;

    for (let i = 0; i < N; i++) {
        if (queue.isEmpty()) {
            console.log("No MST :(");
            return 0;
        }

        let current = queue.deQueue();
        let {element: node, priority: cost} = current;

        seen[node] = true;
        ans += cost;

        for(let [neighbor, weight] of graph[node]) {
            if(seen[neighbor]) continue;

            if(weight < cost[neighbor]) {
                queue.enQueue(neighbor, weight);
                cost[neighbor] = weight;
            }
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