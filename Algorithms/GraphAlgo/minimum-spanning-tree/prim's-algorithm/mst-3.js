/*
Minimum Spanning Tree
    Prim's Algorithm (With priority queue)

*/
const { PriorityQueue } = require('../../_/priority-queue');

function primsMST(graph, source) {
    const N = graph.length;
    const cost = new Array(N).fill(Infinity);
    const visited = new Array(N).fill(false);
    const queue = new PriorityQueue();

    cost[source] = 0;
    queue.enQueue(source, 0);
    let ans = 0;

    while(queue.length) {
        let current = queue.deQueue();
        let {node: currentNode, priority: currentNodeCost} = current;

        if(visited[currentNode]) continue;
        
        visited[currentNode] = true;
        ans += currentNodeCost;

        for(let [neighbor, weight] of graph[currentNode]) {
            if(visited[neighbor]) continue;

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