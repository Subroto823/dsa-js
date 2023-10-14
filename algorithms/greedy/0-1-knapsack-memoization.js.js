/**
 * 
 * @_0_1_Fractional_Knapsack 
 * @Optimal solution - using memoization(dynamic programming)
 * 
 * What is the 0/1 Knapsack Problem?
 * 
 * We are given N items where each item has some weight and profit associated with it. We are also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]. The target is to put the items into the bag such that the sum of profits associated with them is the maximum possible. 
 * 
 * Note: The constraint here is we can either put an item completely into the bag or cannot put it at all [It is not possible to put a part of an item into the bag].
 */

function knapsack(capacity, weight, profit, n, memo={}) {
    if(capacity === 0 || n === 0 ) return 0;

    // if weight of the nth item is more than capacity, then that item can't be included 
    if(weight[n-1] > capacity) {
        return knapsack(capacity, weight, profit, n-1);
    }

    let key = `${n}${capacity}`

    if(key in memo) {
        return memo[key];
    } else {
        return memo[key] = Math.max(profit[n-1]+ knapsack(capacity - weight[n-1], weight, profit, n-1), knapsack(capacity, weight, profit, n-1));
    }
}

let capacity = 50;
let profit = [50, 80, 120];
let weight = [10, 20, 30];
let n = weight.length;

console.log(knapsack(capacity, weight, profit, n));

/**
 * 
 * @Time Complexity : O(n*capacity)
 * @Space Complexity : O(n)
 * 
 */