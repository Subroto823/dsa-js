# Belman Ford
* Given a graph and a source vertex src in the graph, find the shortest paths from src to all vertices in the given graph. The graph may contain negative weight edges. 

    * Dijkstra’s algorithm is a Greedy algorithm and the time complexity is O((V+E)LogV) (with the use of the Fibonacci heap). 
    * Dijkstra doesn’t work for Graphs with negative weights. Bellman-Ford works for such graphs.
    * Bellman-Ford is also simpler than Dijkstra and suites well for distributed systems. 
    * But time complexity of Bellman-Ford is O(V * E), which is more than Dijkstra.

* Like other Dynamic Programming Problems, the algorithm calculates the shortest paths in a bottom-up manner. It first calculates the shortest distances which have at most one edge in the path. Then, it calculates the shortest paths with at-most 2 edges, and so on.

* After the i-th iteration of the outer loop, the shortest paths with at most i edges are calculated. There can be maximum |V| – 1 edges in any simple path, that is why the outer loop runs |v| – 1 times.

* The idea is, assuming that there is no negative weight cycle if we have calculated shortest paths with at most i edges, then an iteration over all edges guarantees to give the shortest path with at-most (i+1) edges


# Notes:
* Negative Cycle: A negative cycle is a cycle whose edges are such that the sum of their weights is a negative value.

    * Negative weights are found in various applications of graphs. For example, instead of paying the cost for a path, we may get some advantage if we follow the path.

    * Bellman-Ford works better (better than Dijkstra’s) for distributed systems. Unlike Dijkstra’s where we need to find the minimum value of all vertices, in Bellman-Ford, edges are considered one by one.                                                   
    * Bellman-Ford does not work with an undirected graph with negative edges as it will be declared as a negative cycle.


# Algorithm:

* Step 1: Initialize distances from src to all other vertices as INFINITE

* Step 2: Relax all edges |V| - 1 times. A simple shortest path from src to any other vertex can have at-most |V| - 1 edges

* Step 3: check for negative-weight cycles. The above step guarantees shortest distances if graph doesn't contain negative weight cycle. If we get a shorter path, then there is a cycle.