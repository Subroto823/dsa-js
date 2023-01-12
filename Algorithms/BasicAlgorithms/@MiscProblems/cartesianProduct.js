/*
Given two finite non-empty sets, find their Cartesian products 

In mathematics, specifically set theory, the Cartesian product of two set A and B, denoted AxB, is the set of all ordered pairs (a, b) where a is in A and b is in B

const A = [1, 2]
const B = [3, 4]
AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]

*/

const cartesianProduct = (arrOne, arrTwo) => {
    let output = [];
    arrOne.forEach(elemOne => {
        arrTwo.forEach(elemTwo => {
            output.push([elemOne, elemTwo])
        })
    });
    return output;
}


const A = [1, 2];
const B = [3, 4, 5];
const res = cartesianProduct(A, B);
console.log(res);

/*
Time Complexity: O(m*n) */