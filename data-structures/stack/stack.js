class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.size() - 1];
        }
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }

    getItems(y) {
        return this.items;
    }

    clear() {
        this.items = [];
    }
    
    print() {
        console.log(this.items.toString());
    }
}

module.exports = Stack;