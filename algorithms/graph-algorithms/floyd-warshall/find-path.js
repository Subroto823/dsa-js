// Class for finding shortest path between any two node in a graph
class ShortestPaths {
    constructor(matrix) {
        const N = matrix.length;

        this.next = this.initNext(matrix, N);
        this.floydWarshall(matrix, this.next, N);
    }

    initNext(matrix, N) {
        let next = new Array(N).fill()
            .map(() => new Array(N).fill(0));

        matrix.forEach((row, i) => {
            row.forEach((element, j) => {
                next[i][j] = (element !== Infinity) ? j : -1;
            })
        });
        return next;
    }

    floydWarshall(matrix, next, N) {
        for (let k = 0; k < N; k++) {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {

                    let distance = matrix[i][k] + matrix[k][j];
                    if (distance < matrix[i][j]) {
                        matrix[i][j] = distance;
                        next[i][j] = next[i][k];
                    }
                }
            }
        }
        return matrix;
    }

    findPath(source, destination) {
        if (this.next[source][destination] === -1) {
            return [];
        }

        const path = [source];

        while (source !== destination) {
            source = this.next[source][destination];
            path.push(source);
        }
        return path;
    }
}

const graph1 = [
    [0, 3, Infinity, Infinity],
    [2, 0, 2, Infinity],
    [Infinity, 5, 0, Infinity],
    [20, Infinity, 8, 0]
];

const g1 = new ShortestPaths(graph1);
console.log(g1.findPath(3, 0));


const graph2 = [
    [0, 1, 2, 5],
    [Infinity, 0, Infinity, 3],
    [Infinity, Infinity, 0, 1],
    [4, 7, Infinity, 0]
];

const g2 = new ShortestPaths(graph2);
console.log(g2.findPath(0, 3));
console.log(g2.findPath(2, 1));