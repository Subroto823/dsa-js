/*
Disjoint Set (With path compression)

    With path compression, if we run findRepresentative m times, the time complexity will be O(mlogn), which is more optimal.
*/

class DisjointSet{
    constructor(N) {
        this.parent = new Array(N).fill(0);
        this.init(N);
    }

    init(N) {
        for(let i = 0; i < N; i++) {
            this.parent[i] = i;
        }
    }

    unions(x, y) {
        let xRoot = findRepresentative(x);
        let yRoot = findRepresentative(y);

        if(xRoot !== yRoot) {
            this.parent[xRoot] = yRoot;
        }
    }

    findRepresentative(r) {
        if(this.parent[r] === r) {
            return r;
        }
        // Path compression
        this.parent[r] = this.findRepresentative(this.parent[r]);
        return this.parent[r];
    }
}

const ds = new DisjointSet(5);

ds.unions(0, 2);
ds.unions(4, 2);
console.log(ds.findRepresentative(4) === ds.findRepresentative(0));

ds.unions(1, 3);
console.log(ds.findRepresentative(2) === ds.findRepresentative(3));