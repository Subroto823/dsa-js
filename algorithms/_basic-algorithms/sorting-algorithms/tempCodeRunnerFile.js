let arr = randomArray(1000000);

console.time();
sortArray(arr);
console.timeEnd();

console.log(isSorted(arr));