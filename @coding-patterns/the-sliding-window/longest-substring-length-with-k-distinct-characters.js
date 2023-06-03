/**
 * 
 * @Find length of the longest substring of k distinct characters
 * 
 */

function findLength(str, k) {
    const map = new Map();
    let maxWindowSize = -Infinity;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let charater = str[windowEnd];
        map.set(charater, (map.get(charater) || 0) + 1);

        while (map.size > k) {
            let startChar = str[windowStart];
            map.set(startChar, map.get(startChar) - 1);

            if (map.get(startChar) === 0) {
                map.delete(startChar);
            }
            windowStart++;
        }
        maxWindowSize = Math.max(maxWindowSize, windowEnd - windowStart + 1);
    }
    return maxWindowSize;
}

let str = "AAAHHIBCCD"
let k = 2;
console.log(findLength(str, k));