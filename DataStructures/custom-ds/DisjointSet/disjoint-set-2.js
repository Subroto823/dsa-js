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
}