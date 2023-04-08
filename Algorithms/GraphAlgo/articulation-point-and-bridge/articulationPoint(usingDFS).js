/*
 * 
 * Tarjan's algorithm(dfs)
 * 
 */

class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        
        this.NIL = -1;
        this.time = 0;
        for(let i = 0; i < v; i++) {
            this.adj[i] = []
        }
    }

    // function to add edge into the graph
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }
    
    /* A recursive function that find articulation points using DFS
    # u --> The vertex to be visited next
    # visited[] --> keeps track of visited vertices
    # disc[] --> Stores discovery times of visited vertices
    # parent[] --> Stores parent vertices in DFS tree
    # ap[] --> Store articulation points 
    */
    apUtil(u, visited, disc, low, parent, ap) {
        let children = 0;
        visited[u] = true;

        // Initialize discovery time and low value
        disc[u] = low[u] = ++this.time;

        for (let i of this.adj[u]) {
            let v = i; // v is current adjacent of u

            if(!visited[v]) {
                children++;
                parent[v] = u;
                this.apUtil(v, visited, disc, low, parent, ap);

                // check if the subtree rooted with v has a connection with one of the ancestors of u
                low[u] = Math.min(low[u], low[v]);

                // (1) u is root of dfs tree and has two or more children
                if(parent[u] == this.NIL && children > 1) {
                    ap[u] = true;
                }

                // if u is not root and low value of one of its child is more than discovery value of u
                if(parent[u] != this.NIL && low[v] >= disc[u]) {
                    ap[u] = true;
                }
            } 
            // Update low value of u for parent function calls.
            else if (v != parent[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    ap() {
        let visited = new Array(this.V);
        let disc = new Array(this.V);
        let low = new Array(this.V);
        let parent = new Array(this.V);
        let ap = new Array(this.V);

        parent.fill(this.NIL);
        visited.fill(false);
        ap.fill(false);

        for(let i = 0; i < this.V; i++) {
            if(visited[i] == false) {
                this.apUtil(i, visited, disc, low, parent, ap);
            }
        }

        // Now ap[] contains articulation points, print them
        for (let i = 0; i < this.V; i++) {
            if(ap[i] == true) {
                process.stdout.write(i + " ");
            }
        }
        console.log();
    }
}

console.log("Articulation points in the graph:  ")
let graph = new Graph(7);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

graph.ap();

console.log("Articulation points in second graph: ");
let graph2 = new Graph(5);
graph2.addEdge(1, 0);
graph2.addEdge(0, 2);
graph2.addEdge(2, 1);
graph2.addEdge(0, 3);
graph2.addEdge(3, 4);
graph2.ap();