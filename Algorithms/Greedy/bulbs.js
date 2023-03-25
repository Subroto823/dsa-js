/*

Problem Discussion

Given N bulbs, either on (1) or off (0).
Turning on ith bulb causes all remaining bulbs on the right to flip.

Find the min number of switches to turn all the bulbs on.

Constraints:
    * 1 <= N <= 1e5
    * A[i] = [0, 1]


Solution(Efficient Approach)

    * Traverse given array from left to right and keep pressing switch for off bulbs. 
    * Keep track of the number of switch presses so far. If the number of presses are even, that means the current switch is in its original state else it is in the other state. 
    * Depending on what state the bulb is in, we can increment the count of the number of presses. 
*/
function bulbs(A) {
    let cost = 0;

    for (let i = 0; i < A.length; i++) {
        let bulb = A[i];

        if (cost % 2 === 1) bulb ^= 1;
        if (bulb % 2 === 1) continue;
        else cost++;
    }
    return cost;
}

console.log(bulbs([1, 0, 1]));
console.log(bulbs([0, 1, 0, 1, 1, 0, 1, 1]));