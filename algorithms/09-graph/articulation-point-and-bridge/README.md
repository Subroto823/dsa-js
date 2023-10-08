# Articulation Point

An articulation point (or cut vertex) in a graph is a vertex whose removal increases the number of connected components in the graph. 
In simple terms, removing an articulation point would disconnect the graph or split it into two or more separate components.

## Approach to Find Articulation Points

### Naive Approach 
One by one remove all nodes and see if removal of an node causes disconnected graph.
- Time Complexity O(V * (V + E))

### Tarjan's Algorithm

#### Idea
Tarjan's algorithm for finding articulation points in a graph uses Depth First Search (DFS) to build a DFS tree. In this tree, a vertex 'u' is considered an articulation point if either of the following conditions is true:

- 'u' is the root of the DFS tree, and it has at least two children, indicating that it's a branching point in the graph.

- 'u' is not the root of the DFS tree, and it has a child 'v' such that no vertex in the subtree rooted at 'v' has a back edge connecting to one of the ancestors of 'u' in the DFS tree.


# Bridge

A bridge in a graph is an edge whose removal increases the number of connected components in the graph. 
In other words, if you remove a bridge from a graph, it will disconnect two previously connected components. Bridges are also known as "cut edges" because they cut the graph into two or more disconnected parts.