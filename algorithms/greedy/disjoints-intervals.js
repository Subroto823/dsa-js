/*
Problem Discussion

Given a list of intervals: [start, end].
Find the length of the maximal set of mutually disjoint intervals.

Solution Idea:
- Sort the events by their end times, and for each event, check if its start time overlaps with the end time of the previous event.
*/

const disjointIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let prevEnd = -Infinity;
    let count = 0;

    for (let [start, end] of intervals) {
        if (start > prevEnd) {
            count++;
            prevEnd = end;
        }
    }

    return count;
}


let intervals = [[1, 2], [2, 10], [4, 6]];
console.log(disjointIntervals(intervals));