def next_greater_elements(nums):
    n = len(nums)
    st = []
    nextGreater = [0] * n

    # for circular just traverse twice
    for i in range((2 * n) - 1, -1, -1):
        size = len(st)
        while size > 0 and st[size - 1] <= nums[i % n]:
            st.pop()
            size -= 1

        if size > 0:
            nextGreater[i % n] = st[size - 1]

        st.push(nums[i % n])

    return nextGreater
