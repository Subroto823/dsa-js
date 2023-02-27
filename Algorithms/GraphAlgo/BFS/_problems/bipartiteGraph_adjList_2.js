class Pair {
    constructor (vertex, color) {
        this.vertex = vertex;
        this.color = color;
    }
}

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
            queue.push(new Pair(i, 0));
            colors[i] = 0;

            while (queue.length !== 0) {
                let cur = queue[0];
                queue.shift();

                // current vertex
                let vertex = cur.vertex;

                // color of current vertex
                let color = cur.color;

                // traversing vertexes connected to current vertex
                for (let next of adj[vertex]) {

                    // if already coloured with parent vertex color then bipartite graph is not possible
                    if (colors[next] == color) return false;

                    // if uncolored
                    if (colors[next] == -1) {
                        // coloring with opposite color to that of parent
                        colors[next] = (color === 1) ? 0 : 1;
                        queue.push(new Pair(next, colors[next]));
                    }
                }
            }
        }
    }
    // if all vertexes are colored such that no two connected vertex have same colors
    return true;
}

class AdjacencyList {
    constructor (vertex) {
        let adjacencyList = [];
        for(let i = 0; i < vertex; i++) adjacencyList.push([]);

        this.adjacencyList = adjacencyList;
    }
    
    addEdge(source, node) {
        this.adjacencyList[source].push(node);
    }
}

const V = 4;
const adj = new AdjacencyList(V);

adj.addEdge(0, 1);
adj.addEdge(0, 3);
//adj.addEdge(0, 2);

adj.addEdge(1, 0);
adj.addEdge(1, 2);

adj.addEdge(2, 1);
adj.addEdge(2, 3);

adj.addEdge(3, 0);
adj.addEdge(3, 2);

let isGraphBipartite = isBipartite(V, adj.adjacencyList);

isGraphBipartite ? console.log("Yes!!!!!!!") : console.log("Nopeeeee!!!!!!");