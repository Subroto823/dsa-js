/**
* 
* @DFS - Depth First Search (in adjacency List)
*
* @Time Complexity: O(V+E)
* @Space Complexity: O(V+E)
*
*/
const { AdjacencyList } = require("../graph-adjacency-list-i");


function dfs(adjacencyList, start) {
    const visited = new Array(adjacencyList.length).fill(false);
    return dfsHelper(adjacencyList, start, visited);
}

function dfsHelper(adjacencyList, vertex, visited, traversal=[]) {
    if(!vertex) return null;

    traversal.push(vertex);
    visited[vertex] = true;

    for(let i = 0; i < adjacencyList[vertex].length; i++) {
        let neighbor = adjacencyList[vertex][i];

        if(!visited[neighbor]) {
            dfsHelper(adjacencyList, neighbor, visited, traversal);
        }
    }
    return traversal;
}

const graph = new AdjacencyList();
graph.addVertex(1, 2, 3, 4);

graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log(graph.adjacencyList);
console.log(dfs(graph.adjacencyList, 1));