def balanced_string_split(s):
    count = 0
    ans = 0
    for i in s:
        count += 1 if i == "R" else -1
        if count == 0:
            ans += 1

    return ans
