import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class DisjointSet {
   private Map<Integer, Integer> parent = new HashMap<>();
   private Map<Integer, Integer> rank = new HashMap<>();

    // constructor
    DisjointSet(int setElement) {
        for(int i = 0; i < setElement; i++) {
            parent.put(i, i);
            rank.put(i, 0);
        }
        
    }

    //returns representative of x's set 
    int find (int x) {
        // Finds the representative of the set that x is an element of 
        if(parent.get(x) == x) {
            return x;
        }
        else {
            // path compression
            parent.put(parent.get(x), find(parent.get(x)));
        }
        return parent.get(x);
    }

    void unions(int x, int y) {
        // Find representatives of two sets
        int xRoot = find(x);
        int yRoot = find(y);

        // elements are in the same set, no need to unite anything
        if(xRoot == yRoot) return;

        // if x's rank is less than y's rank
        if(rank.get(xRoot) < rank.get(yRoot)) {
            // then move x under y so that depth of trees remains less
            parent.put(xRoot, yRoot);
        }

        // else if x's rank is less than y's rank
        else if(rank.get(yRoot) < rank.get(xRoot)) {
            // then move x under y so that depth of trees remains less
            parent.put(yRoot, xRoot);
        }
        // if ranks are the same
        else {
            // then move y under x (doesn't matter which one goes where)
            parent.put(yRoot, xRoot);

            // and increment the result tree's rank by 1
            rank.put(xRoot, rank.get(xRoot) + 1);
        }
    }
    
    public static void main(String[] args) {
        // let there be 5 persons with ids as 0, 1, 2, 3, 4
        int n = 5;
        DisjointSet ds = new DisjointSet(n);

        // 0 is a friend of 2
        ds.unions(0, 2);

        // 4 is a freind of 2
        ds.unions(4, 2);


        //System.out.println(Arrays.toString(dus.parent));
        // check if  4 is a friend of 0
        if(ds.find(4) == ds.find(0)) {
            System.out.println("yes");
        } else {
            System.out.println("No");
        }
    }
}