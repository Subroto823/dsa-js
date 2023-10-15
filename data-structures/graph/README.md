## What is a Graph?
A **Graph** is a fundamental data structure used to represent a collection of objects and their connections. 
It is a **non-linear** data structure that consists of a finite number of vertices(nodes) connected by edges.

## Graph Components
- **Node (Vertex)**: Represents an element in the graph.
- **Adjacent Node (Neighbor)**: Nodes directly connected to a given node.
- **Edge**: Represents a connection between two nodes.
- **Subgraph**: A subset of nodes and edges within a graph.
- **Directed Graph (Digraph)**: Edges have a direction from one node to another.
- **Undirected Graph**: Edges have no direction.
- **Weighted Graph**: Edges have weights (values associated with them).
- **Unweighted Graph**: Edges have no associated weights.

  Example:
    1. Undirected Graph
         A --- B
         |     | \
         C --- D - E

     Here, A, B, C, D, E are nodes.

     The Adjacent nodes of:
     - A are B, C, and D.
     - B are A, D, and E.
     - C are A and D.
     - D are A, B, C, and E.
     - E are B and D.

     There are no direct edges between:
     - A and D
     - A and E
     - C and B
     - C and E

     As the edges have no direction, the graph is undirected.
      

    2. Directed Graph (Digraph)
        A --> B
        |     |
        v     v
        C <-- D

     In this directed graph:
     - A, B, C, D are nodes.
     - The Adjacent nodes of:
       - A are C and B.
       - B is D.
       - C has no adjacent nodes.
       - D is C.

     - There's a directed edge from A to B, A to C, B to D, and D to C.
     - The direction of edges matters; for example, there's an edge from A to B, but no direct edge from B to A


## Graph Terminology
- **Path**: A sequence of nodes where each adjacent pair is connected by an edge.
- **Degree**: The number of edges incident on a node.
- **In-Degree (Directed Graphs)**: The number of incoming edges to a node.
- **Out-Degree (Directed Graphs)**: The number of outgoing edges from a node.
  
  1. Degree (Undirected Graph):

    A --- B
    |     |
    C     D

  In this undirected graph, degree of node,
    - A is 2
    - B is 2
    - C is 1
    - D is 1


  2. In-Degree and Out-Degree(Directed Graph):

    A --> B
    |     |
    v     v
    C <-- D

  In this directed graph, in-degree and out-degrees of nodes are,
    - A
      - indegree 0
      - outdegree 2
    - B
      - indegree 1
      - outdegree 1
    - C
      - indegree 0
      - outdegree 0
    - D
      - indegree 1
      - outdegree 1


# Graph Examples and Properties

## Directed Graph
      * A graph in which the edges have a direction
      * Edges are usually represented by arrows pointing in the direction the graph can be traversed

## Undirected Graph
      * A graph in which the edges are bidirectional
      * The graph can be traversed in either direction
      * The absence of an arrow tells us that the graph is undirected

## Weighted Graph
- **Example**: Airline route map.
- **Properties**: Edges have weights representing distances, travel times, or costs.

## Unweighted Graph
- **Example**: Friendship network.
- **Properties**: Edges indicate friendships with no specific weights.

## Path and Tree
- **Path**: A sequence of nodes that connects two nodes.
- **Tree**: A special type of graph with no cycles; it's acyclic and connected.

# Special Types of Graphs

## Complete Graph
- **Definition**: A graph where every pair of distinct nodes is connected by an edge.
- **Example**: A round-robin tournament where every team plays every other team once.

## Cycle (Cyclic Graph)
- **Definition**: A graph containing at least one cycle (a closed path).
- **Example**: A bicycle wheel, where you can move in a circular path.

## Wheel Graph
- **Definition**: A special type of cyclic graph where a single node is connected to all others.
- **Example**: The center of a wagon wheel connected to all the spokes.

## Bipartite Graph
- **Definition**: A graph where nodes can be divided into two distinct sets, and all edges connect nodes from different sets.
- **Example**: A job matching system with employers and job seekers.


## Usage
- Google maps
- Social media sites


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