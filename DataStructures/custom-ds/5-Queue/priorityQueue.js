/*
Priority Queue is an Abstract Data Structure.

It can be implemented using other Data Structures but is commonly implemented using a Heap.

Each node contains a priority. When we enqueue a node to the queue, it’s “bubbled up” to its place in the queue.

    enqueue() - It enqueue’s the new node to it’s appropriate place in queue.
    dequeue() - It removes the first node from the queue.
    front() - This method returns the first node to be dequeued.
    size() - Returns the size of the queue.
    isEmpty() - Returns if the queue is empty

(Normal Array Implementations)
*/

    class PriorityQueue {
        constructor() {
            this.collection = [];
        }
    
        printCollection = function () {
            console.log(this.collection);
        }
    
        size() {
            return this.collection.length;
        }
    
        isEmpty() {
            return this.size() === 0;
        }
    
        enqueue(item) {
            let index = this.collection.findIndex(elem => elem[1] > item[1]);
            if (index !== -1) {
                this.collection.splice(index, 0, item);
            } else {
                this.collection.push(item);
            }
        }
    
        dequeue() {
            if (!this.isEmpty()) return this.collection.shift()[0];
        }
    
        front() {
            if (!this.isEmpty()) return this.collection[0][0];
        }
    }
    
    const queue = new PriorityQueue();
    
    queue.enqueue(["BBB", 3]);
    queue.enqueue(["AAA", 1]);
    queue.enqueue(["ABB", 3]);
    queue.enqueue(["AAB", 2]);
    queue.enqueue(["AB", 2]);

    queue.printCollection();

/*
Time Complexity
    enqueue() - O(n)
    dequeue() - O(n)

(!! We can optimize these operations using heap ds)
*/