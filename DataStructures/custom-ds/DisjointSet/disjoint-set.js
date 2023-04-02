function makeSet(u) {
    parent[u] = u;
    return;
}

function init(N) {
    for(let i = 0; i < N; i++) {
        makeSet(i);
    }
    return;
}

function Union(a, b) {
    u = findRepresentative(a);
    v = findRepresentative(b);

    if(u !== v) {
        parent[u] = v
    }
}

// Without path compression
function findRepresentative(r) {
    if(parent[r] === r) {
        return r;
    }
    return findRepresentative(parent[r]);
}

// With path compression
function findRepresentative(r) {
    if(parent[r] === r) {
        return r;
    }
    parent[r] = findRepresentative(parent[r]);
    return parent[r];
}

// every set size in disjoint set