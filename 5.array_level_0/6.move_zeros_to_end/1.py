def move_zeros(nums):
    n = len(nums)
    x = 0

    for i in range(n):
        if nums[i] != 0:
            nums[x] = nums[i]
            x += 1

    while x < n:
        nums[x] = 0
        x += 1
