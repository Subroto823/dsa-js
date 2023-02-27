# Graph
* A graph is a non-linear data structure that consists of a finite number of vertices(also called nodes) connected by edges

* Trees are a specific type of graph data structure


# Types :

   * Directed Graph
      * A graph in which the edges have a direction
      * Edges are usually represented by arrows pointing in the direction the graph can be traversed

   * Undirected Graph
      * A graph in which the edges are bidirectional
      * The graph can be traversed in either direction
      * The absence of an arrow tells us that the graph is undirected

    # More Types of Graph :
      * A graph can have only vertices with no edges
      * Multiple edges from one node
      * Cycles in the graph
      * Self loop on a node
      * Can be disconnected
      * A graph may contains weights on edges representing the cost of traversing that edge

# Usage :
    # Google maps
    # Social media sites

# Graph Represention : 
    # Graphs are commonly represented in two ways
        # Adjacency Matrix
        # Adjacency List


   # Adjacency Matrix

   * An adjacency matrix is a 2D array of size V*V where V is the number of vertices in the graph
   * Each row and column represent a vertex
   * If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and j
    

    # Adjacency List

    * Vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices


# Adjacency Matrix vs Adjacency List

  * With an adjacency list, we only need to store the values for the edges that exist.

  * With adjacency matrix, we store values irrespective of whether an edge exist or not.

  * Storage wise, an adjacency list is way more efficient.

  * With adjacency list, inserting and finding adjacenct nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.

  * An adjacency list allows us to store additional values with an edges such as weight of the edge.
  * With adjacency matrix, such information would have to be stored externally.