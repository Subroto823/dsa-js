/*
*
* Time Complexity: O(N * M)
* Auxiliary Space: O(N * M)
* Time Complexity: O(V*V) as adjacency matrix is used for graph but can be made O(V+E) by using adjacency list
* Space Complexity: O(V) due to queue and color vector.
* works only if the graph is connected
* 
*/

const V = 4; // vertices

function isBipartite(graph, src) {
    // Create a color array to store colors assigned to all vertices.
    // The value '0' of colorArr[i] is used to indicate that no color is assigned
    // The value '1' is used to indicate first color is assigned and value '-1' indicates second color is assigned.

    let colorArr = new Array(V).fill(0);

    // Assign first color to source
    colorArr[src] = 1;

    // Create a queue (FIFO) of vertex numbers
    // and enqueue source vertex for BFS traversal
    let queue = [];
    queue.push(src);

    while(queue.length !== 0) {
        // dequeue a vertex from queue
        let cur = queue.shift();

        // Return false if there is a self loop
        if(graph[cur][cur] === 1) return false;

        // Find all non-colored adjacent vertices
        for(let v = 0; v < V; v++) {
            // an edge from cur to v exists
            // and destination v is not colored
            if(graph[cur][v] === 1 && colorArr[v] === 0) {
                colorArr[v] = -colorArr[cur];
                queue.push(v);
            }

            // An edge from u to v exists and destination
            //  v is colored with same color as u
            else if(graph[cur][v] == 1 && colorArr[v] == colorArr[cur]) {
                return false;
            }
        }
    }
    // If we reach here, then all adjacent vertices can
    // be colored with alternate color
    return true;
}

   
const G = [[0, 1, 0, 1],
            [1, 0, 1, 0],
            [0, 1, 0, 1],
            [1, 0, 1, 0]];

const G2 = [[0, 1, 0, 1],
            [1, 0, 1, 1],
            [0, 1, 0, 1],
            [1, 1, 1, 0]];

if(isBipartite(G2, 0)) {
    console.log("Yeeeeeeepppppp!!!!!");
} else {
    console.log("noooooooppeeeeeeee!!!!!");
}


