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
 */

const { LinkedList } = require('./linked-list.js');
const { Node } = require('./node-d.js');

class DoublyLinkedList extends LinkedList{
    constructor() {
        super();
        this.tail = null;
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

        if(this.head) this.head.prev = null;
        else this.tail = null;
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
    
    remove(value) {
        if(this.isEmpty()) return null;

        if(this.head.value === value) {
            return this.removeFromFront()
        } else {
            let prev = this.head;

            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }

            if(prev.next === this.tail) {
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
}


function main() {
    const list = new DoublyLinkedList();

    list.append(10);
    list.append(20);
    list.append(40);
    list.append(30);
    list.append(40);
    
    list.print();
    list.reverse();
    list.print();

    list.reverse();
    list.print();
}

if (require.main === module) main();


module.exports = {
    DoublyLinkedList
}