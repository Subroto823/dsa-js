import java.util.Arrays;

class Edge implements Comparable<Edge> {
    int src, dest, weight;

    // when we will call Arrays.sort(edge), it will sort the array based on their weight
    public int compareTo(Edge compareEdge) {
        return this.weight - compareEdge.weight;
    }
}

class graph_kruskals {
    private int V, E; 

    private Edge edge[];
    private Edge output[];

    // a class to represent a subset for union find
    class subset {
        int parent, rank;
    }

    graph_kruskals(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[E];
        for (int i = 0; i < e; ++i) {
            edge[i] = new Edge();
        }

        output = new Edge[V-1];
    }

    int edgeIndx = 0;
    public void make_edge(int src, int dest, int weight) {
        edge[edgeIndx].src = src;
        edge[edgeIndx].dest = dest;
        edge[edgeIndx].weight = weight;
        edgeIndx++;
    }

    int find_representative(subset subsets[], int x) {
        if (subsets[x].parent != x) {
            subsets[x].parent = find_representative(subsets, subsets[x].parent);
        }
        return subsets[x].parent;
    }

    void union(subset subsets[], int x, int y) {
        int xroot = find_representative(subsets, x);
        int yroot = find_representative(subsets, y);

        if(subsets[xroot].rank < subsets[yroot].rank) {
            subsets[xroot].parent = yroot;
        }
        else if(subsets[yroot].rank < subsets[xroot].rank) {
            subsets[yroot].parent = xroot;
        }
        else {
            subsets[yroot].parent = xroot;
            subsets[xroot].rank++;
        }
    }

    void kruskals_mst() {
        // Step 1:  Sort all the edges in non-decreasing order of their weight.
        Arrays.sort(edge);


        // allocate memory for creating V subsets
        subset subsets[] = new subset[V];
        for(int i = 0; i < V; ++i) {
            subsets[i] = new subset();
        }

        // create v subsets with single elements
        for(int v = 0; v < V; ++v) {
            subsets[v].parent = v;
            subsets[v].rank = 0;
        }

        
        int e = 0; // An index variable, used for output[]
        int i = 0; // index used to pick next edge

        // number of edges to be taken is equal to V -1
        while(e < V - 1) {
            Edge next_edge = edge[i++];

            int x = find_representative(subsets, next_edge.src);
            int y = find_representative(subsets, next_edge.dest);

            // if including this edge doesn't cause cycle include it in the output and increment the index of the output for next edge
            if(x != y) {
                output[e++] = next_edge;
                union(subsets, x, y);
            }
        }



        // print the contents of output[] to display the built MST
        
        System.out.println("Following are the edges in the constructed MST");
        int minimumCost = 0;
        for (i = 0; i < e; ++i) {
            System.out.println(output[i].src + " -- " + output[i].dest + " == " + output[i].weight);
            minimumCost += output[i].weight;
        }
        System.out.println("Minimum Cost Spanning Tree " + minimumCost);
    }
    
    public static void main(String[] args) {
        int V = 4;
        int E = 5;
        graph_kruskals graph = new graph_kruskals(V, E);

        graph.make_edge(0, 1, 10);
        graph.make_edge(0, 2, 6);
        graph.make_edge(0, 3, 5);
        graph.make_edge(1, 3, 15);
        graph.make_edge(2, 3, 4);
        
        // Function call
        graph.kruskals_mst();
    }
}
