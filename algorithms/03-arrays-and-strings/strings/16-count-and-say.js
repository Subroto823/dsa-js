var countAndSay = function(n) {
    let result = '1';

    while(n - 1 > 0) {
        let countDigit = generateFrequencyArray(result)
        result = convertToString(countDigit);
        n--;
    }

    return result;
};

function generateFrequencyArray(str) {
    let count = 1;
    let freq = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]) {
            count++
        } else {
            freq.push([count, str[i]]);
            count = 1;
        }
    }

    return freq;
}

function convertToString(arr) {
    let str = '';

    for (let [c, d] of arr) {
        str += c + d;
    }

    return str;
}

let n = 2;
console.log(countAndSay(n));

n = 4;
console.log(countAndSay(n));