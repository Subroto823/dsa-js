/* 
 * stack, backtracking
 * Given n pairs of parentheses, write a function to generate all combinations of well formed parentheses
 * 
 */

/*
 * only add open parentheses if open < n
 * only add close parentheses if closed < open
 * valied IIF open == closed == n
 */

const generateParentheses = (n) => {
    const stack = [];
    const res = [];

    const backtrack = (openN, closedN) => {

        if((openN === closedN) && (openN === n)) {
            res.push(stack.join(""));
            return
        }

        if(openN < n) {
            stack.push("(")
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if(closedN < openN) {
            stack.push(")");
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    return res;
}

const res1 = generateParentheses(3);
console.log(res1);

/*
Input: n = 1
Output: ["()"]

Input: n = 2
Output: ["(())", "()()"];

Input: n = 3
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

*/
