var minSlidingWindow = function (nums, k) {
    const deque = [];
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[i] < deque[deque.length - 1]) {
            deque.pop();
        }

        deque.push(nums[i]);

        if (i >= k - 1) {
            res.push(deque[0]);
            if (nums[i - k + 1] === deque[0]) {
                deque.shift();
            }
        }
    }

    return res;
};

let nums = [2, 4, 1], k = 2;
console.log(minSlidingWindow(nums, k));

nums = [2, 4, 1, 2, 5, 3, 7, 6, 7, 2], k = 3;
console.log(minSlidingWindow(nums, k));