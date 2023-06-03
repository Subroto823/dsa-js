/*
Return the fewest number of coins that you need to make up the amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

var coinChange = function (coins, amount) {
    let ans = helper(coins, amount);
    return ans === Infinity ? -1 : ans;
};

function helper(coins, amount, memo = {}) {
    if(amount in memo) return memo[amount];
    if(amount === 0) return 0;

    let ans = Infinity;

    for(let coin of coins) {
        if(amount - coin < 0) continue;
        ans = Math.min(ans, helper(coins, amount - coin, memo) + 1);
    }
    return memo[amount] = ans;
}

let coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount));