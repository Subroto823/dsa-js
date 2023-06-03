/**
# Articulation Point / Cut Node / Critical Point

    # Implementation of naive approach
    # Time Complexity: O(V * (V + E)) or O(V^3)
 */

function articulationPoint(graph) {
    const ap = [];

    for(let node in graph) {
        let temp = graph[node];
        delete graph[node];

        if(!isConnectedComponent(graph)) {
            ap.push(node);
        }
        graph[node] = temp;
    }
    return ap;
}

function isConnectedComponent(graph) {
    const visited = new Set();
    let count = 0;
    for(let node in graph) {
        if(dfs(graph, node, visited)) {
            count++;
        }
    }
    return count === 1;
}

function dfs(graph, source, visited) {
    if(visited.has(String(source)) || graph[source] === undefined) return false;
    visited.add(String(source));

    for(let neighbor of graph[source]) {
        dfs(graph, neighbor, visited);
    }
    return true;
}

let graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};
console.log(articulationPoint(graph))

graph = {
    0: [1, 2],
    1: [0],
    2: [0]
};
console.log(articulationPoint(graph))