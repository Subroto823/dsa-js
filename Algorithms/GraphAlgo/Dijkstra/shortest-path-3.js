/**
 @Dijkstra (Priority Queue)

    Time Complexity:  O(VlogV)
    Space Complexity: O(V)
*/
const { PriorityQueue } = require('./priority-queue');

function dijkstra(graph, source) {
    const V = graph.length;
    const distance = new Array(V).fill(Infinity);
    let count = 0;

    const Queue = new PriorityQueue(V);
    Queue.enQueue([source, 0]);
    distance[source] = 0;

    while (Queue.length) {
        let currentVertex = Queue.deQueue();
        currentVertex = currentVertex[0];

        for (let [neighbor, weight] of graph[currentVertex]) {
            let newDistance = distance[currentVertex] + weight;

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
                Queue.enQueue([neighbor, distance[neighbor]]);
            }
        }
    }
    return distance;
}

// adjacent node of vertex i -> [[node, weight], ...]
let graph = [
    [[1, 2], [2, 7], [3, 10]],
    [[0, 2], [3, 2]],
    [[0, 7], [3, 1]],
    [[0, 10], [1, 2], [2, 1]]
]

console.time();
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
console.log(dijkstra(graph, 7));

graph = [
    [[3, 10], [2, 7], [1, 2]],
    [[3, 2], [0, 2]],
    [[3, 1], [0, 7]],
    [[2, 1], [1, 2], [0, 10]]
]
graph = [
    [[6, 11], [4, 3], [3, 7], [2, 2], [1, 3]],
    [[9, 9], [3, 2], [0, 3]],
    [[9, 4], [4, 5], [3, 1], [0, 2]],
    [[6, 8], [4, 2], [2, 1], [1, 2], [0, 7]],
    [[7, 10], [6, 5], [5, 3], [3, 2], [2, 5], [0, 3]],
    [[9, 3], [8, 1], [4, 3]],
    [[8, 8], [7, 15], [4, 5], [3, 8], [0, 11]],
    [[9, 2], [6, 15], [4, 10]],
    [[6, 8], [5, 1]],
    [[7, 2], [5, 3], [2, 4], [1, 9]]
]
console.log('vertex(descending)');
console.log(dijkstra(graph, 7))

graph = [
    [[1, 2], [2, 7], [3, 10]],
    [[0, 2], [3, 2]],
    [[3, 1], [0, 7]],
    [[2, 1], [1, 2], [0, 10]]
]

graph = [
    [[2, 2], [1, 3], [4, 3], [3, 7], [6, 11]],
    [[3, 2], [0, 3], [9, 9]],
    [[3, 1], [0, 2], [9, 4], [4, 5]],
    [[2, 1], [1, 2], [4, 2], [0, 7], [6, 8]],
    [[3, 2], [0, 3], [5, 3], [2, 5], [6, 5], [7, 10]],
    [[8, 1], [4, 3], [9, 3]],
    [[4, 5], [3, 8], [8, 8], [0, 11], [7, 15]],
    [[9, 2], [4, 10], [6, 15]],
    [[5, 1], [6, 8]],
    [[7, 2], [5, 3], [2, 4], [1, 9]]
]
console.log('weight - ascendin');
console.log(dijkstra(graph, 7));

graph = [
    [[3, 10], [2, 7], [1, 2]],
    [[3, 2], [0, 2]],
    [[0, 7], [3, 1]],
    [[0, 10], [1, 2], [2, 1]]
]

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
console.log('weight(descending)');
console.log(dijkstra(graph, 7));
console.timeEnd();