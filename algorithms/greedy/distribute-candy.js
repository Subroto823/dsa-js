/*
Problem Discussion

N kids stand in a line, each having an integer rating. We distribute candies following:
    - Each kid gets at least 1 candy
    - Kids with higher ratings than their neighbours get more candies.

Find the minimum candies required.

Example:
    Input: [1, 3, 7, 1]
    Output: 7

Constraints:
    * 1 <= N <= 1e5
*/

const candy = function (ratings) {
    const data = ratings.map((rating, i) => [rating, i]);
    data.sort((a, b) => a[0] - b[0]);

    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for(let [_, i] of data) {
        if(i > 0 && ratings[i] > ratings[i - 1]) {
            candies[i] = Math.max(candies[i], candies[i - 1] + 1);
        }

        if(i < n - 1 && ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((acc, elem) => acc + elem, 0);
}

let candies = [1, 3, 7, 1];
console.log(candy(candies));
