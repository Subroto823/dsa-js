/*
(Optimal Solution)

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

function seats(A) {
    let MOD = 10000003;
    let crosses = [];

    // all the indices of x's
    for (let i = 0; i < A.length; i++) {
        if (A[i] === "x") {
            crosses.push(i);
        }
    }
    // move req assuming starting position is 0
    crosses = crosses.map((elem, i) => elem - i);

    let n = crosses.length;
    if(n === 0) return 0;

    let ans = Infinity;
    let segmentStart = crosses[~~(n / 2)];

    let total = 0;
    for (let cross of crosses) {
        total += Math.abs(cross - segmentStart);
        total %= MOD;
    }
    ans = Math.min(ans, total % MOD);

    return ans;
}

console.log(seats("..x..x."));
console.log(seats("xx..xx....xxx"));