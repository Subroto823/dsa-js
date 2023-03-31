/**
 @Dijkstra (Priority Queue)

    Time Complexity:  O(VlogV)
    Space Complexity: O(V)
*/


let graph = [
    [[3, 10], [2, 7], [1, 2]],
    [[0, 2], [3, 2]],
    [[0, 7], [3, 1]],
    [[1, 2], [0, 10], [2, 1]]
]
console.log(dijkstra(graph, 2));