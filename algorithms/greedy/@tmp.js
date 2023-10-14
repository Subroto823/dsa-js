
class Item {
    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
    }
}

function cmp(a, b) {
    return (a.value * b.weight) > (a.weight * b.value) ? -1 : 1;
}

function fractionalKnapsack(W, arr) {
    arr.sort(cmp);
    console.log(arr)

    let finalvalue = 0.0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].weight <= W) {
            W -= arr[i].weight;
            finalvalue += arr[i].value;
        }

        else {
            finalvalue += arr[i].value * (W / arr[i].weight);
            break;
        }
    }

    return finalvalue;
}

// Driver code
let W = 50;
let item1 = new Item(100, 20);
let item2 = new Item(120, 30);
let item3 = new Item(60, 10);

let arr = [item1, item2, item3];

console.log(fractionalKnapsack(W, arr));