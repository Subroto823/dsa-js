/*
 *
 * Time Complexity O()
 *
 */

const recursiveFactorial = (number) => {
    if(number === 0) return 1;
    if(number < 0) return "Please enter a positive number!!"

    return number * recursiveFactorial(number - 1);
}

console.log(recursiveFactorial(5))