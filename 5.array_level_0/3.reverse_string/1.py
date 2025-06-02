def reverse_string(nums):
    i, j = 0, len(nums) - 1
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1
    return


s = ["h", "e", "l", "l", "o"]
print(s)
reverse_string(s)
print(s)
