/*
Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the front or the rear. 
Thus, it does not follow FIFO rule (First In First Out).

Not optimized enough!!!

Time Complexity of

    removeFromFront() - O(n)
    insertFront() - O(n)
    removeFromRear() - O(1)
    insertRear() - O(1)
*/

class Deque {
    int items[];
    int front, rear, capacity;

    public Deque(int capacity) {
        this.capacity = capacity;
        items = new int[capacity];
        front = -1;
        rear = -1;
    }

    int size() {
        return rear + 1;
    }

    boolean isFull() {
        return (size() == capacity);
    }

    boolean isEmpty() {
        return (front == -1);
    }

    void insertFront(int value) {
        if (isFull()) {
            System.out.println("Overflow");
            return;
        }

        if (front == -1) {
            front = 0;
            rear = 0;
        }
        else {
            for(int i = rear + 1; i > 0; i--) {
                items[i] = items[i - 1];
            }
            rear++;
        }
        items[front] = value;
    }

    void insertRear(int value) {
        if (isFull()) {
            System.out.println("No empty space available!");
            return;
        }

        if (front == -1) {
            front = 0;
            rear = 0;
        } else {
            rear++;
        }
        items[rear] = value;
    }

    int removeFromFront() {
        if (isEmpty()) {
            System.out.println("Queue Underflow\n");
            return -1;
        }

        int elem = items[front];

        // Deque has only one element
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {

            for(int i = 0; i < size() - 1; i++) {
                items[i] = items[i + 1];
            }
            items[rear--] = 0;
        }
        return elem;
    }

    int removeFromRear() {
        if (isEmpty()) {
            System.out.println(" Underflow");
            return -1;
        }

        int elem = items[rear];

        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            rear--;
        }
        return elem;
    }

    int getFront() {
        if (isEmpty()) {
            System.out.println(" Underflow");
            return -1;
        }
        return items[front];
    }

    int getRear() {
        if (isEmpty()) {
            System.out.println(" Underflow\n");
            return -1;
        }
        return items[rear];
    }

    void display() {
        int i;
        if (isEmpty()) {
            System.out.println("Empty Queue");
        } else {
            for (i = front; i < rear; i++) {
                System.out.print(items[i] + "  ");
            }
            System.out.println(items[i]);
        }
    }

    public static void main(String[] args) {

        Deque dq = new Deque(5);

        dq.insertRear(12);
        dq.insertRear(14);
        dq.insertRear(10);
        dq.display();

        // System.out.println(dq.getRear());

        // dq.insertFront(7);
        // dq.insertFront(8);

        // System.out.println(dq.getFront());
        dq.display();
    }
}
