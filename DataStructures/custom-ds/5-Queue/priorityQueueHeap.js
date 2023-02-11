/*
Priority Queue(Min Heap Implementation)

    It can be implemented using other Data Structures but is commonly implemented using a Heap.

    Each node contains a priority. When we enqueue a node to the queue, it’s “bubbled up” to its place in the queue.

    Time Complexity:
        enqueue() - O()
        dequeue() - O()
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