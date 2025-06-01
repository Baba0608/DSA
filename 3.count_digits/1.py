def count_digits(num):
    if num == 0:
        return 1

    num = abs(num)

    count = 0
    while num > 0:
        num = num // 10
        count += 1

    return count


num = 1234
result = count_digits(num)
print(result)
