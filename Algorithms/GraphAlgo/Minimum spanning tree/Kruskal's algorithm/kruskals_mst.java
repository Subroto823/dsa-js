import java.util.Arrays;

class Edge implements Comparable<Edge> {
    int src, dest, weight;

    // when we will call Arrays.sort(edge), it will sort the array based on their weight
    public int compareTo(Edge compareEdge) {
        return this.weight - compareEdge.weight;
    }
}

class kruskals_mst {
    private int V, E;
    Edge edge[];

    kruskals_mst(int nodes, int edges) {
        E = edges;
        edge = new Edge[E];
        for (int i = 0; i < E; i++) {
            edge[i] = new Edge();
        }
    }

    int edgeIndx = 0;
    public void makeEdge(int src, int dest, int weight) {
        edge[edgeIndx].src = src;
        edge[edgeIndx].dest = dest;
        edge[edgeIndx].weight = weight;
        edgeIndx++;
    }

    private static int find(int v, int[] parent) {
        if (parent[v] == v)
            return v;
        return find(parent[v], parent);
    }

    private static void krushkals(Edge[] edge, int v, int e) {
        // sorting
        Arrays.sort(edge);
        Edge output[] = new Edge[v - 1];
        int k = 0;
        int parent[] = new int[v];
        for (int i = 0; i < v; i++)
            parent[i] = i;

        for (int i = 0; i < e; i++) {
            if (k == v - 1)
                break;

            Edge currEdge = edge[i];
            int src_parent = find(currEdge.src, parent);
            int dst_parent = find(currEdge.dest, parent);

            if (src_parent != dst_parent) {
                output[k] = currEdge;
                k++;
                parent[src_parent] = dst_parent;
            }
        }

        for (int i = 0; i < output.length; i++)
            System.out.println(output[i].src + " -> " + output[i].dest + " = " + output[i].weight);
    }

    public static void main(String[] args) {
        kruskals_mst graph = new kruskals_mst(4, 5);

        graph.makeEdge(0, 1, 10);
        graph.makeEdge(0, 2, 6);
        graph.makeEdge(0, 3, 5);
        graph.makeEdge(1, 3, 15);
        graph.makeEdge(2, 3, 4);

        krushkals(graph.edge, 4, 5);
    }
}