def find_min(arr):
    n = len(arr)

    if n == 1:
        return arr[0]

    if arr[0] > arr[1]:
        return arr[1]

    if arr[n - 2] > arr[n - 1]:
        return arr[n - 1]

    i, j = 1, n - 2

    while i <= j:
        mid = i + (j - i) // 2
        if arr[mid] > arr[mid + 1]:
            return arr[mid + 1]
        elif arr[mid] < arr[mid - 1]:
            return arr[mid]
        elif arr[i] <= arr[mid]:
            i = mid + 1
        else:
            j = mid - 1

    return arr[0]
