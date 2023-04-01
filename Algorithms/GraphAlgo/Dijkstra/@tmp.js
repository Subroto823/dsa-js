/**
 @Dijkstra (Adjacency List)

    Time Complexity: O(ElogV)
    Space Complexity: O(V)
*/

function dijkstra(graph, source) {
    const V = graph.length;
    const distance = new Array(V).fill(Infinity);
    let count = 0;

    const Queue = [source];
    distance[source] = 0;

    while (Queue.length) {
        let currentVertex = Queue.shift();

        for (let [neighbor, weight] of graph[currentVertex]) {
            let newDistance = (distance[currentVertex] + weight);

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = distance[currentVertex] + weight;
                Queue.push(neighbor);
                count++;
            }
        }
    }
    console.log(count)
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
console.log(dijkstra(graph, 0));

console.timeEnd();


