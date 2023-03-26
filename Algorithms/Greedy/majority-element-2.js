/*
(Space Optimized Solution)

Problem Discussion

Given an array of integers of length N. Majority element occurs with > [N/2] frequency. Find the majority element.

Input: [3, 2, 2, 4, 2, 2]
Output: 2

    Explantion:
        The frequency of 2 is 4 > [6/2] = 3

Constraints:
1 <= N <= 1e6

*/
function majorityElement(A) {
    let n = A.length;
    let ans = 0;
    
    for(let i = 0; i < 32; i++) {
        let ones = 0;
        for(let num of A) {
            if((1 << i) & num) {
                ones += 1
            }
        }
        if(ones > ~~(n / 2)) ans += (1 << i);
    }
    return ans;
}

console.log(majorityElement([3, 2, 2, 4, 2, 2]));

/*
Complexity:
    Time: O(log(w) * N)
    Space: O(1)

*/
