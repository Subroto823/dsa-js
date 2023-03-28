/**

@DFS - Depth First Search Iterative (in adjacencyList)

    Time Complexity: O(V+E)
    Space Complexity: O(V+E)

*/
const { AdjacencyList } = require("../graph-adjacency-list-i");

function depthFirstSearch(adjacencyList, source, n) {
    const traversal = [];
    const visited = new Array(n + 1).fill(false);

    const stack = [source];
    visited[source] = true;

    while (stack.length) {
        let currentVertex = stack.pop();
        traversal.push(currentVertex);

        for (let neighbor of adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    return traversal;
}

// directed graph
let graph = {
    1: [2, 3],
    2: [1, 4],
    3: [4],
    4: [5, 1],
    5: [1, 3]
}
console.log(depthFirstSearch(graph, 1, 5));


// undirected graph
graph = new AdjacencyList();
graph.addVertex(1, 2, 3, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

// console.log(depthFirstSearch(graph.adjacencyList, 1, graph.length));