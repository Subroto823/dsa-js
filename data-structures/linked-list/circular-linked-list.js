/**
 * Circular LinkedList - Basic Implementation
 *
 * Time Complexity:
 * - Prepend: O(n)
 * - Append: O(n)
 *
 */
const { Node } = require('./node')

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        this.insertHelper(node);
    }

    insertHelper(node) {
        if (!this.head) {
            this.head = node;
            node.next = this.head;
        } else {
            let curr = this.head;

            while (curr.next.value !== this.head.value) {
                curr = curr.next;
            }

            curr.next = node;
            node.next = this.head;
        }

        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        this.insertHelper(node);
        this.head = node;
    }
    
    remove(value) {
        if (this.isEmpty() || value === undefined) {
            return null;
        }

        let removeNode = null;
        let curr = this.head.next;

        while (curr.value !== this.head.value && curr.next.value !== value) {
            curr = curr.next;
        }

        if (curr.next.value === value) {
            removeNode = curr.next;
            curr.next = removeNode.next;
            this.size--;
        }

        if (this.head.value === value) {
            this.head = this.getSize() !== 0 ? removeNode.next : null;
        }

        if (removeNode) removeNode.next = null;

        return removeNode;
    }

    reverse() {
        if(!this.head || this.getSize() === 1) return;

        let cur = this.head;
        let prev = null;

        while(true) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;

            if(cur.value === this.head.value) {
                break;
            }
        }

        cur.next = prev;
        this.head = prev;
    }

    printList() {
        if (!this.head) {
            process.stdout.write("List is empty!\n");
            return;
        }

        let curr = this.head;
        let data = '';

        while (curr.next.value !== this.head.value) {
            data += curr.value + " ";
            curr = curr.next;
        }
        
        data += curr.value;
        process.stdout.write(data + "\n");
    }
}


function main() {
    const list = new CircularLinkedList();

    list.append(5);
    list.append(8);
    list.append(10);
    console.log(list.remove(5))
    list.printList();

    list.prepend(3);
    list.printList();

    list.reverse();
    list.printList();
}

if (require.main === module) main();


module.exports = {
    CircularLinkedList
}