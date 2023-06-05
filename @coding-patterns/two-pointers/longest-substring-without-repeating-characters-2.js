var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let start = 0, maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if(map.has(s[end])) {
            start = Math.max(start, map.get(s[end]) + 1);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

let s = "abcabcbb";;
console.log(lengthOfLongestSubstring(s));