class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

    prepend(value) {
        const node = new Node(value);

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
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);

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

    printList() {
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

const list = new CircularLinkedList();
list.append(5);
list.append(8);
list.append(10);
list.prepend(3);

list.printList();