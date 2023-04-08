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
            if (neighbor === parent[u]) continue;

            if (visited[neighbor]) { // This is a backage
                low[u] = Math.min(low[u], disc[neighbor]);
            }

            if (!visited[neighbor]) {
                parent[neighbor] = u;
                findArticulationPoint(G, neighbor);
                low[u] = Math.min(low[u], low[neighbor]);

                if (disc[u] <= low[neighbor] && parent[u] !== -1) {
                    ap[u] = true;
                }
                noOfChildren++;
            }
            if (noOfChildren > 1 && parent[u] === -1) {
                ap[u] = true;
            }
        }
    }

    findArticulationPoint(G, 0);

    // Now ap[] contains articulation points, print them
    return ap.reduce((acc, element, i) => {
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