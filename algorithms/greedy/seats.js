/*
Problem Discussion

There is a row of empty (.) and filled (x) seats. Find the minimum number of moves required to make the people sit together. 

Input: "..x..x."
Output: 2

Explanation: 
    Either of "x"s can move to the seat closest to the other one.
    "..xx..." or "....xx."

Constraints:
    * 1 <= N <= 1e6
*/

/**
 * Brute Force Solution
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
var seats = function (A) {
    const MOD = 10000003;
    let filled = [];

    // All the indices of x's
    for (let i = 0; i < A.length; i++) {
        if (A[i] === "x") {
            filled.push(i);
        }
    }

    // Move required assuming starting position is 0
    filled = filled.map((pos, i) => pos - i);

    if (filled.length <= 1) return 0;

    let ans = Infinity;
    for (let i = 0; i < A.length; i++) {
        let total = 0;
        for (let xpos of filled) {
            total += Math.abs(xpos - i);
            total %= MOD;
        }

        ans = Math.min(ans, total % MOD);
    }

    return ans;
}

console.log(seats("..x..x."));


/**
 * Optimal Solution
 * By Choosing Median As The Segment Start (Towards which all other people(x's) will move)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var seats = function(A) {
    let MOD = 10000003;
    let filled = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] === "x") {
            filled.push(i);
        }
    }

    filled = filled.map((pos, i) => pos - i);
    
    const n = filled.length;
    if(n === 0) return 0;

    let ans = Infinity;
    const segmentStart = filled[n >> 1];

    let total = 0;
    for (let xpos of filled) {
        total += Math.abs(xpos - segmentStart);
        total %= MOD;
    }

    ans = Math.min(ans, total % MOD);
    return ans;
}

console.log(seats("..x..x."));
console.log(seats("xx..xx....xxx"));