/*
# Bridge / Cut Edge / Critical Edge
    
    # Tarjan's Algorithm (Using dfs)
    # Time Complexity: O(V + E)
 */

function bridge(G) {
    const N = G.length,
        visited = new Array(N).fill(false),
        disc = new Array(N).fill(0),
        low = new Array(N).fill(0),
        bridges = [];
    let time = 0;


    function dfs(node, prev = -1) {
        visited[node] = true;
        disc[node] = low[node] = ++time;
    
        for (let neighbor of G[node]) { 
            if(neighbor === prev) continue;

            if (!visited[neighbor]) {
                dfs(neighbor, node);
                low[node] = Math.min(low[node], low[neighbor]);
    
                if (disc[node] < low[neighbor]) {
                    bridges.push([node, neighbor]);
                }
            }
            else {
                low[node] = Math.min(low[node], disc[neighbor])
            }
        }
    }

    dfs(0);
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