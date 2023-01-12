/*
Yet another way to represent a graph is to put it in an incidence matrix.

An incidence matrix is a two-dimensional (2D) array. Generally speaking, an incidence matrix relates two different classes of objects between its two dimensions. This kind of matrix is similar to an adjacency matrix. However, the rows and columns mean something else here.

In graphs, we have edges and nodes. These will be our "two different classes of objects". This matrix will have the rows be the nodes and columns be the edges. This means that we can have an uneven number of rows and columns.

Each column will represent a unique edge. Also, each edge connects two nodes. To show that there is an edge between two nodes, you will put a 1 in the two rows of a particular column.  */


const incMatUndirected = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
];


/* To make a directed graph, use -1 for an edge leaving a particular node and 1 for an edge entering a node. */

var incMatDirected = [
    [0, -1, 1, -1],
    [-1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, -1, 0]
];
