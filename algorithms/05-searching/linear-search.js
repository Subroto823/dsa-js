/*
 # Linear Search 
    # Time complexity O(n)
*/

const linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) return i;
    }
    return -1;
}

console.log(linearSearch([4, 5, 8, 3, 2, 0], 2));