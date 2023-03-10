/**
 @Clone Graph

    Problem Statement:

    Consider a vertex type for a directed graph in which there are two fields: an integer label and a list of references to other vertices. Design an algorithm that takes a reference to a vertex u, and creates a copy of the graph on the vertices reachable from u. Return the copy of u.


    @Solution :

    # Maintain a map that maps the original vertex to its counterpart. Copy over the edges.
    # Use BFS to visit the adjacent vertices (edges).
    # Time Complexity: O(n), where n is the total number of nodes.
*/

class GraphVertex {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
    addEdgeWith(...nodes) {
        this.edges.push(...nodes);
    }
}

function cloneGraph(vertex) {
    if(!vertex) return null;

    let vertexMap = {};
    let queue = [vertex];
    vertexMap[vertex.value] = new GraphVertex(vertex.value);

    while(queue.length) {
        let currentVertex = queue.shift();
        
        currentVertex.edges.forEach( neighbor => {
            if(!vertexMap[neighbor.value]) {
                vertexMap[neighbor.value] = new GraphVertex(neighbor.value);
                queue.push(neighbor);
            }
            vertexMap[currentVertex.value].addEdgeWith(vertexMap[neighbor.value]);
        })
    }
    return vertexMap[vertex.value];
}

let n1 = new GraphVertex(1);
let n2 = new GraphVertex(2);
let n3  = new GraphVertex(3);
let n4 = new GraphVertex(4);

n1.addEdgeWith(n2, n4);
n2.addEdgeWith(n1, n3);
n3.addEdgeWith(n2, n4);
n4.addEdgeWith(n1, n3);

console.log(cloneGraph(n1));