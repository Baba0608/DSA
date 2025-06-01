def palindrome(num):
    if num < 0:
        return False

    return num == reverse(num)


def reverse(num):
    result = 0

    while num > 0:
        rem = num % 10
        result = (result * 10) + rem
        num = num // 10

    return result


num = 121
result = palindrome(num)
print(result)
