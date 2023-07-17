/*
[[1, 2, 3]
 [4, 5, 6]
 [7, 8, 9]]

reflect array would be - 
[[3, 2, 1]
 [6, 5, 4]
 [9, 8, 7]]
*/

const reflectArray =(arr) => {
    const reflectArr = arr.map(item => [...item]);
    
    for(let subArr of reflectArr) {
        let h_row = subArr.length - 1;

        for(let i = 0; i < subArr.length; i++) {
            if(i < h_row) {
                [subArr[i], subArr[h_row]] = [subArr[h_row], subArr[i]]
            }
            h_row--;
        }
    }
   return reflectArr;
}

console.log(reflectArray([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
console.log(reflectArray([[1, 2],[3, 4],[5, 6]]));

