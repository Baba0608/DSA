def max_consecutive_one(nums):
    maxi = 0
    curr = 0
    for i in range(len(nums)):
        if nums[i] == 1:
            curr += 1
        else:
            maxi = max(curr, maxi)
            curr = 0

    maxi = max(curr, maxi)
    return maxi
