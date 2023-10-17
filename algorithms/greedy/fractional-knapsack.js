/*
Problem Statement:

Given a set of items, each with a weight (w) and a value (v), your task is to determine the maximum total value you can obtain by selecting a subset of these items to fit into a knapsack with a limited weight capacity (W). You are allowed to take fractions of items.

Input:
    n: The number of available items.
    Items: A list of items, each represented by a pair (w, v).
    W: The weight capacity of the knapsack.

Output:
    The maximum total value achievable by selecting items.

Example:

Input:
    n = 3
    items = [(10, 60), (20, 100), (30, 120)]
    W = 50

Output:
    Maximum Total Value: 240
*/

const fractionalKnapsack = function (n, items, W) {
    items.sort((a, b) => b[1] / b[0] - a[1] / a[0]);
    let totalValue = 0.0;
    let remainingCapacity = W;

    for (const [weight, value] of items) {
        if (weight <= remainingCapacity) {
            totalValue += value;
            remainingCapacity -= weight
        } else {
            totalValue += (remainingCapacity / weight) * value;
            break;
        }
    }

    return totalValue;
}


let n = 3;
let items = [[10, 60], [20, 100], [30, 120]];
let W = 50;
let res = fractionalKnapsack(n, items, W);
console.log("Maximum Total Value:", res);

n = 5;
items = [[2, 10], [4, 15], [5, 30], [7, 25], [4, 18]];
W = 10;
res = fractionalKnapsack(n, items, W);
console.log("Maximum Total Value:", res);

