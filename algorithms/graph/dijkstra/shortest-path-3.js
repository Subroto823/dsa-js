/**
 * Dijkstra (Priority Queue)
 * Time Complexity:  O((V + E) * log(V))
 * Space Complexity: O(V)
 * 
*/
const { MinPriorityQueue } = require('../../../__helpers/min-priority-queue');

var dijkstra = function (graph, source) {
    const N = graph.length;
    const distances = new Array(N).fill(Infinity);
    const pq = new MinPriorityQueue();

    pq.enQueue(source, 0);
    distances[source] = 0;

    while (pq.size()) {
        const u = pq.deQueue();

        for (const [v, w] of graph[u]) {
            const nw = distances[u] + w;

            if (nw < distances[v]) {
                distances[v] = nw;
                pq.enQueue(v, nw)
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
console.log(dijkstra(graph, 2));

graph = [
    [[1, 3], [2, 2], [3, 7], [4, 3], [6, 11]],
    [[0, 3], [3, 2], [9, 9]],
    [[0, 2], [3, 1], [4, 5], [9, 4]],
    [[0, 7], [1, 2], [2, 1], [4, 2], [6, 8]],
    [[0, 3], [2, 5], [3, 2], [5, 3], [6, 5], [7, 10]],
    [[4, 3], [8, 1], [9, 3]],
    [[0, 11], [3, 8], [4, 5], [7, 15], [8, 8]],
    [[4, 10], [6, 15], [9, 2]],
    [[5, 1], [6, 8]],
    [[1, 9], [2, 4], [5, 3], [7, 2]]
]
console.log(dijkstra(graph, 2));