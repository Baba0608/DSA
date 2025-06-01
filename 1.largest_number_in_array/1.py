def largest_number(arr):
    if len(arr) == 0:
        return None

    laregst = float("-inf")

    for i in range(len(arr)):
        if arr[i] > laregst:
            laregst = arr[i]

    return laregst


arr = [2, -6, 4, 8, 1, -9]

result = largest_number(arr)

print(result)
