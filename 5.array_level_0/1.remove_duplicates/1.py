def remove_duplicates(arr):
    x = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[x]:
            x += 1
            arr[x] = arr[i]

    return x + 1


arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
result = remove_duplicates(arr)
print(result)
