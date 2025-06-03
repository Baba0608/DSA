def single_number(nums):
    ans = 0
    for ele in nums:
        ans ^= ele

    return ans


nums = [1, 1, 2, 3, 4, 2, 3]
ans = single_number(nums)
print(ans)
