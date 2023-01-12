/*
*
* Kahn’s algorithm for Topological Sorting(bfs based)
*
*/

let V;
let adj;

class Graph {
    constructor(v) {
        let V = v;
        let adj = new Array(V);
        for(let i = 0; i < V; i++) {
            adj[i] = [];
        }
        this.V = v;
        this.adj = adj;
    }

    addEdge(source, dest) {
        this.adj[source].push(dest);
    }

    topSort() {
        let V = this.V;
        let adj = this.adj;

        let indegree = new Array(V);
    
        for(let i = 0; i < V; i++) {
            indegree[i] = 0;
        }
    
        // Traverse adjacency lists to fill indegrees of vertices. This step takes O(V+E) time
        for (let i = 0; i < V; i++) {
            let temp = adj[i];
            for(let node = 0; node < temp.length; node++) {
                indegree[temp[node]]++;
            }
        }
    
        // create a queue and enqueue all vertices with indegree 0
        let queue = [];
        for(let i = 0; i < V; i++) {
            if(indegree[i] ==0) {
                queue.push(i);
            }
        }
    
        // initialize count of visited vertices
        let count = 0;
        
        // create a vector to store result (a topological ordering of the vertices)
    
        let topOrder = [];
        while(queue.length != 0) {
            // extract front of queue or perform deque and add it to topological order
            let u = queue.shift();
            topOrder.push(u);
    
            // Iterate through all its neighbouring of dequeued node of u and decrease their in-degree by 1
            for(let node = 0; node < adj[u].length; node++) {
                if(--indegree[adj[u][node]] == 0) {
                    queue.push(adj[u][node]);
                }
                count++;
            }
        }
    
        if(count != V) {
            console.log("There exists a cycle in the graph!");
            return
        }
    
        console.log(topOrder);
    }
}

let graph = new Graph(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log(
"Following is a Topological Sort");
graph.topSort();
