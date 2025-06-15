def length_of_last_word(s):
    i = len(s) - 1
    ans = 0
    while i >= 0:
        if s[i] != " ":
            ans += 1
        elif ans > 0:
            return ans

        i -= 1

    return ans
