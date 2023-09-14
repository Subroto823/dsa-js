/**
 # Second Shortest Path From Source to target
*/
const { PriorityQueue } = require('../../../__helpers/priority-queue-simple');

var secondShortestPath = function (graph, source, target) {
    const { parents } = dijkstra(graph, source);
    const parent = parents[target];

    swapAndGetOldDistance(graph, parent, target, Infinity);

    const {distances: secondShortests}= dijkstra(graph, source);
    return secondShortests[target];
}

const dijkstra = function(graph, source) {
    const N = graph.length;
    const distances = new Array(N).fill(Infinity);
    const parents = new Array(N).fill(-1);
    const pq = new PriorityQueue();

    pq.enqueue(source, 0);
    distances[source] = 0;

    while (pq.size()) {
        const u = pq.dequeue();

        for (const [v, w] of graph[u]) {
            const nw = distances[u] + w;

            if (nw < distances[v]) {
                distances[v] = nw;
                parents[v] = u;
                pq.enqueue(v, nw)
            }
        }
    }

    return {
        parents,
        distances
    };
}

const swapAndGetOldDistance = function (graph, source, target, distance) {
    const neighbors = graph[source];
    const i = neighbors.findIndex(([node, _]) => target === node);

    const oldDistance = neighbors[i][1];
    neighbors[i][1] = distance;

    return oldDistance;
}

// neighbors of node i -> [[neighbor, weight], ...]
let graph = [
    [[1, 2], [2, 7], [3, 10]],
    [[0, 2], [3, 2]],
    [[0, 7], [3, 1]],
    [[0, 10], [1, 2], [2, 1]]
]
console.log(secondShortestPath(graph, 0, 3));

graph = [
    [[1, 2]],
    [[0, 2], [2, 2]],
    [[1, 3]]
];
console.log(secondShortestPath(graph, 0, 1));
