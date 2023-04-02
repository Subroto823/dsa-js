class DisjointSet {
    constructor(N) {
        this.parent = new Array(N).fill(0);
        this.init(N);
    }

    init(N) {
        for(let i = 0; i < N; i++) {
            // In the beginning everyone is their own representative
            this.parent[i] = i;
        }
    }

    unions(x, y) {
        let xRoot = this.findRepresentative(x);
        let yRoot = this.findRepresentative(y);

        if(xRoot !== yRoot) this.parent[xRoot] = yRoot;
    }

    // Finds the representative of the set that x is an element of (Without path compression)
    findRepresentative(r) {
        if(this.parent[r] === r) {
            return r;
        }
        return this.findRepresentative(this.parent[r]);
    }
}

// let there be 5 persons with ids as 0, 1, 2, 3, 4
const ds = new DisjointSet(5);

ds.unions(0, 2); // now, 0 and 2 belongs to same parent/representative
ds.unions(4, 2);
console.log(ds.findRepresentative(4) === ds.findRepresentative(0));

ds.unions(1, 3);
console.log(ds.findRepresentative(2) === ds.findRepresentative(3));
