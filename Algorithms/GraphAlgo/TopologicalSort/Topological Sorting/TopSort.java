/*
*
* Kahn’s algorithm for Topological Sorting(bfs based)
*
*/

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Vector;

class TopSort {
    private int V;
    private List<Integer> adj[]; // An Array of List which contains references to the Adjacency List of each vertex

    public TopSort(int v) {
        this.V = v;
        adj = new ArrayList[V];
        for (int i = 0; i < V; i++) {
            adj[i] = new ArrayList<Integer>();
        }
    }

    public void addEdge(int u, int v) {
        adj[u].add(v);
    }

    // Kahn’s algorithm for Topological Sorting
    public void topologicalSort() {
        // create an array to store indegrees of all vertices. Initialize all indegrees as 0
        int indegree[] = new int[V];

        // Traverse adjacency lists to fill indegrees of vertices. This step takes O(V+E) time
        for(int i = 0; i < V; i++) {
            ArrayList<Integer> temp = (ArrayList<Integer>)adj[i];
            for(int node: temp) {
                indegree[node]++;
            }
        }

        // create a queue and enqueue all vertices with indegree 0
        Queue<Integer> queue = new LinkedList<Integer>();
        for(int i = 0; i < V; i++) {
            if(indegree[i] == 0) {
                queue.add(i);
            }
        }

        // initialize count of visited vertices
        int count = 0;

        // create a vector to store result (a togological ordering of the vertices)
        Vector<Integer> topOrder = new Vector<Integer>();
        
        while(!queue.isEmpty()) {
            // extract front of the queue or perform degree and add it to the topological order
            int cur = queue.poll();
            topOrder.add(cur);
 
            // Iterate through all its neighbouring of dequeued node of cur and decrease their in-degree by 1

            for(int node: adj[cur]) {
                if(--indegree[node] == 0) {
                    queue.add(node);
                }
                count++;
            }
        }

        // check if there was a cycle
        if(count != V) {
            System.out.println("There exist a cycle in the graph");
            return;
        }

        // print topological order
        for(int i: topOrder) {
            System.out.print(i + " ");
        }
    }

    public static void main(String[] args) {
        TopSort g = new TopSort(6);
        g.addEdge(5, 2);
        g.addEdge(5, 0);
        g.addEdge(4, 0);
        g.addEdge(4, 1);
        g.addEdge(2, 3);
        g.addEdge(3, 1);
        System.out.println("Following is a Topological Sort");
        g.topologicalSort();
    }
}
