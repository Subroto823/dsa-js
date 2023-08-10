/*
# Array reverse - in place
    # Time Complexity: O(n)
*/

function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5];
reverse(arr);
console.log(arr);

/*
Explanation of the algorithm:

    Initialize: Begin with two pointers, start at the beginning and end at the end of the array.

    Swap and Move: While start is less than end, swap the elements at these positions, then move start one step forward and end one step backward.

    Repeat: Keep swapping and moving the pointers until they meet in the middle of the array.

    Result: After the loop, the array is reversed. 
*/
