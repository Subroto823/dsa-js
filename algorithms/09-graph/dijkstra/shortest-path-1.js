/**
 * Dijkstra (On Adjacency Matrix)
 * Single source shortest path algorithm
 * Time Complexity: O(N^2)
 * Space Complexity: O(N)
 * 
 */
var dijkstra = function (graph, source) {
    const N = graph.length;
    const distance = new Array(N).fill(Infinity);
    const seen = new Array(N).fill(false);

    distance[source] = 0;

    for (let i = 0; i < N - 1; i++) {
        let u = findMinDistanceNode(distance, seen);

        if (u === -1 || distance[u] === Infinity) continue;
        seen[u] = true;

        for (let v = 0; v < N; v++) {
            if (graph[u][v] === 0 || seen[v]) continue;

            let newDistance = distance[u] + graph[u][v];

            if (newDistance < distance[v]) {
                distance[v] = newDistance;
            }
        }
    }

    return distance;
}

var findMinDistanceNode = function (distances, visited) {
    let minDistance = Infinity;
    let minDistanceNode = -1;

    for (let i = 0; i < distances.length; i++) {
        if (!visited[i] && distances[i] < minDistance) {
            minDistance = distances[i];
            minDistanceNode = i;
        }
    }

    return minDistanceNode;
}

let graph = [
    [0, 2, 7, 10],
    [2, 0, 0, 2],
    [7, 0, 0, 1],
    [10, 2, 1, 0]
]
console.log(dijkstra(graph, 2));

graph = [
    [0, 1, 2, 3],
    [1, 0, 5, 0],
    [2, 3, 0, 4],
    [3, 0, 4, 0]
];

console.log(dijkstra(graph, 1));