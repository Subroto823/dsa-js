# What is a Spanning Tree?
A Spanning tree is a subset to a connected graph G, where all the edges are connected, i.e, one can traverse to any edge from a particular edge with or without intermediates. 
* Also, a spanning tree must not have any cycle in it. Thus we can say that if there are N vertices in a connected graph then the no. of edges that a spanning tree may have is N-1.


# What is a Minimum Spanning Tree? 
Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. 
    
* A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, undirected graph is a spanning tree with a weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

* A minimum spanning tree has (V – 1) edges where V is the number of vertices in the given graph. 


# Kruskal’s algorithm 
It's uses the greedy approach to find the minimum cost of a spanning tree .

* The Greedy Choice is to pick the smallest weight edge that does not cause a cycle in the MST constructed so far.

    * Step 1: Sort all the edges in non-decreasing order of their weight

    * Step 2: Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If cycle is not formed, include this edge. Else, discard it. 

    * Step 3: Repeat step#2 until there are (V-1) edges in the spanning tree


* Time Complexity: O(ElogE) or O(ElogV),
* Sorting of edges takes O(ELogE) time. After sorting, we iterate through all edges and apply the find-union algorithm. 
* The find and union operations can take at most O(LogV) time. So overall complexity is O(ELogE + ELogV) time. The value of E can be at most O(V2), so O(LogV) is O(LogE) the same. Therefore, the overall time complexity is O(ElogE) or O(ElogV)

* Auxiliary Space: O(V + E), where V is the number of vertices and E is the number of edges in the graph


###
* Prim's algorithm works comparetively faster than Kruskal's, if the graph is a dense graph. Otherwise Kruskal's algorithm works faster.

* Another important difference is, if the graph contains more than one component, then Kruskal's algorithm discover's minimum spanning tree for all componenent. But Prim's algorithm works only for the One component (first / source node belongs to ).