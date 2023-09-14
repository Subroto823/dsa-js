# Dijkstra's Algorithm
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks. (from Wikipedia)

* It's a Greedy algorithm and doesn’t work for Graphs with negative weights. To handle graphs with negative-weight edges, we can use alternative algorithms like Bellman-Ford.

## Algorithm (for Adjacency List)
1. Initialize all nodes' distances to infinity, except the start node, which is set to 0.
2. Create a queue(or min priority queue) and add the start node.
3. While the queue(or min priority queue) is not empty:
    * Dequeue the min distance node.
    * For each neighbor of the dequeued node:
        - Calculate the tentative distance from the start node.
        - If this tentative distance is less than the current recorded distance for the neighbor, update the neighbor's distance.
        - Enqueue the neighbor if it has been updated.

* Repeat step 3 until the queue is empty or you have reached the destination node (if you are looking for the shortest path to a specific node).

* The distances recorded for each node after the algorithm terminates, represent the shortest distances from the start node to all other nodes in the graph.


## Dijkstra's Algorithm Applications
* To find the shortest path
* In social networking applications
* In a telephone network
* To find the locations in the map