class PrefixSum {
    constructor(nums) {
        this.prefix = new Array(nums.length);
        this.build(this.prefix, nums);
    }

    build(prefix, nums) {
        prefix[0] = nums[0];
        for(let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i] + prefix[i - 1];
        }
    }

    sumInRange(start, end) {
        if(start < 0 || end >= this.prefix.length || start > end) {
            process.stdout.write("Invalid Input!\n");
            return;
        }
        return this.prefix[end] - (this.prefix[start - 1] || 0);
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pf = new PrefixSum(nums);

console.log(pf.sumInRange(0, 3));
console.log(pf.sumInRange(2, 4));
console.log(pf.sumInRange(4, 9));