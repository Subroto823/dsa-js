/*
Problem Discussion

There are N mice and N holes. A mice takes 1 minute to travel 1 unit left or right. Find the minimum time after which all mice are in holes.

Input: [3, 2, -4], [0, -2, 4]
Output: 2

Constraints:
    * 1 <= N <= 1e5
    * -1e9 <= A[i] <= B[i] <= 1e9
*/

const mice = function (A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 0; i < A.length; i++) {
        ans = Math.max(ans, Math.abs(A[i] - B[i]));
    }

    return ans;
}

let A = [3, 2, -4]
let B = [0, -2, 4]
console.log(mice(A, B));


