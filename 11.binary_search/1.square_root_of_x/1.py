def mySqrt(x):
    if x < 2:
        return x

    i, j = 2, x // 2

    while i <= j:
        mid = (i + j) // 2

        if mid * mid > x:
            j = mid - 1
        else:
            i = mid + 1

    return j
