def insertion_sort(nums):
    n = len(nums)

    for i in range(1, n):
        j = i
        while j > 0 and nums[j] < nums[j - 1]:
            nums[j], nums[j - 1] = nums[j - 1], nums[j]
            j -= 1


nums = [3, 6, 1, 9, 5, 2, 4, 7, 8]
print(nums)
insertion_sort(nums)
print(nums)
