/**
 # Second Shortest Path From Source to Destination
*/
const { PriorityQueue } = require('../../../__helpers/priority-queue-simple');

var dijkstra = function(graph, source) {
    const N = graph.length;
    const distances = new Array(N).fill(Infinity);
    const pq = new PriorityQueue();

    pq.enqueue(source, 0);
    distances[source] = 0;

    while (pq.size()) {
        const u = pq.dequeue();

        for (const [v, w] of graph[u]) {
            const nw = distances[u] + w;

            if (nw < distances[v]) {
                distances[v] = nw;
                pq.enqueue(v, nw)
            }
        }
    }

    return distances;
}

// adjacent node of vertex i -> [[node, weight], ...]
let graph = [
    [[1, 2], [2, 7], [3, 10]],
    [[0, 2], [3, 2]],
    [[0, 7], [3, 1]],
    [[0, 10], [1, 2], [2, 1]]
]
console.log(dijkstra(graph, 0));