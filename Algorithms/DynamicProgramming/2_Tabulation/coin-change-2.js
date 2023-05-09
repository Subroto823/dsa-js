/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin. */

var change = function (amount, coins) {
    const table = new Array(amount + 1).fill(0);
    table[0] = 1;
    
    for(let coin of coins) {
        for(let j = 1; j <= amount; j++) {
            if(j >= coin) {
                table[j] = table[j] + table[j - coin];
            }
        }
    }
    return table[amount];
};

let amount = 5, coins = [1, 2, 5];
console.log(change(amount, coins));