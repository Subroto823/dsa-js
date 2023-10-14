/**
 * Doubly LinkedList Implementation (With Tail Pointer)
 *
 * Time Complexity:
 * - Prepend: O(1)
 * - Append: O(1)
 * - RemoveFromFront: O(1)
 * - RemoveFromEnd: O(1)
 * - Reverse:
     * Time Complexity: O(n)
     * Space Complexity: O(1)
 * - ReverseUsingStack:
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     * Additional Note: Swapping data can be costly compared to pointers if the size of the data item(s) is more.
 */

const { Node } = require('./node-d.js');

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
        if(this.isEmpty()) return null;

        const removeNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        removeNode.next = null;

        this.size--;
        return removeNode;
    }

    removeFromEnd() {
        if(this.isEmpty()) return null;
        const removeNode = this.tail;

        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;   
        }

        removeNode.prev = null
        this.size--;
        return removeNode;
    }

    insertAt(index, value) {
        if(index < 0 || index > this.size) return;

        if(index === 0) {
            this.prepend(value);
        } else if(index === this.size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            while(--index) {
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

        let removeNode = null;

        if(index === 0) {
            return this.removeFromFront();
        } else if(index === this.size - 1) {
            return this.removeFromEnd();
        } else {
            let prev = this.head;

            while(--index) {
                prev = prev.next;
            }

            removeNode = prev.next;
            prev.next = removeNode.next;
            removeNode.next.prev = prev;
            removeNode.next = null;
            removeNode.prev = null;
        }

        this.size--;
        return removeNode;
    }

    removeValue(value) {
        if(this.isEmpty()) return null;

        if(this.head.value === value) {
            return this.removeFromFront()
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
                removeNode.next = null;
                removeNode.prev = null;

                this.size--;
                return removeNode;
            }

            return null;
        }
    }

    search(value) {
        if(this.isEmpty()) return -1;

        let i = 0;
        let curr = this.head;

        while(curr) {
            if(curr.value === value) return i;
            curr = curr.next;
            i++;
        }

        return -1;
    }

    get(index) {
        if(this.isEmpty() || index < 0 || index >= this.size) {
            return null;
        }
        
        let curr = this.head;
        while(index--) {
            curr = curr.next;
        }
        return curr;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = curr;

        while(curr) {
            let next = curr.next;
            curr.next = prev;
            curr.prev = next;

            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    reverseUsingStack() {
        const stack = [];
        let cur = this.head;

        while(cur) {
            stack.push(cur.value);
            cur = cur.next;  
        }
    
        cur = this.head;

        while(cur !== null) {
            cur.value = stack.pop();
            cur = cur.next;
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
}


function main() {
    const list = new DoublyLinkedList();

    list.append(10);
    list.append(20);
    list.print();

    list.insertAt(2, 30)
    list.print();

    list.append(40);
    list.reverse();
    list.print();

    list.reverse();
    list.print();
}

if (require.main === module) main();


module.exports = {
    DoublyLinkedList
}