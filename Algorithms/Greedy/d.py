def seats(A):
    MOD = 10000003

    crosses = [i for i, c in enumerate(A) if c == "x"]
    print(crosses)
    crosses = [(cross-i) for i, cross in enumerate(crosses)]
    print(crosses)

seats('..x..x.')