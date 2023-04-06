/**
Topological Sorting (dfs based)

*/

function topSort(G) {
    const stack = [],
        vertices = Object.keys(G);
        N = vertices.length,
        visited = {};

    for(let vertex of vertices) {
        visited[vertex] = false;
    }

    for (let i = 0; i < N; i++) {
        let node = vertices[i];
        if (visited[node] === false) {
            topSortHelper(G, node, stack, visited);
        }
    }
    return stack.reverse();
}

function topSortHelper(G, node, stack, visited) {
    visited[node] = true;
    
    for(let neighbor of G[node]) {
        if(visited[neighbor] === false) {
            topSortHelper(G, neighbor, stack, visited);
        }
    }
    stack.push(node);
}

// Adjacency List
let graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: ['E'],
    E: []
}
console.log(topSort(graph)); // [A, B, C, D, E] or [A, C, B, D, E]

// graph = [
//     [2],
//     [2],
//     [3, 4, 5],
//     [5],
//     [5],
//     []
// ];
// console.log(topSort(graph));