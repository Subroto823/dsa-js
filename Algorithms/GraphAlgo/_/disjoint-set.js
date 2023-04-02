/*
Disjoint Set (With path compression and union by rank)
*/

class DisjointSet{
    constructor(N) {
        this.rank = new Array(N + 1).fill(0);
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

    // Union by rank
    union(a, b) {
        let setOfA = this.findRepresentative(a);
        let setOfB = this.findRepresentative(b);

        if(setOfA === setOfB) return;

        if(this.rank[setOfA] < this.rank[setOfB]) {
            this.parent[setOfA] = setOfB;
        } 
        else if(this.rank[setOfB] < this.rank[setOfA]) {
            this.parent[setOfB] = setOfA;
        } 
        else {
            this.parent[setOfB] = setOfA;
            this.rank[setOfA]++;
        }
    }
}

module.exports = {
    DisjointSet
}