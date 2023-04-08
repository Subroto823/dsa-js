/*
 * 
 * Tarjan's algorithm(dfs)
 * 
 */
import java.util.ArrayList;

public class AP_DFS {
    private static int time;

    private static void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    private static void APUtil(ArrayList<ArrayList <Integer>> adj, int u, boolean visited[], int disc[], int low[], int parent, boolean isAP[]) {
        // count of children in dfs tree
        int children = 0;

        // mark the current node as visited
        visited[u] = true;

        // Initialize discovery time and low value
        disc[u] = low[u] = ++time;

        // go throught all vertices adjacent to this
        for(Integer v: adj.get(u)) {
            // if v is not visited yet, then make it a child of u in dfs tree and recur for it
            if(!visited[v]) {
                children++;
                APUtil(adj, v, visited, disc, low, u, isAP);

                // check if the subtree rooted with v has a connection to one of the ancestors of u

                low[u] = Math.min(low[u], low[v]);

                // if us is not root and low value of one of its child is more than discovery value of u
                if (parent != -1 && low[v] >= disc[u]) {
                    isAP[u] = true;
                }
            } 

            // update low value of u for parent functions calls
            else if (v != parent) {
                    low[u] = Math.min(low[u], disc[v]);
            }
        }

        // if u is root of dfs tree and has two or more children
        if(parent == -1 && children > 1) {
            isAP[u] = true;
        }
    }

    private static void AP(ArrayList<ArrayList<Integer>> adj, int V) {
        boolean[] visited = new boolean[V];
        int[] disc = new int[V];
        int[] low = new int[V];
        boolean[] isAP = new boolean[V];
        int parent = -1;

        // adding theis loop so that the code works even if we are given disconnected graph
        for(int u = 0; u < V; u++) {
            if(visited[u] == false) {
                APUtil(adj, u, visited, disc, low, parent, isAP);
            }
        }

        for(int u = 0; u < V; u++) {
            if (isAP[u] == true) {
                System.out.print(u + " ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // Creating first example graph
        int V = 5;
        ArrayList<ArrayList<Integer> > adj1 =
        new ArrayList<ArrayList<Integer> >(V);

        for (int i = 0; i < V; i++) {
            adj1.add(new ArrayList<Integer>());
        }

        addEdge(adj1, 1, 0);
        addEdge(adj1, 0, 2);
        addEdge(adj1, 2, 1);
        addEdge(adj1, 0, 3);
        addEdge(adj1, 3, 4);
        System.out.println("Articulation points in first graph");

        AP(adj1, V);

        // Creating second example graph
        V = 4;
        ArrayList<ArrayList<Integer> > adj2 =
        new ArrayList<ArrayList<Integer> >(V);

        for (int i = 0; i < V; i++) {
            adj2.add(new ArrayList<Integer>());
        }

        addEdge(adj2, 0, 1);
        addEdge(adj2, 1, 2);
        addEdge(adj2, 2, 3);

        System.out.println("Articulation points in second graph");
        AP(adj2, V);

        // Creating third example graph
        V = 7;
        ArrayList<ArrayList<Integer> > adj3 =
        new ArrayList<ArrayList<Integer> >(V);

        for (int i = 0; i < V; i++) {
            adj3.add(new ArrayList<Integer>());
        }
            
        addEdge(adj3, 0, 1);
        addEdge(adj3, 1, 2);
        addEdge(adj3, 2, 0);
        addEdge(adj3, 1, 3);
        addEdge(adj3, 1, 4);
        addEdge(adj3, 1, 6);
        addEdge(adj3, 3, 5);
        addEdge(adj3, 4, 5);

        System.out.println("Articulation points in third graph");
        AP(adj3, V);
    }
}
