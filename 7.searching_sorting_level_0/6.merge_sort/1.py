def merge_sort(nums, s, e):
    if s < e:
        mid = (s + e) // 2

        merge_sort(nums, s, mid)
        merge_sort(nums, mid + 1, e)
        merge(nums, s, mid, e)


def merge(nums, s, mid, e):
    i, j, ans = s, mid + 1, []

    while i <= mid and j <= e:
        if nums[i] < nums[j]:
            ans.append(nums[i])
            i += 1
        else:
            ans.append(nums[j])
            j += 1

    while i <= mid:
        ans.append(nums[i])
        i += 1

    while j <= e:
        ans.append(nums[j])
        j += 1

    for k in range(len(ans)):
        nums[k + s] = ans[k]


nums = [3, 6, 1, 9, 5, 2, 4, 7, 8]
print(nums)
merge_sort(nums, 0, len(nums) - 1)
print(nums)
