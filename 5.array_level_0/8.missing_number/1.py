def missing_number(nums):
    n = len(nums)
    sum = (n * (n + 1)) / 2

    for ele in nums:
        sum -= ele

    return sum
