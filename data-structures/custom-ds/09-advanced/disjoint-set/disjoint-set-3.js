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

    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);

        if(rootA !== rootB) {
            if (this.size[rootA] < this.size[rootB]) {
                this.parent[rootA] = rootB;
                this.size[rootB] += this.size[rootA];
            } else {
                this.parent[rootB] = rootA;
                this.size[rootA] += this.size[rootB];
            }
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }

    getSetSize(x) {
        const parent = this.find(x);
        return this.size[parent];
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