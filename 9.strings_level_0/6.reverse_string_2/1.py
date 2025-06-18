def reverse_str(s, k):
    n = len(s)
    arr = [i for i in s]
    i = 0
    while (i + k) <= n:
        reverse(arr, i, i + k - 1)
        i += 2 * k

    reverse(arr, i, n - 1)

    return "".join(arr)


def reverse(arr, s, e):
    while s < e:
        arr[s], arr[e] = arr[e], arr[s]
        s += 1
        e -= 1
