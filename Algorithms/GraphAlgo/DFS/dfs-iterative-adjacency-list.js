/**

@DFS - Depth First Search Iterative (in adjacencyList)

    Time Complexity: O(V+E)
    Space Complexity: O(V+E)

*/
const { AdjacencyList } = require("../graph-adjacency-list-i");

function depthFirstSearch(adjacencyList, source, n) {
    const traversal = [];
    const visited = new Array(n).fill(false);
    const stack = [source];

    while (stack.length) {
        let currentVertex = stack.pop();

        if (visited[currentVertex]) continue;

        traversal.push(currentVertex);
        visited[currentVertex] = true;

        for (let neighbor of adjacencyList[currentVertex]) {
            stack.push(neighbor);
        }
    }
    return traversal;
}

// directed graph
graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: ['d']
}
console.log(depthFirstSearch(graph, 'a', 6));


// undirected graph
let graph = new AdjacencyList();
graph.addVertex(1, 2, 3, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log(depthFirstSearch(graph.adjacencyList, 1, graph.length));