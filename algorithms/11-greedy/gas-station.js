/*
Problem Discussion

There are N gas stations along a circular route. Each has A[i] amount of gas.
To travel from station i -> i + 1, there is B[i] cost.
Find the earliest station from where you can travel around thie entire circuit. Return -1 if not possible.


Constraints:
    * 1 <= N <= 1e6
*/

function canCompleteCircuit(A, B) {
    let n = A.length;

    A = A.concat(A);
    B = B.concat(B);

    let curr = 0,
        start = 0;

    for (let i = 0; i < A.length; i++) {
        if (i === start + n) {
            return start;
        }

        curr += A[i] - B[i];

        if (curr < 0) {
            curr = 0;
            start = i + 1;
        }
    }
    return -1;
}

let gas = [3, 5, 2, 1, 7];
let cost = [4, 2, 1, 9, 1]

console.log(canCompleteCircuit(gas, cost));