/**
 @Dijkstra (Priority Queue)

    Time Complexity:  O(VlogV)
    Space Complexity: O(V)
*/
const { PriorityQueue } = require('./priority-queue');

function dijkstra(graph, source) {
    const V = graph.length;
    const distance = new Array(V).fill(Infinity);

    const Queue = new PriorityQueue();
    Queue.enQueue(source, 0);
    distance[source] = 0;

    while (Queue.length) {
        let currentVertex = Queue.deQueue().node;

        for (let [neighbor, weight] of graph[currentVertex]) {
            let newDistance = distance[currentVertex] + weight;

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
                Queue.enQueue(neighbor, distance[neighbor]);
            }
        }
    }
    return distance;
}

// adjacent node of vertex i -> [[node, weight], ...]
let graph = [
    [[3, 10], [2, 7], [1, 2]],
    [[3, 2], [0, 2]],
    [[3, 1], [0, 7]],
    [[2, 1], [1, 2], [0, 10]]
]

console.log(dijkstra(graph, 2));

console.time();
graph = [
    [[6, 11], [3, 7], [1, 3], [4, 3], [2, 2]],
    [[9, 9], [0, 3], [3, 2]],
    [[4, 5], [9, 4], [0, 2], [3, 1]],
    [[6, 8], [0, 7], [1, 2], [4, 2], [2, 1]],
    [[7, 10], [2, 5], [6, 5], [0, 3], [5, 3], [3, 2]],
    [[4, 3], [9, 3], [8, 1]],
    [[7, 15], [0, 11], [3, 8], [8, 8], [4, 5]],
    [[6, 15], [4, 10], [9, 2]],
    [[6, 8], [5, 1]],
    [[1, 9], [2, 4], [5, 3], [7, 2]]
]
console.log(dijkstra(graph, 8));
console.timeEnd();