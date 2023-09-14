class PriorityQueue {
    constructor(isMaxQueue = false) {
        this.queue = [];
        this.isMaxQueue = isMaxQueue;
    }

    enqueue(item, priority = item) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) =>
            this.isMaxQueue ? a.priority - b.priority : b.priority - a.priority
        );
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.pop().item;
        }

        return null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports = {
    PriorityQueue
}