/*
Given a staircase of 'n' steps, count the number of distinct ways to climb the top. You can either climb 1 step or 2 steps at a time

n=1, climbingStairCase(1) = 1     | (1)
n=2, climbingStairCase(2) = 2     | (1, 1) and (2)
n=3, climbingStairCase(3) = 3     | (1, 1), (1,2) and (2, 1)
n=4, climbingStairCase(4) = 5     | (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1) and (2, 2)

# solution will be similar as fibonnaci sequence solution
*/

const climbingStairCase = (num) => {
    const noOfWays = [1, 2];

    for(let i = 2; i <= num; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[num-1];
}

const res = climbingStairCase(4);
console.log(res);
const res1 = climbingStairCase(3);
console.log(res1);
