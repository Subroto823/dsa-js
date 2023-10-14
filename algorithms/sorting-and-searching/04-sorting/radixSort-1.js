const {swap} = require('../../../__helpers/swap')
var bubbleSort = function (arr){
    let swapped;

    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}

const {randomNumbers} = require('../../../__helpers/random-numbers-array')

const nums = randomNumbers(100000);
console.time();
bubbleSort(nums);
console.timeEnd();