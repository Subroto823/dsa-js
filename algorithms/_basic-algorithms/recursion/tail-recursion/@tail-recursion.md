# Tail Recursion
* In traditional head recursion, the typical model is that we perform our recursive calls first, and then we take the return value of the recursive call and calculate the result. In this manner, we don’t get the result of our calculation until we have returned from every recursive call.

* In tail recursion, we perform our calculations first, and then we execute the recursive call, passing the results of our current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).