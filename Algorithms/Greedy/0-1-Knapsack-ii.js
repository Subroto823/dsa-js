/**
 * 
 * @_0_1_Fractional_Knapsack
 * 
 * What is the 0/1 Knapsack Problem?
 * 
 * We are given N items where each item has some weight and profit associated with it. We are also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]. The target is to put the items into the bag such that the sum of profits associated with them is the maximum possible. 
 * 
 * Note: The constraint here is we can either put an item completely into the bag or cannot put it at all [It is not possible to put a part of an item into the bag].
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

    let ans = 0;
    for(let i = 0; i < items.length; i++) {
        let z = Math.min(W, items[i].weight);
        W -= z;
        ans += (z * items[i].price);
    }
    return ans;
}

let W = 50;
let items = [new Item(120, 30), new Item(100, 30), new Item(60, 10)];

console.log(fractionalKnapsack(items, W));