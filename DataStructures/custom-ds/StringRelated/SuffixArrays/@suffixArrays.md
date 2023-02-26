# What is Suffix?
* A suffix is a substring at the end of a string of characters. For our purposes suffixes are non empty.

    # CAMEL (suffixes of word "CAMEL")
       * L
       * EL
       * MEL
       * AMEL
       * CAMEL


# What is a Suffix Array?
* A suffix array is an array which contains all the sorted suffixes of a string.
   
   * The Suffix Array provides a space efficient alternative to a Suffix Tree which itself is a compressed version of a Trie.

   * Note: Suffix Arrays can do everything suffix trees can, with some additional information such as a Longest Common Prefix (LCP) array.


# The Suffix Array of "CAMEL" is :

   * All the Suffixes of "CAMEL" and the indices, where the particular suffix started in the string.

    0. CAMEL
    1. AMEL
    2. MEL
    3. EL
    4. L


    * All the suffixes in the lexicographically sorted order

    1. AMEL
    0. CAMEL
    3. EL
    4. L
    2. MEL

    (The acutal 'suffix array' is the array of sorted indices. 
    This provides a compressed representation of the sorted suffixes without actually needing to store the suffixes.)

    [1, 0, 3, 4, 2]
