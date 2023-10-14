/*
Doubly LinkedList Implementation (With Tail Pointer)

Time complexity: 
    # prepend O(1)
    # append O(1)
    # removeFromFront O(1)
    # removeFromEnd O(1)
    # reverse
        * time complexity O(n)
        * space complexity O(1)
    
    # reverseUsingStack 
        * time complexity O(n)
        * space complexity O(n)
        * Swapping data can be costly compared to pointers if the size of the data item(s) is more
*/
const { Node } = require('./d-node.js');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    
    append(value) {
        const node = new Node(value);
        
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return value;
    }

    removeFromEnd() {
        if(this.isEmpty()) {
            return null;
        }

        const value = this.tail.value;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;   
        }
        this.size--;
        return value;
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return;
        }
        if(index === 0) {
            this.prepend(value);
        } 
        else if(index === this.size) {
            this.append(value);
        }
        else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index -1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            node.next.prev = node;
            node.prev = prev;
            this.size++;
        }
    }

    removeFrom(index = -1) {
        if(index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if(index === 0) {
            return this.removeFromFront();
        }
        else if(index === this.size - 1) {
            return this.removeFromEnd();
        }
        else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
            removeNode.next.prev = prev;
        }

        this.size--;
        return removeNode.value;
    }

    removeValue(value) {
        if(this.isEmpty()) {
            return null;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            let i = 1;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
                i++;
            }
            if(i === this.size - 1) {
                return this.removeFromEnd();
            }
            
            if(prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                removeNode.next.prev = prev;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if(this.isEmpty()) {
            return -1;
        } 
        let i = 0;
        let curr = this.head;
        while(curr) {
            if(curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    get(index) {
        if(this.isEmpty() || index < 0 || index >= this.size) {
            return;
        }
        
        let i = 0;
        let curr = this.head;
        while(i < index) {
            curr = curr.next;
            i++;
        }
        return curr.value;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = curr;
        while(curr) {
            let next = curr.next;
            console.log(next);
            curr.next = prev;
            curr.prev = next;

            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    reverseUsingStack() {
        const stack = [];
        let curr = this.head;
        while(curr) {
            stack.push(curr.value);
            curr = curr.next;  
        }
    
        curr = this.head;
        while(curr !== null) {
            curr.value = stack.pop();
            curr = curr.next;
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log("The list is empty!");
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    printReverse() {
        if(this.isEmpty()) {
            console.log("The list is empty!");
        } else {
            let curr = this.tail;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.prev;
            }
            console.log(listValues);
        }
    }
}

const list = new DoublyLinkedList();

console.log(list.isEmpty());
list.append(10);
list.append(20);
list.insert(30, 2)
list.append(40);

list.reverse();
list.print();
// list.printReverse();