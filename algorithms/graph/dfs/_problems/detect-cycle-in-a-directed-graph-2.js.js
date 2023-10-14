/**
Detect Cycle (in a directed graph)

Node Coloring Approach:

    The node coloring approach used in cycle detection is a technique that assigns colors to vertices during a Depth First Search (DFS) traversal of a graph.

        - White (Unvisited): Initially, all vertices are colored white, indicating that they have not been visited.
        - Gray (Being Processed): When a vertex is being processed during the DFS traversal, it is colored gray. This means it is currently under examination.
        - Black (Processed): After a vertex and all its descendants have been fully processed, it is colored black, indicating that it has been visited and processed.

    When during the DFS traversal, you encounter an edge from a "gray" vertex (currently being processed) to another "gray" vertex, it implies that you've found a backedge, and thus, a cycle.

    In a directed graph, a backedge is an edge that connects a vertex to one of its ancestors in the DFS traversal tree. 
    It essentially forms a cycle within the graph because it allows you to return to a previously visited vertex, creating a loop.

    Time Complexity: O(V+E)
*/


const COLOR = {
    WHITE: 0,
    GRAY: -1,
    BLACK: 1
}


const hasCycle = function(graph) {
    const N = graph.length;
    let colors = new Array(N).fill(COLOR.WHITE);

    for(let u = 0; u < N; u++) {
        if(colors[u] === COLOR.WHITE) {
            if(detectCycle(graph, u, colors)) {
                return true;
            }
        }
    }

    return false;
}

const detectCycle = function(graph, u, colors) {
    colors[u] = COLOR.GRAY;

    for (const v of graph[u]) {
        if(colors[v] === COLOR.WHITE && detectCycle(graph, v, colors)) {
            return true;
        }
        if(colors[v] === COLOR.GRAY) {
            return true;
        }
        
    }

    colors[u] = COLOR.BLACK;
    return false;
}

function main() {
    let graph = [
        [1],
        [2],
        [3, 4],
        [5],
        [5],
        []
    ];
    console.log(hasCycle(graph)); // false

    graph = [
        [1],
        [2],
        [3],
        [1, 4],
        []
    ]
    console.log(hasCycle(graph)); // true
}

if (require.main === module) {
    main();
}