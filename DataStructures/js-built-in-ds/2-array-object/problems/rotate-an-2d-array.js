/*
    
   [[1,2,3],
    [4,5,6], 
    [7,8,9]]

Rotated at 90 degrees:
   [[7,4,1]
    [8,5,2]
    [9,6,3]]
*/

const rotateMatrix = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}

console.table(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
console.table(rotateMatrix([
    [3, 2, 3],
    [1, 2, 3]
]))


