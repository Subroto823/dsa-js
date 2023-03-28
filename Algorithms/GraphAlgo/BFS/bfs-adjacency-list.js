/**
@BFS - Breadth First Search (in adjacency List)
    
    Time Complexity: O(V+E)
    Space Complexity: O(V+E)
*/

function breadthFirstSearch(adjacencyList, start) {
    const traversal = [];
    const visited = {};

    const queue = [start];

    while (queue.length) {
        let currentVertex = queue.shift();

        if (visited[currentVertex]) continue;

        traversal.push(currentVertex);
        visited[currentVertex] = true;

        for (let neighbor of adjacencyList[currentVertex]) {
            queue.push(neighbor);
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