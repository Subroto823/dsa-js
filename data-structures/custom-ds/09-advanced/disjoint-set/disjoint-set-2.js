/*
Disjoint Set (Optimization)

    Union by Rank (or Depth-based Ranking):
        
        * In this approach, we consider the depth of each tree as a measure of its "rank."
        * The depth of a tree represents an upper bound on its depth because path compression can reduce the depth over time.
        * When performing a union operation, we attach the tree with the shallower depth to the one with the deeper depth.
        * This strategy helps in maintaining balanced trees and preventing long chains.

*/

class DisjointSet {
    constructor(N) {
        this.rank = new Array(N + 1).fill(0);
        this.parent = Array.from({ length: N + 1 }, (_, i) => i);

    }

    find(r) {
        if (this.parent[r] !== r) {
            this.parent[r] = this.find(this.parent[r]);
        }

        return this.parent[r];
    }

    // Union by rank
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else if (this.rank[rootY] < this.rank[rootX]) {
                this.parent[rootY] = rootX;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}

let ds = new DisjointSet(5);

ds.union(0, 2);
ds.union(0, 4);
ds.union(2, 5);
console.log(ds.isConnected(2, 4));
console.log(ds.isConnected(0, 5));

ds.union(1, 3);
console.log(ds.isConnected(0, 1));
console.log();