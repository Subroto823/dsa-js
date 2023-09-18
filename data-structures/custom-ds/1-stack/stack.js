class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
    
    print() {
        console.log(this.items.toString());
    }
}

module.exports = Stack;

const stack = new Stack();

stack.push(20);
stack.push(10);
stack.push(30);
stack.print();

console.log(stack.pop());
console.log(stack.peek());
console.log(stack)
