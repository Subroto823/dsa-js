/*
The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
    * Only one disk may be moved at a time.
    * Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
    * No disk may be placed on top of a disk that is smaller
    
*/

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
    if(n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

const res = towerOfHanoi(3, 'A', 'C', 'B');

/*
n = number of disks
Time Complexity - O(2^n)
*/