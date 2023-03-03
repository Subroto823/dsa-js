/**
@Making Wired Connections (is bipartite)

Problem Statement:

    Design an algorithm that takes a set of pins and a set of wires connecting pairs of pins, and determines if it is possible to place some pins on the left half of a PCB, and the remainder on the right half, such that each wire is between left and right halves. Return such a division, if one exists.


    @Solution :

    Model the set as a graph. The pins are represented by the vertices and the wires connecting them are the edges. We’ll implement the graph using an edge list.

    The pairing described in the problem statement is possible only if the vertices (pins) can be divided into “2 independent sets, U and V such that every edge (u,v) either connects a vertex from U to V or a vertex from V to U.” (Source) Such a graph is known as a Bipartite graph.

    To check whether the graph is bipartite, we’ll use the graph coloring technique. Since we need two sets of pins, we have to check if the graph is 2-colorable (which we’ll represent as 0 and 1).

    Initially, all vertices are uncolored (-1). If adjacent vertices are assigned the same colors, then the graph is not bipartite. 

    Extra step: We will handle the case of a graph that is not connected. The outer for loop takes care of that by iterating over all the vertices.


    @Pseudocode :

    function isBipartite
        1. Initialize an array to store uncolored vertices
        2. Iterate through all vertices one by one
        3. Assign one color (0) to the source vertex
        4. Use DFS to reach the adjacent vertices
        5. Assign the neighbors a different color (1 - current color)
        6. Repeat steps 3 to 5 as long as it satisfies the two-colored     constraint
        7. If a neighbor has the same color as the current vertex, break the loop and return false

    Time Complexity: O(V+E)
*/

function isBipartite(graph) {
    const color = new Array(graph.length).fill(-1);
    let stack = [];
    let vertex;

    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) {
            stack.push(i);
            color[i] = 0;

            while (stack.length) {
                vertex = stack.pop();

                for (let neighbor of graph[vertex]) {
                    if (color[neighbor] === -1) {
                        stack.push(neighbor);
                        color[neighbor] = 1 - color[vertex];
                    }
                    else if (color[neighbor] === color[vertex]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

let res = isBipartite([[], [2, 4, 6], [1, 4, 8, 9], [7, 8], [1, 2, 8, 9], [6, 9], [1, 5, 7, 8, 9], [3, 6, 9], [2, 3, 4, 6, 9], [2, 4, 5, 6, 7, 8]]);
console.log(res);