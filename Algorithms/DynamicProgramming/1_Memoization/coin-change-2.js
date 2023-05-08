/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin. */
var change = function (amount, coins) {
    const n = coins.length,
        memo = new Array(n).fill()
            .map(() => new Array(amount + 1).fill(-1));

    function helper(amount, coins, idx) {
        if(amount === 0) return 1;
        if(idx === n || amount < 0) return 0;
        if(memo[idx][amount] !== -1) return memo[idx][amount];
        
        let ways = 0;

        for(let i = 0; i <= amount; i += coins[idx]) {
            ways += helper(amount - i, coins, idx + 1);
        }
        return memo[idx][amount] = ways;
    }
    return helper(amount, coins, 0);
};

let amount = 5, coins = [1, 2, 5];
console.log(change(amount, coins));