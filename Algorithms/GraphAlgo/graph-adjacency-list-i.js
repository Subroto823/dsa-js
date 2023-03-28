class AdjacencyList {
    constructor() {
        this.adjacencyList = {};
        this.length = 0;
    }

    addVertex(...vertices) {
        for(let vertex of vertices) {
            if(!this.adjacencyList[vertex]) {
                this.adjacencyList[vertex] = [];
                this.length++;
            }
        }
    }

    // undirected
    addEdge(source, destination) {
        if(!this.adjacencyList[source]) {
            this.addVertex(source);
        }
        if(!this.adjacencyList[destination]) {
            this.addVertex(destination);
        }

        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].includes(vertex2);
    }

    removeEdge(source, destination) {
        this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
        this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }

    removeVertex(vertex) {
        if(!(vertex in this.adjacencyList)) return;

        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
        this.length--;
    }
}

// const graph = new AdjacencyList();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("B", "C");

// console.log(graph.adjacencyList)
// console.log();

// console.log(graph.hasEdge("A", "B"));

// console.log(graph.removeVertex("A"))
// console.log(graph.adjacencyList)

module.exports = {
    AdjacencyList
}

let obj = {
    a: "hello"
}