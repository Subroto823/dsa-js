/*
LinkedList - Optimized Implementation with tail pointer

Time complexity: 
    # prepend O(1)
    # append O(1)
    # removeFromFront O(1)
    # removeFromEnd O(n)
*/

const { Node } = require('./Node');
const { CircularLinkedList } = require('./CircularLinkedList');

class LinkedList extends CircularLinkedList {
    
}

const list = new LinkedList();

list.append(5);
list.append(8);
list.append(10);

list.prepend(3);
list.insert(2, 7);

list.printList();

list.reverse();
list.printList();