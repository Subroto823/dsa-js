/**
 * 
 * Maximum sum of a contiguous subarray of size 3
 * 
 */
public class MaxSumSubarray {

    public static int findMaxSumSubarray(int[] arr, int k) {
        int maxSum = -Integer.MIN_VALUE;
        int currSum = 0;
    
        for(int i = 0; i < arr.length; i++) {
            currSum += arr[i];
            
            if(i >= k - 1) {
                maxSum = Math.max(maxSum, currSum);
                currSum -= arr[i - (k - 1)];
            }
        }
        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println(findMaxSumSubarray(new int[] {4, 2, 1, 7, 8, 1, 2, 8, 1, 0}, 3));
    }
}