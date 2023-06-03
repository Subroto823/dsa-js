const { LinkedList } = require('../3-linked-list/linkedlist-with-tail-pointer');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        this.list.print();
    }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.getSize());
stack.print();
console.log();

stack.pop();
stack.print();
console.log(stack.peek());