/**
* 
* @BFS - Breadth First Search (in adjacency List)
*
* @Time Complexity: O(V+E)
* @Space Complexity: O(V+E)
*
*/

const { AdjacencyList } = require("../graph-adjacency-list-i");


function bfs(adjacencyList, start) {
    const traversal = [];
    const visited = new Array(adjacencyList.length).fill(false);

    const queue = [start];
    visited[start] = true;

    while(queue.length) {
        let currVertex = queue.shift();
        traversal.push(currVertex);

        for(let neighbor of adjacencyList[currVertex]) {
            if(!visited[neighbor]) {
                queue.push(neighbor);
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
console.log(bfs(graph.adjacencyList, 1));