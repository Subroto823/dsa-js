/*
*
* Kahn’s algorithm for Topological Sorting(bfs based)
*
*/

let V;
let adj;

function Graph(v) {
    V = v;
    adj = new Array(V);
    for(let i = 0; i < V; i++) {
        adj[i] = [];
    }
}

function addEdge(u, v) {
    adj[u].push(v);
}

// Kahn’s algorithm for Topological Sorting
function topSort() {
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

Graph(6);
addEdge(5, 2);
addEdge(5, 0);
addEdge(4, 0);
addEdge(4, 1);
addEdge(2, 3);
addEdge(3, 1);
console.log(adj)

console.log(
"Following is a Topological Sort");
topSort();
