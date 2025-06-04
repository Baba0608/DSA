#  sum of first n numbers


def sumOfN(n):
    if n == 1:
        return 1
    return n + sumOfN(n - 1)


#  factorial


def facto(n):
    if n == 0:
        return 1
    return n * facto(n - 1)


#  sum of array

arr = [1, 4, 8, 5, 2]


def sum_of_arr(arr, n=len(arr) - 1):
    if n == 0:
        return arr[n]
    return arr[n] + sum_of_arr(arr, n - 1)


#  power of 2


def power_of_2(n):
    if n == 0:
        return 1

    res = power_of_2(n // 2)

    if n % 2:
        return 2 * res * res
    else:
        return res * res


# is power of 2


def is_power_of_two(n):
    if n == 1:
        return True
    if n % 2 or n == 0:
        return False
    return is_power_of_two(n // 2)


#  fibonacci


def fibo(n):
    if n <= 1:
        return n
    return fibo(n - 1) + fibo(n - 2)
