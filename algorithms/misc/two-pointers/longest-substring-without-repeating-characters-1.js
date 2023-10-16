var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let start = 0, maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start++]);
        }
        set.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));