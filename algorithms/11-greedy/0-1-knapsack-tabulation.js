/**
 * 
 * @_0_1_Fractional_Knapsack 
 * @Optimal solution - using tabulation(dynamic programming)
 * 
 * What is the 0/1 Knapsack Problem?
 * 
 * We are given N items where each item has some weight and profit associated with it. We are also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]. The target is to put the items into the bag such that the sum of profits associated with them is the maximum possible. 
 * 
 * Note: The constraint here is we can either put an item completely into the bag or cannot put it at all [It is not possible to put a part of an item into the bag].
 */

function knapsack(capacity, weight, profit) {
    const table = new Array(capacity+1).fill(0);

    for(let i = 0; i < weight.length; i++) {
        for(let j = capacity; j >= 0; j--) {
            if(weight[i] <= j) {
                table[j] = Math.max(table[j], table[j-weight[i]] + profit[i]);
            }
        }
    }
    return table[capacity];
}

let capacity = 50;
let profit = [50, 80, 120];
let weight = [10, 20, 30];

console.log(knapsack(capacity, weight, profit));

/**
 * 
 * @Time Complexity : O(n*capacity)
 * @Space Complexity : O(n)
 * 
 */