def find_peak_element(nums):
    n = len(nums)
    if n == 1:
        return 0
    if nums[0] > nums[1]:
        return 0
    if nums[n - 1] > nums[n - 2]:
        return n - 1

    i, j = 1, n - 2
    while i <= j:
        mid = i + (j - i) // 2
        if nums[mid] > nums[mid - 1]:
            i = mid + 1
        else:
            j = mid - 1

    return j
