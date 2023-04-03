import java.util.Iterator;
import java.util.LinkedList;

public class Bridge {
    private int V;

    // array of lists for adjacency list representation
    private LinkedList<Integer> adj[];
    private int time = 0;
    static final int NIL = -1;

    @SuppressWarnings("unchecked") Bridge(int v) {
        V = v;
        adj = new LinkedList[v];
        for(int i = 0; i < v; i++) {
            adj[i] = new LinkedList<>();
        }
    }

    private void addEdge(int u, int v) {
        adj[v].add(u);
        adj[u].add(v);
    }

    private void bridgeUtil(int u, boolean visited[], int disc[], int low[], int parent[]) {

        // mark the current node as visited
        visited[u] = true;

        // Initialize discovery time and low value
        disc[u] = low[u] = ++time;

        // go throught all vertices adjacent to this
        Iterator<Integer> i = adj[u].iterator();
        while(i.hasNext()) {
            int v = i.next(); // v is current adjacent of u

            // if v is not visited yet, then make it a child of u in dfs tree and recur for it
            // If v is not visited yet, then recur for it

            if(!visited[v]) {
                parent[v] = u;
                bridgeUtil(v, visited, disc, low, parent);

                // check if the subtree rooted with v has a connection to one of the ancestors of u
                low[u] = Math.min(low[u], low[v]);

                // if the lowest vertex reachable from subtree under v is below u in dfs tree, then u-v is a bridge
                if(low[v] > disc[u]) {
                    System.out.println(u + " " + v);
                }
            }
            else if(v != parent[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    private void bridge() {
        boolean[] visited = new boolean[V];
        int[] disc = new int[V];
        int[] low = new int[V];
        int[] parent = new int[V];

        for(int i = 0; i < V; i++) {
            parent[i] = NIL;
        }

        // adding theis loop so that the code works even if we are given disconnected graph
        for(int i = 0; i < V; i++) {
            if(visited[i] == false) {
                bridgeUtil(i, visited, disc, low, parent);
            }
        }

    }

    public static void main(String[] args) {
        
        // Creating first example graph
        Bridge graph = new Bridge(5);
        graph.addEdge( 1, 0);
        graph.addEdge(0, 2);
        graph.addEdge(2, 1);
        graph.addEdge(0, 3);
        graph.addEdge(3, 4);

        System.out.println("Bridges in first graph");
        graph.bridge();


        // Creating second example graph
        Bridge graph2 = new Bridge(4);
        graph2.addEdge(0, 1);
        graph2.addEdge(1, 2);
        graph2.addEdge(2, 3);

        System.out.println("Bridges in second graph");
        graph2.bridge();

        // Creating third example graph
        Bridge graph3 = new Bridge(7);  
        graph3.addEdge(0, 1);
        graph3.addEdge(1, 2);
        graph3.addEdge(2, 0);
        graph3.addEdge(1, 3);
        graph3.addEdge(1, 4);
        graph3.addEdge(1, 6);
        graph3.addEdge(3, 5);
        graph3.addEdge(4, 5);

        System.out.println("Bridges in third graph");
        graph3.bridge();
    }
}
