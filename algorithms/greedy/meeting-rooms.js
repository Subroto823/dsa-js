/*
Problem Discussion

Given a list of intervals: [s, e] for meetings. Find the least number of meeting rooms required.

Example:
    Input: [[5, 10], [15, 20], [0, 30]]
    Output: 2

Constraints:
    * 1 <= N <= 1e5
    * 1 <= A[i][0] <= A[i][1] <= 1e9
*/

const solve = function(intervals) {
    const data = [];

    for (let [start, end] of intervals) {
        data.push([start, 1], [end, -1]);
    }

    data.sort((a, b) => a[0] - b[0]);

    let curr = 0;
    let ans = 0;
    for (let [_, v] of data) {
        curr += v;
        ans = Math.max(ans, curr);
    }

    return ans;
}

let intervals = [[5, 10], [15, 20], [0, 30]];
console.log(solve(intervals));