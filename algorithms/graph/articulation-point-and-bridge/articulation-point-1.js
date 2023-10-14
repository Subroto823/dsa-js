/**
 * Articulation Point
 * Naive Approach (For undirected and connected graph)
 * Time Complexity: O(V * (V + E))
 */

var articulationPoints = function(graph) {
    const ap = [];

    for(const node in graph) {
        const del = graph[node];
        delete graph[node];

        if(!isConnectedComponent(graph)) {
            ap.push(node);
        }

        graph[node] = del;
    }

    return ap;
}

var isConnectedComponent = function(graph) {
    const visited = new Set();
    let count = 0;
    for(const node in graph) {
        if(dfs(graph, node, visited)) {
            count++;
        }
    }

    return count === 1;
}

var dfs = function(graph, source, visited) {
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
console.log(articulationPoints(graph))

graph = {
    0: [1, 2],
    1: [0],
    2: [0]
};
console.log(articulationPoints(graph))