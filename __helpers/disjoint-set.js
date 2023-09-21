/* Disjoint Set (With Path Compression and Union by Size) */

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

    union(a, b) {
        a = this.find(a);
        b = this.find(b);

        if(a !== b) {
            if (this.size[a] < this.size[b]) {
                this.parent[a] = b;
                this.size[b] += this.size[a];
            } else {
                this.parent[b] = a;
                this.size[a] += this.size[b];
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

module.exports = {
    DisjointSet
}