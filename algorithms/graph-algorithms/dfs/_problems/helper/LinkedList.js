class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    getHead() {
        return this.head;
    }
}

module.exports = {
    LinkedList
}