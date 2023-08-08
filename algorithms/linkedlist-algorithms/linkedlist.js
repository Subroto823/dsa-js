const { ListNode } = require("./list-node");

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(...values) {
        for (const value of values) {
            const newNode = new ListNode(value);
            if (!this.head) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }
    }

    static printList(list) {
        let curr = list;
        let listValues = '';
        while (curr) {
            listValues += `${curr.val} `;
            curr = curr.next;
        }
        console.log(listValues);
    }
}

// const printList = (list) => {
//     let curr = list;
//     let listValues = '';
//     while (curr) {
//         listValues += `${curr.val} `;
//         curr = curr.next;
//     }
//     console.log(listValues);
// }

module.exports = {
    LinkedList
}