/*
Tarjan's algorithm (dfs) 

 */

function bridge(G) {
    const N = G.length,
        visited = new Array(N).fill(false),
        disc = new Array(N).fill(0),
        low = new Array(N).fill(0),
        parent = new Array(N).fill(-1),
        bridges = [];
    let time = 0;


    function dfs(G, node) {
        visited[node] = true;
        disc[node] = low[node] = ++time;
    
        for (let neighbor of G[node]) {    
            if (!visited[neighbor]) {
                parent[neighbor] = node;
                dfs(G, neighbor);
                // check if the subtree rooted with v has a connection with one of the ancestors of u
                low[node] = Math.min(low[node], low[neighbor]);
    
                // If the lowest vertex reachable from subtree under 'neighbor' is below 'node' in DFS tree, then node-neighbor is a bridge
                if (disc[node] < low[neighbor]) {
                    bridges.push([node, neighbor]);
                }
            }
            
            else if (neighbor !== parent[node]) {
                low[node] = Math.min(low[node], disc[neighbor])
            }
        }
    }

    dfs(G, 0);
    return bridges
}

let graph = [
    [1, 2],
    [0, 2],
    [0, 1, 3],
    [2, 4, 5],
    [3, 5],
    [4, 3]
];
console.log(bridge(graph));

graph = [
    [1, 2],
    [0, 2, 3, 4, 6],
    [1, 0],
    [1, 5],
    [1, 5],
    [3, 4],
    [1]
];
console.log(bridge(graph));

graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1],
    [0, 4],
    [3]
];
console.log(bridge(graph));