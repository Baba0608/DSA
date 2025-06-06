def bubble_sort(nums):
    n = len(nums)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]


nums = [3, 6, 1, 9, 5, 2, 4]
print(nums)
bubble_sort(nums)
print(nums)
