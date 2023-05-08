/*
Return the fewest number of coins that you need to make up the amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

var coinChange = function (coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    
    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin >= 0 && table[i - coin] !== Infinity) {
                table[i] = Math.min(table[i], table[i - coin] + 1);
            }
        }
    }
    return table[amount] !== Infinity ? table[amount] : -1;
};

let coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount))