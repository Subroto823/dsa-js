/**
 @Deadlock Detection (Cycle in directed graph)

    Problem Statement

    One deadlock detection algorithm makes use of a “wait-for” graph to track which other processes a process is currently blocking on. In a wait-for graph, processes are represented as nodes, and an edge from process P to 0 implies 0 is holding a resource that P needs and thus P is waiting for 0 to release its lock on that resource. A cycle in this graph implies the possibility of a deadlock. This motivates the following problem.
    
    Write a program that takes as input a directed graph and checks if the graph contains a cycle.


    @Solution :

    # Every vertex will be assigned 3 different colors: white, gray and black. Initially all vertices will be colored white. When a vertex is being processed, it will be colored gray and after processing black.

    # Use Depth First Search to traverse the graph.
    # If there is an edge from a gray vertex to another gray vertex, we’ve discovered a back edge (a self-loop or an edge that connects to one of its ancestors), hence a cycle is detected.
    
    # Time Complexity: O(V+E)
*/

const { Graph } = require("./helper/Graph");

const COLORS = {
    WHITE: "white",
    GRAY: "gray",
    BLACK: "black"
}

Object.freeze(COLORS);

function isDeadLocked(graph) {
    let color = new Array(graph.vertices).fill(COLORS.WHITE);

    for(let i = 0; i < graph.vertices; i++) {
        if(color[i] === COLORS.WHITE) {
            if(detectCycle(graph, i, color)) {
                return true;
            }
        }
    }
    return false;
}

function detectCycle(graph, vertex, color) {
    color[vertex] = COLORS.GRAY;
    let nextNode = graph.list[vertex].getHead();
    let neighbor;

    while(nextNode) {
        neighbor = nextNode.data;
        if(color[neighbor] === COLORS.GRAY) {
            return true;
        }
        if(color[neighbor] === COLORS.WHITE && detectCycle(graph, neighbor, color)) {
            return true;
        }
        nextNode = nextNode.next;
    }
    color[vertex] = COLORS.BLACK;
    return false;
}

let graph = new Graph(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
console.log(isDeadLocked(graph));