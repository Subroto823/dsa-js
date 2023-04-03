import java.util.Arrays;

// using kruskal's algorithm

class Graph {
    private int V, E; 

    // a class to represent a graph edge
    class Edge implements Comparable<Edge> {
        int src, dest, weight;

        // comparator function used for sorting edges based on their weight
        // when we will call Arrays.sort(edge), it will sort the array based on their weight
        public int compareTo(Edge compareEdge) {
            return this.weight - compareEdge.weight;
        }
    }

    // a class to represent a subset for union find
    class subset {
        int parent, rank;
    }

    Edge edge[]; // collection of all edges

    // creates a graph with V vertices and E edges
    Graph(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[E];
        for (int i = 0; i < e; ++i) {
            edge[i] = new Edge();
        }
    }

    // a utility function to find set of an element x(uses path compression technique)
    int findRepresentative(subset subsets[], int x) {
        if (subsets[x].parent != x) {
            subsets[x].parent = findRepresentative(subsets, subsets[x].parent);
        }
        return subsets[x].parent;
    }

    // a function that does union of two sets of x and y (uses union by rank)
    void union(subset subsets[], int x, int y) {
        int xroot = findRepresentative(subsets, x);
        int yroot = findRepresentative(subsets, y);

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

    // the main function to construct mst using kruskal's algo
    void KruskalMST() {
        // this will store the resultand MST
        Edge result[] = new Edge[V];

        // An index variable, used for result[]
        int e = 0;
        int i = 0;

        for (i = 0; i < V; ++i) {
            result[i] = new Edge();
        }

        // Step 1:  Sort all the edges in non-decreasing order of their weight.  If we are not allowed to change the given graph, we can create a copy array of edges
        Arrays.sort(edge);


        // allocate memory for creating V subsets
        subset subsets[] = new subset[V];
        for( i = 0; i < V; ++i) {
            subsets[i] = new subset();
        }

        // create v subsets with single elements
        for(int v = 0; v < V; ++v) {
            subsets[v].parent = v;
            subsets[v].rank = 0;
        }

        i = 0; // index used to pick next edge

        // number of edges to be taken is equal to V -1
        while(e < V - 1) {
            // Step 2: pick the smallest edge. and increment the index for next iteration
            Edge next_edge = edge[i++];
            
            int x = findRepresentative(subsets, next_edge.src);
            int y = findRepresentative(subsets, next_edge.dest);

            // if including this edge doesn't cause cycle include it in the result and increment the index of the result for next edge
            if(x != y) {
                result[e++] = next_edge;
                union(subsets, x, y);
            }
            // else discard the next_edge
        }



        // print the contents of result[] to display the built MST
        
        System.out.println("Following are the edges in the constructed MST");
        int minimumCost = 0;
        for (i = 0; i < e; ++i) {
            System.out.println(result[i].src + " -- " + result[i].dest + " == " + result[i].weight);
            minimumCost += result[i].weight;
        }
        System.out.println("Minimum Cost Spanning Tree " + minimumCost);
    }
    
    public static void main(String[] args) {
        int V = 4;
        int E = 5;
        Graph graph = new Graph(V, E);

        // add edge 0-1
        graph.edge[0].src = 0;
        graph.edge[0].dest = 1;
        graph.edge[0].weight = 10;

        
        // add edge 0-2
        graph.edge[1].src = 0;
        graph.edge[1].dest = 2;
        graph.edge[1].weight = 6;
    
        // add edge 0-3
        graph.edge[2].src = 0;
        graph.edge[2].dest = 3;
        graph.edge[2].weight = 5;
        
        // add edge 1-3
        graph.edge[3].src = 1;
        graph.edge[3].dest = 3;
        graph.edge[3].weight = 15;
        
        // add edge 2-3
        graph.edge[4].src = 2;
        graph.edge[4].dest = 3;
        graph.edge[4].weight = 4;
        
        // Function call
        graph.KruskalMST();
    }
}
