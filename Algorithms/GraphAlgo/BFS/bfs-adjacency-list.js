/**
@BFS - Breadth First Search (in adjacency List)
    
    Time Complexity: O(V+E)
    Space Complexity: O(V+E)
*/

function breadthFirstSearch(adjacencyList, start) {
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
console.log(breadthFirstSearch(graph, 1, 4));