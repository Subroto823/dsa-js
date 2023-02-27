/*
*
* Time Complexity: O(V+E)
* Auxiliary Space: O(V)
* Space Complexity: O(V) due to queue and color array.
* 
*/

function isBipartite(V, adj) {
    // vector to store colour of vertex
    // assigning all to -1 i.e. uncoloured
    // colours are either 0 or 1
    // for understanding take 0 as red and 1 as blue
    let colors = new Array(V).fill(-1);

    // queue for BFS storing {vetex, color}
    let queue = []

    // loop incase graph is not connected
    for (let i = 0; i < V; i++) {

        // if not colored
        if (colors[i] == -1) {
            // coloring with 0 i.e red
            queue.push([i, 0]);
            colors[i] = 0;

            while (queue.length !== 0) {
                let p = queue.shift();

                // current vertex
                let v = p[0];

                // color of current vertex
                let c = p[1];

                // traversing vertexes connected to current vertex
                for (let next of adj[v]) {

                    // if already coloured with parent vertex color then bipartite graph is not possible
                    if (colors[next] == c) return false;

                    // if uncolored
                    if (colors[next] == -1) {
                        // coloring with opposite color to that of parent
                        colors[next] = (c === 1) ? 0 : 1;
                        queue.push([next, colors[next]])
                    }
                }
            }
        }
    }
    // if all vertexes are colored such that no two connected vertex have same colors
    return true;
}

const V = 4;

// adjacency list for storing graph
let adj = [];

for (let i = 0; i < V; i++) {
    adj.push([]);
}

adj[0].push(1);
adj[0].push(3);
//adj[0].push(2);


adj[1].push(0);
adj[1].push(2);

adj[2].push(1);
adj[2].push(3);

adj[3].push(0);
adj[3].push(2);

let ans = isBipartite(V, adj);

if (ans) {
    console.log("Yes!!!!!!!");
} else {
    console.log("Nopeeeee!!!!!!");
}