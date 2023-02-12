/*
LinkedList - Basic Implementation

Time complexity: 
    # prepend O(1)
    # append O(n)
        # it is possible to append a new node in constant time, but that involves maintaining a tail pointer that always point at the last node in the list
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
    append(value) {
        const node = new Node(value);
        
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return;
        }
        if(index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index -1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if(index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
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
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
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
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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
}

module.exports = {
    LinkedList
}

// const list = new LinkedList();
// list.insert(10, 0);
// list.insert(20, 1);
// list.insert(40, 2);

// list.reverse();
// list.print();
