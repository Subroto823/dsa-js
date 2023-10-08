/**
 * Bridge
 * Tarjan's Algorithm
 * Time Complexity: O(V + E)
 */

var bridge = function (G) {
    const N = G.length;
    const disc = new Array(N).fill(-1);
    const low = new Array(N).fill(0);
    const bridges = [];
    let time = 0;


    var dfs = function (u, parent) {
        disc[u] = low[u] = time++;

        for (let v of G[u]) {
            if (disc[v] == -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);

                if (disc[u] < low[v]) {
                    bridges.push([u, v]);
                }
            } else if (v !== parent) {
                low[u] = Math.min(low[u], disc[v])
            }
        }
    }

    for (let i = 0; i < N; i++) {
        if (disc[i] === -1) {
            dfs(i, -1);
        }
    }

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
    [1, 2, 3],
    [0, 2],
    [0, 1],
    [0, 4],
    [3]
];
console.log(bridge(graph));