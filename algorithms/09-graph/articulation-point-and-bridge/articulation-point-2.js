/**
 * Articulation Point
 * Tarjan's Algorithm
 * Time Complexity: O(V + E)
 */

/**
 * 1. Perform Depth First Search (DFS) on the graph, starting from any vertex.
 * 2. During DFS, maintain the following information for each vertex 'u':
    - discovery_time[u]: The time when 'u' was first discovered during DFS.
    - low[u]: The lowest discovery time of any vertex reachable from 'u', including 'u' itself.
    - is_articulation[u]: A flag to mark 'u' as an articulation point.
 * 3. While traversing the graph, identify articulation points based on two cases:
    - If 'u' is the root of the DFS tree and it has two or more children, mark 'u' as an articulation point.
    - For other vertices 'u', check if any child 'v' of 'u' has a low value greater than or equal to the discovery_time of 'u'. If so, mark 'u' as an articulation point.
 * 4. Continue the DFS traversal, and for each connected component of the graph, repeat the above steps with a different starting vertex if needed.
 * 5. The vertices marked as articulation points are the result of the algorithm.
 */

var articulationPoint = function(G) {
    const N = G.length;
    const discoveryTime = new Array(N).fill(-1);
    const low = new Array(N).fill(0);
    const isArticulation = new Array(N).fill(false);
    let time = 0;

    var dfs = function (u, parent) {
        discoveryTime[u] = time;
        low[u] = time;
        time++;
        let children = 0;

        for (const v of G[u]) {
            if (discoveryTime[v] === -1) {
                children++;
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);

                if (parent === -1 && children > 1) {
                    isArticulation[u] = true;
                }

                if (parent !== -1 && discoveryTime[u] <= low[v]) {
                    isArticulation[u] = true;
                }
            } else if (v !== parent) {
                low[u] = Math.min(low[u], discoveryTime[v]);
            }
        }
    }
    
    for (let i = 0; i < N; i++) {
        dfs(i, -1);
    }

    return isArticulation.reduce((acc, element, i) => {
        if (element) acc.push(i);
        return acc;
    }, []);
}

let graph = [
    [1, 2],
    [0, 2],
    [0, 1]
];
console.log(articulationPoint(graph))

graph = [
    [1],
    [0, 2],
    [1]
];
console.log(articulationPoint(graph))

graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1],
    [0, 4],
    [3]
];
console.log(articulationPoint(graph))