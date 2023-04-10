# Articulation Point

A vertex / node in an undirected connected graph is an articulation point (or cut vertex) if removing it (and edges through it) disconnects the graph.

* Articulation points represent vulnerabilities in a connected network – single points whose failure would split the network into 2 or more components. 

* They are useful for designing reliable networks. For a disconnected undirected graph, an articulation point is a vertex removal which increases the number of connected components


* Following the below steps to Implement the idea:

   # Iterate over all the vertices and for every vertex do the following:
        # Remove v from graph
        # See if the graph remains connected (We can either use BFS or DFS) 
        # Add v back to the graph

# Complexity
Time Complexity: O(V*(V+E)) for a graph represented using an adjacency list.
Auxiliary Space: O(V+E)


# Tarjan's algorithm(dfs):

* The idea is to use DFS (Depth First Search). In DFS, follow vertices in a tree form called the DFS tree. In the DFS tree, a vertex u is the parent of another vertex v, if v is discovered by u. 

* In DFS tree, a vertex u is an articulation point if one of the following two conditions is true. 

    u is the root of the DFS tree and it has at least two children. 

    u is not the root of the DFS tree and it has a child v such that no vertex in the subtree rooted with v has a back edge to one of the ancestors in DFS tree of u.


# Follow the below steps to Implement the idea:

* Do DFS traversal of the given graph 
    * In DFS traversal, maintain a parent[] array where parent[u] stores the parent of vertex u.

    * To check if u is the root of the DFS tree and it has at least two children. For every vertex, count children. If the currently visited vertex u is root (parent[u] is NULL) and has more than two children, print it. 

    * To handle a second case where u is not the root of the DFS tree and it has a child v such that no vertex in the subtree rooted with v has a back edge to one of the ancestors in DFS tree of u maintain an array disc[] to store the discovery time of vertices.
    
    * For every node u, find out the earliest visited vertex (the vertex with minimum discovery time) that can be reached from the subtree rooted with u. So we maintain an additional array low[] such that: 
    
    * low[u] = min(disc[u], disc[w]) , Here w is an ancestor of u and there is a back edge from some descendant of u to w.