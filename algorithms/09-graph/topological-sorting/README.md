# Topological Sorting

* Topological sort is a graph traversal in which each node v is visited only after all its dependencies are visited.

    * The first vertex in topological sorting is always a vertex with an in-degree of 0 (a vertex with no incoming edges).

    * Note: Topological Sorting for a graph is not possible if the graph is not a Directed Acyclic Graph (DAG).


# Algorithm (bfs based) 
 
* Step-1: Compute in-degree (number of incoming edges) for each of the vertex present in the DAG.
* Step-2: Pick all the vertices with in-degree as 0 and add them into a queue.
* Step-3: Remove a vertex from the queue and then add it to the sorted array.
* Step-4: Decrease in-degree by 1 for all its neighbouring nodes.
If the in-degree of neighbouring nodes is reduced to zero, then add it to the queue.
* Step 5: Repeat Step 3 until the queue is empty.
     
    
    # Time Complexity: O(V+E)
    The outer for loop will be executed V number of times and the inner for loop will be executed E number of times.

    # Auxiliary Space: O(V)
    The queue needs to store all the vertices of the graph. So the space required is O(V)