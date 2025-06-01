def second_largest_number(arr):
    n = len(arr)

    if n < 2:
        return None

    first_largest = float("-inf")
    second_largest = float("-inf")

    for i in range(n):
        if arr[i] > first_largest:
            second_largest = first_largest
            first_largest = arr[i]
        elif arr[i] > second_largest and arr[i] != first_largest:
            second_largest = arr[i]

    return second_largest


arr = [2, -6, 4, 8, 1, -9]
result = second_largest_number(arr)
print(result)
