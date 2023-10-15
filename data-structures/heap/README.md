# Heap and Priority Queue

## What is a Heap?
A **Heap** is a specialized tree-based data structure that satisfies the **Heap Property**, which ensures that elements are organized in a specific order. 
Two common types of heaps are **Max Heap** and **Min Heap**.

## Priority Queue
A **Priority Queue** is an abstract data type that uses a heap to provide efficient access to the highest (or lowest) priority element. It is a common use case for heaps, and it allows you to efficiently retrieve and manipulate elements based on their priority.

## Heap Properties
- **Max Heap**: In a Max Heap, the parent nodes are greater than or equal to their children. The maximum element is at the root.
- **Min Heap**: In a Min Heap, the parent nodes are less than or equal to their children. The minimum element is at the root.

## Heap Indexing
To maintain the heap structure, indices play a crucial role:
- **Parent Index**: The parent index of a node at index `i` is `(i-1) / 2`.
- **First Children Index**: The index of the first child of a node at index `i` is `2 * i + 1`.
- **Second Children Index**: The index of the second child of a node at index `i` is `2 * i + 2`.

## HeapifyUp
**HeapifyUp** is an operation used when inserting elements into a heap. It ensures that the Heap Property is maintained by repeatedly comparing the newly inserted element with its parent and swapping them if needed.

## HeapifyDown
**HeapifyDown** is an operation used when removing the root element from a heap. It ensures that the Heap Property is maintained by repeatedly comparing the removed element with its children and swapping them if needed.

## Complexity of Heap Operations
The time complexity of common Heap and Priority Queue operations:
- push (Enqueue): O(log n)
- pop (Dequeue): O(log n)
- Peek: O(1)


## Use Cases
- Dijkstra's Algorithm
- Heap Sort
- Task Scheduling