# Queue Overview

## What is a Queue?
A **Queue** is a linear data structure that follows the First In First Out (FIFO) principle. 
the first element inserted into the queue is first element to be removed
It is used for managing data where the order of processing matters, such as task scheduling and data buffering.

## Queue Operations
A queue supports the following fundamental operations:
- **Enqueue (Push)**: Adding an element to the back (end) of the queue.
- **Dequeue (Pop)**: Removing and returning the element from the front of the queue.
- **Front (Peek)**: Viewing the element at the front without removing it.


## How a Queue Works
1. **Initialization**: A queue is initialized as an empty collection.
2. **Enqueue Operation**: Elements are added to the back of the queue.
3. **Dequeue Operation**: Elements are removed from the front in the order they were added.
4. **Front Operation**: The element at the front can be viewed without removal.


## Use Cases
- **Task Scheduling**: Managing tasks in the order they should be executed.
- **Breadth-First Search (BFS)**: Traversing graphs level by level.
- **Printers**: Printing documents in the order they were requested.
- **Callback**: Callback queue in JS runtime


# Queue Variations

## Circular Queue
A **Circular Queue** is a variation of the queue with the front and back connected, allowing for efficient memory usage.

* Circular Queue Usage
- Clock
- Streaming data
- Traffic lights

## Double-Ended Queue (Deque)
A **Double-Ended Queue** allows insertion and deletion from both ends, providing more flexibility than a standard queue.

## Priority Queue
A **Priority Queue** assigns a priority to each element, and the element with the highest priority is dequeued first.