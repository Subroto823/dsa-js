import java.util.Arrays;

class DisjointUnionSets2 {
   private int[] rank, parent;
    int n;

    // constructor
    DisjointUnionSets2(int n) {
        rank = new int[n];
        parent = new int[n];
        this.n = n;
        makeSet();
    }

    // Create n sets with single item in each
    void makeSet() {
        for (int i = 0; i < n; i++) {
            // Initially, all elements are in their own set
            parent[i] = i;
        }
    }

    // returns representative of x's set 
    int find (int x) {
        // Finds the representative of the set that x is an element of 
        if(parent[x] != x) {
            // path compression
            parent[x] = find(parent[x]);

            // so we recursively call Find on its parent and move i's node directly under the representative of this set
        }
        return parent[x];
    }

    void unions(int x, int y) {
        // Find representatives of two sets
        int xRoot = find(x);
        int yRoot = find(y);

        // elements are in the same set, no need to unite anything
        if(xRoot == yRoot) return;

        // if x's rank is less than y's rank
        if(rank[xRoot] < rank[yRoot]) {
            // then move x under y so that depth of trees remains less
            parent[xRoot] = yRoot;
        }

        // else if x's rank is less than y's rank
        else if(rank[yRoot] < rank[xRoot]) {
            // then move x under y so that depth of trees remains less
            parent[yRoot] = xRoot;
        }
        // if ranks are the same
        else {
            // then move y under x (doesn't matter which one goes where)
            parent[yRoot] = xRoot;

            // and increment the result tree's rank by 1
            rank[xRoot] = rank[xRoot] + 1;
        }
    }
    
    public static void main(String[] args) {
        // let there be 5 persons with ids as 0, 1, 2, 3, 4
        int n = 5;
        DisjointUnionSets2 dus = new DisjointUnionSets2(n);

        // 0 is a friend of 2
        dus.unions(0, 2);

        // 4 is a freind of 2
        dus.unions(4, 2);

        dus.unions(3, 1);

        // check if  4 is a friend of 0
        if(dus.find(4) == dus.find(0)) {
            System.out.println("yes");
        } else {
            System.out.println("No");
        }
    }
}