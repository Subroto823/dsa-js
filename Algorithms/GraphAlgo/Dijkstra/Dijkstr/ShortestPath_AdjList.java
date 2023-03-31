import java.util.ArrayList;
import java.util.Arrays;

public class ShortestPath_AdjList {
    static final int V = 5;

    // A utility function to find the vertex with minimum
    // distance value, from the set of vertices not yet
    // included in shortest path tree
    int minDistance(int distance[], boolean visited[]) {
        int min = Integer.MAX_VALUE;
        int min_index = -1;

        for (int i = 0; i < distance.length; i++) {
            if(visited[i] == false && distance[i] <= min) {
                min = distance[i];
                min_index = i;
            }
        }
        return min_index;
    }

    void printDistances(int distance[]) {
        System.out.println("Vertex \t\t Distance from Source");
        for(int i = 0; i < V; i++) {
            System.out.println(i + " \t\t " + distance[i]);
        }
    }

    // Function that implements Dijkstra's single source shortest path algorithm for a graph represented using adjacency matrix representation

    void dijkstra(int graph[][][], int src) {
        int distance[] = new int[V];

        // visited[i] will true if vertex i is included in shortest path tree or shortest distance from src to i is finalized

        boolean visited[] = new boolean[V];

        for(int i = 0; i < V; i++) {
            distance[i] = Integer.MAX_VALUE;
        }

        distance[src] = 0;

        // Find shortest path for all vertices
        for(int i = 0; i < V; i++) {
            // Pick the minimum distance vertex/node from the set of vertices/nodes not yet processed. curNode is always equal to src in first iteration.
            int curNode = minDistance(distance, visited);

            // Mark the picked vertex as visited/true
            visited[curNode] = true;

            // Update distance value of the adjacent vertices of the picked vertex.

            for(int j = 0; j < V; j++) {
                for(int v = 0; v < graph[curNode].length; v++) {
                    int adjacentNode = graph[curNode][v][0];
                    int weight = graph[curNode][v][1];

                    if(!visited[j] 
                       && distance[curNode] != Integer.MAX_VALUE
                       && distance[curNode] + weight < distance[adjacentNode]) {
                       distance[adjacentNode] = distance[curNode] + weight;
                   }
                }
            }
        }

        printDistances(distance);
    }

    public static void main(String[] args) {

        // {connected_node, weight}
        int graph[][][] = {{{1, 2},{2, 9}, {3, 6}},
                           {{0, 2},{3, 2}, {4, 7}},
                           {{0, 9}, {3, 1}},
                           {{1, 2}, {2, 1}, {4, 1}},
                           {{1, 7},{ 3, 1}} };
                                      
        ShortestPath_AdjList t = new ShortestPath_AdjList();
        t.dijkstra(graph, 0);
    }
}

