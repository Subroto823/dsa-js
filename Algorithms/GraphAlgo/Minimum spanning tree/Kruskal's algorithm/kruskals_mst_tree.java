import java.util.Arrays;

class Edge implements Comparable<Edge> {
    int src, dest, weight;

    // when we will call Arrays.sort(edge), it will sort the array based on their weight
    public int compareTo(Edge compareEdge) {
        return this.weight - compareEdge.weight;
    }
}

class kruskals_mst_tree {
    private int V, E;
    private Edge edge[];
    private Edge output[];
    private int[] parent, rank;

    kruskals_mst_tree(int nodes, int edges) {
        V = nodes;
        E = edges;
        edge = new Edge[E];
        for (int i = 0; i < E; i++) {
            edge[i] = new Edge();
        }

        output = new Edge[V - 1];

        rank = new int[nodes];
        parent = new int[nodes];
        for (int i = 0; i < nodes; i++)
            parent[i] = i;
    }

    int edgeIndx = 0;
    public void make_edge(int src, int dest, int weight) {
        edge[edgeIndx].src = src;
        edge[edgeIndx].dest = dest;
        edge[edgeIndx].weight = weight;
        edgeIndx++;
    }

    private int find_representative(int x) {
        if (parent[x] == x)
            return x;
        return parent[x] = find_representative(parent[x]);
    }

    private void unions(int x, int y) {
        int xRoot = find_representative(x);
        int yRoot = find_representative(y);

        if(xRoot == yRoot) return;

        if(rank[xRoot] < rank[yRoot]) {
            parent[xRoot] = yRoot;
        }
        else if(rank[yRoot] < rank[xRoot]) {
            parent[yRoot] = xRoot;
        }
        else {
            parent[yRoot] = xRoot;
            rank[xRoot] = rank[xRoot] + 1;
        }
    }

    private void krushkals() {
        // sorting
        Arrays.sort(edge);
        int k = 0;

        for (int i = 0; i < E; i++) {
            if (k == V - 1)
                break;

            Edge currEdge = edge[i];
            int src_parent = find_representative(currEdge.src);
            int dst_parent = find_representative(currEdge.dest);

            if (src_parent != dst_parent) {
                output[k] = currEdge;
                k++;
                unions(src_parent, dst_parent);
            }
        }

        for (int i = 0; i < output.length; i++)
            System.out.println(output[i].src + " -> " + output[i].dest + " = " + output[i].weight);
    }

    public static void main(String[] args) {
        kruskals_mst_tree graph = new kruskals_mst_tree(4, 5);

        graph.make_edge(0, 1, 10);
        graph.make_edge(0, 2, 6);
        graph.make_edge(0, 3, 5);
        graph.make_edge(1, 3, 15);
        graph.make_edge(2, 3, 4);

        graph.krushkals();
    }
}