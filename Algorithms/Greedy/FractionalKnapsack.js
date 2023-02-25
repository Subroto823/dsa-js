/**
 * 
 * @Fractional Knapsack
 * 
 * Given the weights and prices of N items, in the form of {price, weight} put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
 * @In Fractional Knapsack, we can break items for maximizing the total value of the knapsack
 * @In the 0-1 Knapsack problem, we are not allowed to break items. We either take the whole item or don’t take it
 */

class Item {
    constructor(price, weight) {
        this.price = price;
        this.weight = weight;
    }
}

function cmp(a, b) {
    /*
    We want to order on decreasing order of price/weight
    So, 
        return a.price / a.weight > b.price / b.weight;
    
    But it is better if we can avoid divison because of possible precision loss.
    So, we can rewrite it as following. */
    return (a.price * b.weight) > (a.weight * b.price) ? 1 : -1;
}

function fractionalKnapsack(items, W) {
    items.sort(cmp);

    console.log(items)
    let ans = 0;
    for(let i = 0; i < items.length; i++) {
        let z = Math.min(W, items[i].weight);
        W -= z;
        ans += (z * items[i].price);
    }
    return ans;
}

let W = 50;
let items = [new Item(100, 20), new Item(120, 30), new Item(60, 10)];

console.log(fractionalKnapsack(items, W));