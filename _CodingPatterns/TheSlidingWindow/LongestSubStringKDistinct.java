
/**
 * 
 * @Find length of the longest substring of k distinct characters
 */

import java.util.Map;
import java.util.HashMap;

public class LongestSubStringKDistinct {

    public static int findLength(String str, int k) {
        Map<Character, Integer> map = new HashMap<>();
        int maxWindowSize = Integer.MIN_VALUE;
        int windowStart = 0;

        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char character = str.charAt(windowEnd);
            map.put(character, map.getOrDefault(character, 0) + 1);

            while (map.size() > k) {
                char startChar = str.charAt(windowStart);
                map.put(startChar, map.get(startChar) - 1);

                if (map.get(startChar) == 0)
                    map.remove(startChar);
                windowStart++;
            }
            maxWindowSize = Math.max(maxWindowSize, windowEnd - windowStart + 1);
        }
        return maxWindowSize;
    }

    public static void main(String[] args) {
        String str = "AAAHHIBCCD";
        int k = 2;
        System.out.println(findLength(str, k));
    }
}