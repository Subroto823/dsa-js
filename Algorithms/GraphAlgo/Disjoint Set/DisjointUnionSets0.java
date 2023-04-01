import java.util.Arrays;

class DisjointUnionSets0 {
   private int[] parent;
    int n;

    // constructor
    DisjointUnionSets0(int n) {
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
        if(parent[x] == x) {
            return x;
        }
        else {
           return find(parent[x]);
        }
    }

    void unions(int x, int y) {
        // Find representatives of two sets
        int xRoot = find(x);
        int yRoot = find(y);
        
        if(xRoot != yRoot) parent[xRoot] = yRoot;
    }
    
    public static void main(String[] args) {
        // let there be 5 persons with ids as 0, 1, 2, 3, 4
        int n = 5;
        DisjointUnionSets0 dus = new DisjointUnionSets0(n);

        // 0 is a friend of 2
        dus.unions(0, 2);

        // 4 is a freind of 2
        dus.unions(4, 2);

        dus.unions(3, 1);

        //System.out.println(Arrays.toString(dus.parent));
        // check if  4 is a friend of 0
        if(dus.find(4) == dus.find(2)) {
            System.out.println("yes");
        } else {
            System.out.println("No");
        }
    }
}