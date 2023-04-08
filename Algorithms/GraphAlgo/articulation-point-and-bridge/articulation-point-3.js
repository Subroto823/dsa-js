/**
# Articulation Point / Cut Node / Critical Point
  
    # Tarjan's Algorithm
    # Using only one dfs

    # Time Complexity: O(V + E)
 */

    function articulationPoint(G) {
        const N = G.length,
            visited = new Array(N).fill(false),
            parent = new Array(N).fill(-1),
            disc = new Array(N).fill(0),
            low = new Array(N).fill(0),
            ap = new Array(N).fill(false);
        let time = 0;
    
        function findArticulationPoint(G, u) {
            let noOfChildren = 0;
            time++;
            disc[u] = time;
            low[u] = time;
            visited[u] = true;
    
            for (let neighbor of G[u]) {
                if (!visited[neighbor]) {
                    noOfChildren++;
                    parent[neighbor] = u;
                    findArticulationPoint(G, neighbor);
    
                    // check if the subtree rooted with neighbor has a connection with one of the ancestors of u
                    low[u] = Math.min(low[u], low[neighbor]);
    
                    // (1) u is root of dfs tree and has two or more children
                    if (parent[u] === -1 && noOfChildren > 1) {
                        ap[u] = true;
                    }
    
                    // if u is not root and low value of one of its child is more than discovery value of u
                    if (parent[u] !== -1 && disc[u] <= low[neighbor]) {
                        ap[u] = true;
                    }
                }
                // Update low value of u for parent function calls.
                else if (neighbor !== parent[u]) {
                    low[u] = Math.min(low[u], disc[neighbor]);
                }
            }
        }
        findArticulationPoint(G, 0);
        return ap;
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