/**
* 
* @DFS iterative - Depth First Search Iterative (in adjacency List)
*
* @Time Complexity: O(V+E)
* @Space Complexity: O(V+E)
*
*/

const { AdjacencyList } = require("../graph-adjacency-list-i");


function dfsIterative(adjacencyList, start) {
    const traversal = [];
    const visited = new Array(adjacencyList.length).fill(false);

    const stack = [start];
    visited[start] = true;

    while(stack.length) {
        let currVertex = stack.pop();
        traversal.push(currVertex);

        for(let neighbor of adjacencyList[currVertex]) {
            if(!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
            }
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
console.log(dfsIterative(graph.adjacencyList, 1));