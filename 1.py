def power_of_two(n):
    if n == 0:
        return 1

    if n < 0:
        return 1 / power_of_two(-n)

    if n % 2:
        return 2 * power_of_two(n - 1)
    else:
        ans = power_of_two(n / 2)
        return ans * ans
