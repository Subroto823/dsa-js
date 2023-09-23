# What is a Spanning Tree?
A spanning tree of a graph is a subgraph that includes all the vertices of the original graph where all the vertices are connected.
And it must be acyclic, which means it cannot contain any cycles. In other words, it has to be a tree structure, not a graph that includes loops or repeated edges.


*In a connected graph with 'N' vertices, a spanning tree will always have 'N-1' edges.*

*A single graph can have many different spanning trees.*


## What is a Minimum Spanning Tree? 
A Minimum Spanning Tree (MST) of a connected, undirected graph is a spanning tree that has the minimum possible total edge weight among all the possible spanning trees of that graph.

Minimum Spanning Trees are commonly encountered in various applications and algorithms, including network design, circuit design, transportation, and more. Two well-known algorithms for finding the Minimum Spanning Tree are:

    * Prim's Algorithm: Prim's algorithm begins with an initial vertex and incrementally builds a minimum spanning tree by selecting the smallest-weight edge that connects a tree vertex to a non-tree vertex, ensuring connectivity and avoiding cycles, until all vertices are included.

    * Kruskal's Algorithm: Kruskal's algorithm considers all edges in the graph and sorts them by weight. It then adds edges to the tree one at a time in ascending order of weight, avoiding the creation of cycles. It continues until the MST is formed.

The Minimum Spanning Tree is valuable in optimization problems, where you want to minimize the cost or weight while ensuring connectivity. It helps in designing efficient and cost-effective networks and structures.


## Prim's Algorithm

## Kruskal's Algorithm
1. Start with an empty set as the MST.
2. Sort all edges in the graph by their weight in non-decreasing order.
3. Iterate through the sorted edges:
    * If adding the edge to the MST does not create a cycle, add it to the MST.
    * Otherwise, skip the edge.
4. Repeat step 3 until the MST contains (n-1) edges, where n is the number of vertices in the graph.

To check for cycles, you can use a data structure like a disjoint-set (union-find) to keep track of the components and check if the endpoints of the edge belong to the same component

* Prim's algorithm works comparetively faster than Kruskal's, if the graph is a dense graph. Otherwise Kruskal's algorithm works faster.

* Another important difference is, if the graph contains more than one component, then Kruskal's algorithm discover's minimum spanning tree for all componenent. But Prim's algorithm works only for the One component (first / source node belongs to ).