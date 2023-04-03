/*
 * 
 * Time Complexity:  O(V * E), where V is the number of vertices in the graph and E is the number of edges in the graph
 * Auxiliary Space: O(E)
 * 
 */

class Graph {
    // A class to represent a weighted edge in graph
    class Edge {
        int src, dest, weight;
        Edge() { src = dest = weight = 0; }
    };

    private int V, E;
    private Edge edge[];

    // Creates a graph with V vertices and E edges
    Graph(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[e];
        for (int i = 0; i < e; ++i) {
            edge[i] = new Edge();
        }
    }

    int edgeIndx = 0;
    void addEdge(int src, int dest, int weight) {
        edge[edgeIndx].src = src;
        edge[edgeIndx].dest = dest;
        edge[edgeIndx].weight = weight;

        edgeIndx++;
    }

    void BellmanFord(Graph graph, int src){

        int dist[] = new int[V];

        // Step 1: Initialize distances from src to all other vertices as INFINITE
        for(int i = 0; i < V; ++i) {
            dist[i] = Integer.MAX_VALUE;
        }

        dist[src] = 0;

        // Step 2: Relax all edges |V| - 1 times. A simple shortest path from src to any other vertex can have at-most |V| - 1 edges
        for(int i = 1; i < V; i++) {
            for(int j = 0; j < E; j++) {
                int u = graph.edge[j].src;
                int v = graph.edge[j].dest;
                int weight = graph.edge[j].weight;

                if(dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }

        // Step 3: check for negative-weight cycles. The above step guarantees shortest distances if graph doesn't contain negative weight cycle. If we get a shorter path, then there is a cycle.
        for(int j = 0; j < E; ++j) {
            int u = graph.edge[j].src;
            int v = graph.edge[j].dest;
            int weight = graph.edge[j].weight;

            if(dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                System.out.println("Graph contains negative weight cycle");
                return;
            }
        }

        printArr(dist, V);
    }

    void printArr(int dist[], int V) {
        System.out.println("Vertex Distance from Source");
        for (int i = 0; i < V; ++i) {
            System.out.println(i + "\t\t" + dist[i]);
        }
    }

    public static void main(String[] args) {
        // int V = 5; // Number of vertices in graph
        // int E = 8; // Number of edges in graph

        // Graph graph = new Graph(V, E);

        // graph.addEdge(0, 1, -1);
        // graph.addEdge(0, 2, 4);
        // graph.addEdge(1, 2, 3);
        // graph.addEdge(1, 3, 2);
        // graph.addEdge(1, 4, 2);
        // graph.addEdge(3, 2, 5);
        // graph.addEdge(3, 1, 1);
        // graph.addEdge(4, 3, 3);

        // graph.BellmanFord(graph, 0);


        Graph graphTwo = new Graph(6, 6);

        graphTwo.addEdge(0, 1, 10);
        graphTwo.addEdge(1, 2, 1);
        graphTwo.addEdge(1, 3, 4);
        graphTwo.addEdge(2, 4, 3);
        graphTwo.addEdge(4, 3, -11);
        graphTwo.addEdge(4, 5, 22);
        
        graphTwo.BellmanFord(graphTwo, 0);
    }
}
