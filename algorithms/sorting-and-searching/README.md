# Sorting Algorithms
    # Bubble Sort
    # Insertion Sort
    # Quick Sort
    # Merge Sort

# Bubble Sort

# Insertion Sort
    # Insertion sort idea
        # Virtually split the array into a sorted and an unsorted part

        # Assume that the first element is alread sorted and remaining element are unsorted

        # Select an unsorted element and compare with all elements in the sorted part

        # If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right. 
        
        # Insert the selected element at the right index

        # Repeat till all the unsorted elements are placed in the right order

# Quick Sort
    # Quick sort idea
        (# Pick first element as pivot
        # Pick last element as pivot(Our approach)
        # Pick a random element as pivot
        # Pick median as pivot)

        # Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array

        # Repeat the process for the individual 'left' and 'right'arrays till we have an array of length 1 which is sorted by definition.

        # Repeatedly concatenate the left array, pivot and right array till one sorted array remains

# Merge Sort
    # Merge sort idea
        # Divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)

        # Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.