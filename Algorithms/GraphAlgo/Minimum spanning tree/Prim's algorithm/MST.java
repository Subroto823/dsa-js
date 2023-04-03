/*
 *
 * Time Complexity: O(V^2), If the input graph is represented using an adjacency list, then the time complexity of Prim’s algorithm can be reduced to 
 * O(E log E) with priority queue or 
 * O(E log V) with the help of a binary heap. 
 * In this implementation, we are always considering the spanning tree to start from the root of the graph
 * Auxiliary Space: O(V)
 * 
 */

// minimum spanning tree
class MST {
    // number of vertices in the graph
    private static final int V = 5;

    // a utility function to find the vertex with minimum distance's(weight) index, from the set of vertices not yet add in MST
    int minKey(int distance[], boolean visited[]) {
        // Initialize min value
        int min = Integer.MAX_VALUE;
        int min_index = -1;

        for(int i = 0; i < V; i++) {
            if(visited[i] == false && distance[i] < min) {
                min = distance[i];
                min_index = i;
            }
        }
        return min_index;
    }

    // a utility function to print the constructed MST stored in a mst[]
    void printMST(int mst[], int graph[][]) {
        System.out.println("Edge \t Weight");
        for (int i = 0; i < V; i++) {
            if(i == mst[i]) continue;

            System.out.println(mst[i] + " - " + i + "\t"  + graph[i][mst[i]]);
        }

       //System.out.println(Arrays.toString(mst));
    }

    // function to construct and print MSt for a graph represented using adjacency matrix representation
    void primMST(int graph[][], int src) {
        // Array to store constructed MST
        int mst[] = new int[V];

        // distance values used to pick minimum weight edge in cut 
        int distance[] = new int[V];

        // to represent set of vertices included in MST
        boolean visited[] = new boolean[V];

        for(int i = 0; i < V; i++) {
            distance[i] = Integer.MAX_VALUE;
        }

        distance[src] = src; // so that this vertex is picked as first vertex
        mst[src] = src; // first node is always the root of MST

        for(int count = 0; count < V - 1; count++) {
             //Pick thd minimum distance vertex from the set of vertices not yet included in MST
            int u = minKey(distance, visited);
            visited[u] = true;

            for(int v = 0; v < V; v++) {
                // graph[u][v] is non zero only for adjacent vertices of m
                // visited[v] is false for vertices not yet included in MST
                // update the distance if graph[u][v] is smaller than distance[v]

                if(graph[u][v] != 0 && !visited[v] && graph[u][v] < distance[v]) {
                    mst[v] = u;
                    distance[v] = graph[u][v];
                }
            }
        }

        printMST(mst, graph);
    }

    public static void main(String[] args) {
        MST t = new MST();
        int graph[][] = { { 0, 2, 0, 6, 0 },
                          { 2, 0, 3, 8, 5 },
                          { 0, 3, 0, 0, 7 },
                          { 6, 8, 0, 0, 9 },
                          { 0, 5, 7, 9, 0 } };

        t.primMST(graph,1);
    }
}
