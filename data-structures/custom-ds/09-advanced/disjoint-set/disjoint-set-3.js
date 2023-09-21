/*
Disjoint Set (Optimization)

    Union by Size :
        * The main idea behind union by size is to always attach the smaller tree (or subset) to the larger tree during the union operation.
        * This strategy also helps maintain balance in the disjoint-set forest, which is a collection of trees, and prevents the trees from becoming too skewed or unbalanced.
*/

class DisjointSet {
    constructor(N) {
        this.size = new Array(N + 1).fill(1);
        this.parent = Array.from({ length: N + 1 }, (_, i) => i);
    }

    find(r) {
        if(this.parent[r] !== r) {
            this.parent[r] = this.find(this.parent[r]);
        }

        return this.parent[r];
    }

    // Union by size
    union(a, b) {
        a = this.find(a);
        b = this.find(b);

        if(a !== b) {
            if (this.size[a] < this.size[b]) {
                [a, b] = [b, a];
            }

            this.parent[b] = a;
            this.size[a] += this.size[b];
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}


ds = new DisjointSet(5);

ds.union(0, 2);
ds.union(0, 4);
ds.union(2, 5);
console.log(ds.isConnected(2, 4));
console.log(ds.isConnected(0, 5));

ds.union(1, 3);
console.log(ds.isConnected(0, 1));