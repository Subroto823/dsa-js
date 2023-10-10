/**
 * Find length of the longest substring of k distinct characters.
 */

var findLength = function(str, k) {
    const map = new Map();
    let result = -Infinity;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        map.set(char, (map.get(char) || 0) + 1);

        if (map.size > k) {
            let startChar = str[start];
            while(startChar === str[start]) start++;
            map.delete(startChar);
        }

        result = Math.max(result, i - start + 1);
    }

    return result;
}

let str = "AAAHHIBCCD"
let k = 2;
console.log(findLength(str, k));

str = "AAAHHIBBBCCDD"
k = 3;
console.log(findLength(str, k));