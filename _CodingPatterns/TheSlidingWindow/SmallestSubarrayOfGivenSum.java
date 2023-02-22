/**
 * 
 * Smallest subarray size
 * 
 */

public class SmallestSubarrayOfGivenSum {

    public static int smallestSubarray(int[] arr, int targetSum) {
        int minWindowSize = Integer.MAX_VALUE;
        int currWindowSum = 0;
        int windowStart = 0;

        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            currWindowSum += arr[windowEnd];

            while (currWindowSum >= targetSum) {
                minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
                currWindowSum -= arr[windowStart];
                windowStart++;
            }
        }
        return minWindowSize;
    }

    public static void main(String[] args) {
        System.out.println(smallestSubarray(new int[] {4, 2, 2, 7, 8, 1, 2, 8, 1, 0}, 8));
    }

}
