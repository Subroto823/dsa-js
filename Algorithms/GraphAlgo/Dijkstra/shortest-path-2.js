/**
 @Dijkstra (Adjacency List)

    Time Complexity: O(ElogV)
    Space Complexity: O(V)
*/

// Implement of Dijkstra's single source shortest path algorithm
function dijkstra(graph, source) {

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

// console.log(dijkstra(graph, 0));

graph = [
    [0, 1, 2, 3],
    [1, 0, 5, 0],
    [2, 3, 0, 4],
    [3, 0, 4, 0]
];

// console.log(dijkstra(graph, 1));