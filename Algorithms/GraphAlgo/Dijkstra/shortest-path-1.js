/**
@Dijkstra (Adjacency Matrix)

    Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks. (from Wikipedia)

    It's a Greedy algorithm and doesn’t work for Graphs with negative weights.

    Time Complexity: O(V^2)
    Space Complexity: O(V)


    Dijkstra's Algorithm Applications

        To find the shortest path
        In social networking applications
        In a telephone network
        To find the locations in the map

 */

// Implement of Dijkstra's single source shortest path algorithm
function dijkstra(graph, source) {
    const V = graph.length;

    const distance = new Array(V).fill(Infinity);
    const queue = [source];
    distance[source] = 0;

    while (queue.length) {
        let currentVertex = queue.shift();

        for (let i = 0; i < V; i++) {
            let neighbors = graph[currentVertex];
            if (neighbors[i] === 0) continue;

            if ((distance[currentVertex] + neighbors[i]) < distance[i]) {
                distance[i] = distance[currentVertex] + neighbors[i];
                queue.push(i);
            }
        }
    }
    return distance;
}

let graph = [
    [0, 2, 7, 10],
    [2, 0, 0, 2],
    [7, 0, 0, 1],
    [10, 2, 1, 0]
]
console.log(dijkstra(graph, 2));

graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

console.log(dijkstra(graph, 0));

graph = [
    [0, 1, 2, 3],
    [1, 0, 5, 0],
    [2, 3, 0, 4],
    [3, 0, 4, 0]
];

console.log(dijkstra(graph, 1));

