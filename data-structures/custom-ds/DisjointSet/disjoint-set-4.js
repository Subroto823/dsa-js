/*
Disjoint Set (With path compression and union by size)

*/

class DisjointSet{
    constructor(N) {
        this.size = new Array(N + 1).fill(1);
        this.parent = new Array(N + 1).fill(0);

        this.init(N);
    }

    init(N) {
        for(let i = 0; i <= N; i++) {
            this.parent[i] = i;
        }
    }

    findRepresentative(r) {
        if(this.parent[r] !== r) {
            this.parent[r] = this.findRepresentative(this.parent[r]);
        }
        return this.parent[r];
    }

    // Union by size
    union(a, b) {
        let setOfA = this.findRepresentative(a);
        let setOfB = this.findRepresentative(b);

        if(setOfA === setOfB) return;

        if(this.size[setOfA] < this.size[setOfB]) {
            this.parent[setOfA] = setOfB;
            this.size[setOfB] += this.size[setOfA];
        }
        else {
            this.parent[setOfB] = setOfA;
            this.size[setOfA] += this.size[setOfB];
        }
    }
}

const ds = new DisjointSet(5);

ds.union(0, 2);
ds.union(0, 4);
console.log(ds.findRepresentative(4) === ds.findRepresentative(0));

ds.union(1, 3);
console.log(ds.findRepresentative(2) === ds.findRepresentative(3));


const ds2 = new DisjointSet(7);
ds2.union(1, 2);
ds2.union(2, 3);
ds2.union(4, 5);
ds2.union(6, 7);
ds2.union(5, 6);

console.log(ds2.findRepresentative(3) === ds2.findRepresentative(7))

ds2.union(1, 5);
console.log(ds2.findRepresentative(3) === ds2.findRepresentative(7));