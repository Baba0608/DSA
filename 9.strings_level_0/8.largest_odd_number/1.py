def largest_odd_number(num):
    n = len(num) - 1
    while n >= 0 and num[n] % 2 == 0:
        n -= 1

    return num[: n + 1]
