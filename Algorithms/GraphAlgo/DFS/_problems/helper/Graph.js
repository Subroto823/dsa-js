const { LinkedList } = require("./linkedlist");

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [];

        for(let i = 0; i< vertices; i++) {
            let vertex = new LinkedList();
            this.list.push(vertex);
        }
    }

    addEdge(source, destination) {
        if(source < this.vertices && destination < this.vertices) {
            this.list[source].insertAtHead(destination);
        }
        return this;
    }
}

module.exports = {
    Graph
}