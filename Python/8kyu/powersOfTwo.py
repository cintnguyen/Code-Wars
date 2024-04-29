# Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

# Examples
# n = 0  ==> [1]        # [2^0]
# n = 1  ==> [1, 2]     # [2^0, 2^1]
# n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

def powers_of_two(n):
    arr = []
    for i in range(0,n+1,1):
        arr.append(2**i)
    return arr

def powers_of_two(n):
    return [2**x for x in range(n+1)]