/*
Problem Discussion

Given a list of intervals: [start, end].

Find the length of the maximal set of mutually disjoint intervals 
*/

function solve (A) {
    A.sort((a, b) => a[1] - b[1]);

    let [prevStart, prevEnd] = A[0];
    let count = 1;

    for(let [start, end] of A) {
        if(start <= prevEnd) {
            continue;
        } else {
            prevStart = start;
            prevEnd = end;
            count++;
        }
    }
    return count;
}

let intervals = [[1, 2], [2, 10], [4, 6]];
console.log(solve(intervals));