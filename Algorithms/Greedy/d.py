def candy(A):
    n = len(A);
    data = sorted((x, i) for i, x in enumerate(A))
    print(data)

candy([1, 3, 7, 1])