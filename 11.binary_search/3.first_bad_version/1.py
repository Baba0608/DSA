def first_bad_version(arr):
    i, j = 0, len(arr) - 1
    while i <= j:
        mid = i + (j - i) // 2
        if arr[mid]:
            j = mid - 1
        else:
            i = mid + 1
    return i
