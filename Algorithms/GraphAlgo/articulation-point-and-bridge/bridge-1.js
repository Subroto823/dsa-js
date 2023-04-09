/**
# Bridge / Cut Edge / Critical Edge
  
    # Tarjan's Algorithm (Using dfs)
    # Time Complexity: O(V + E)
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
        time++;
        disc[node] = time;
        low[node] = time;
        visited[node] = true;

        for (let neighbor of G[node]) {
            if (neighbor === parent[node]) continue;

            if (!visited[neighbor]) {
                parent[neighbor] = node;
                dfs(G, neighbor);
                low[node] = Math.min(low[node], low[neighbor]);

                if (low[neighbor] > disc[node]) {
                    bridges.push([node, neighbor]);
                }
            }
            else {
                low[node] = Math.min(low[node], low[neighbor]);
                // low[node] = Math.min(low[node], disc[neighbor])

            }
        }
    }

    dfs(G, 0);
    return bridges;
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
    [ 1, 2, 3 ], 
    [ 0, 2 ], 
    [ 0, 1 ], 
    [ 0, 4 ], 
    [ 3 ] 
];
console.log(bridge(graph));


