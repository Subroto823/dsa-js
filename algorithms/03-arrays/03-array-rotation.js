/*
# Array - Right Rotation (in place)

    # In a right rotation, the elements of the array are shifted to the right by a given number of positions. The elements that move out of the array from the right side wrap around to the left side of the array. 
    For example, if we right-rotate the array [1, 2, 3, 4, 5] by 2 positions, we get [4, 5, 1, 2, 3].

    # Time Complexity: log(n + k)
*/

var rotate = function (arr, k) {
    n = arr.length
    k = k % n;
    if(k === 0) return;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

function reverse(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

let arr = [1, 2, 3];
rotate(arr, 6);
console.log(arr);

arr = [1, 2, 3, 4, 5];
rotate(arr, 7);
console.log(arr);

/*
Let's walk through the algorithm using the example 
If,
    arr = [1, 2, 3, 4, 5]
    k = 7

    rotate(arr, 7):

    Step 1: Reverse Entire Array:
        First, reverse the entire array. This effectively flips the order of all elements.
        arr = [5, 4, 3, 2, 1]

    Step 2: Reverse First k Elements:
        Then, reverse the first k elements. This moves the last k elements to the beginning, effectively rotating them to the right.

        k = k % n
          = 7 % 5 
          = 2

        arr = [4, 5, 3, 2, 1]


    Step 3: Reverse Remaining Elements:
        Finally, reverse the remaining elements from index k to the end. This ensures the rotated elements remain in the correct order.

        arr = [4, 5, 1, 2, 3]



### It's important to note that the number of rotations k should be smaller than the length of the array to have a noticeable effect on the rotation.

The line k = k % n is used to ensure that the value of k (the number of positions to rotate) is within the valid range of the array length. Here's an explanation:

    For example, if we have an array [1, 2, 3, 4, 5] with a length of 5 and we want to rotate it by 7 positions to the right, we can actually rotate it by 7 % 5 = 2 positions to achieve the same result. This is because after rotating by 5 positions, the array will be back to its original position, so we only need to rotate by the remaining 2 positions.

So, k = k % n calculates the remainder of dividing k by n, ensuring that k is within the valid range of array length. This is particularly useful when k is larger than the length of the array, as it brings the rotation value within a suitable range for the array's size.
*/