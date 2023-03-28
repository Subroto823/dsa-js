/**
@BFS - Breadth First Search (in adjacency List)
    
    Time Complexity: O(V+E)
    Space Complexity: O(V+E)
*/

function breadthFirstSearch(adjacencyList, source) {
    const traversal = [];
    const visited = {};

    const queue = [source];
    visited[source] = true;

    while (queue.length) {
        let currentVertex = queue.shift();
        traversal.push(currentVertex);

        for (let neighbor of adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    return traversal;
}

// directed graph
let graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: ['d']
}
console.log(breadthFirstSearch(graph, 'a'));


// undirected graph
graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1],
    4: [2]
}
console.log(breadthFirstSearch(graph, 1));