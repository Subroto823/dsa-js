const reflectArrayTwo = (arr) => {
    return arr.map(subArr => subArr.reverse());
}

console.log(reflectArrayTwo([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
console.log(reflectArrayTwo([[1, 2],[3, 4],[5, 6]]));