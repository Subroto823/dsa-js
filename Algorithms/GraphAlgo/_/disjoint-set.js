/*
Disjoint Set (With path compression and union by size)
*/

class DisjointSet {
    constructor(N) {
        this.size = new Array(N + 1).fill(1);
        this.parent = new Array(N + 1).fill(0);

        this.init(N);
    }

    init(N) {
        for (let i = 0; i <= N; i++) {
            this.parent[i] = i;
        }
    }

    find(r) {
        if (this.parent[r] !== r) {
            this.parent[r] = this.findRepresentative(this.parent[r]);
        }
        return this.parent[r];
    }

    // Union by size
    union(a, b) {
        let setOfA = this.findRepresentative(a);
        let setOfB = this.findRepresentative(b);

        if (setOfA === setOfB) return;

        if (this.size[setOfA] < this.size[setOfB]) {
            this.parent[setOfA] = setOfB;
            this.size[setOfB] += this.size[setOfA];
        }
        else {
            this.parent[setOfB] = setOfA;
            this.size[setOfA] += this.size[setOfB];
        }
    }
}

module.exports = {
    DisjointSet
}