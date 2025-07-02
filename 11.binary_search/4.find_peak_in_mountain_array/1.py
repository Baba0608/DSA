def peak(arr):
    i, j = 1, len(arr) - 2

    while i <= j:
        mid = i + (j - i) // 2

        if arr[mid] > arr[mid - 1]:
            i = mid + 1
        else:
            j = mid - 1

    return j
