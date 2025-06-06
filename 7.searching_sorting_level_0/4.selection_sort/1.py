def selection_sort(nums):
    n = len(nums)

    for i in range(n - 1):
        min_value_index = i

        for j in range(i + 1, n):
            if nums[j] < nums[min_value_index]:
                min_value_index = j

        nums[i], nums[min_value_index] = nums[min_value_index], nums[i]


nums = [3, 6, 1, 9, 5, 2, 4, 7, 8]
print(nums)
selection_sort(nums)
print(nums)
