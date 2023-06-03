/**
@DFS - Depth First Search (in adjacency List)

    @Time Complexity: O(V+E)
    @Space Complexity: O(V+E)
*/

function depthFirstSearch(graph, source) {
    const visited = {};
    let x = traverse(graph, source, visited);
    return x;
}

function traverse(graph, node, visited, traversal=[]) {
    traversal.push(node);
    visited[node] = true;

    for(let neighbor of graph[node]) {
        if(!visited[neighbor]) {
            traverse(graph, neighbor, visited, traversal);
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
console.log(depthFirstSearch(graph, 'a'));


// undirected graph
graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1],
    4: [2]
}
console.log(depthFirstSearch(graph, 1));