def next_greater_element(arr):
    n = len(arr)
    next_greater = [-1] * n
    st = []

    for i in range(n - 1, -1, -1):
        while st and st[-1] <= arr[i]:
            st.pop()

        if st:
            next_greater[i] = st[-1]
        else:
            next_greater[i] = -1

        st.append(arr[i])

    return next_greater


def next_greater_element1(nums, arr):
    next_greater_arr = next_greater_element(arr)
    d = {arr[i]: next_greater_arr[i] for i in range(len(arr))}
    return [d[ele] for ele in nums]
