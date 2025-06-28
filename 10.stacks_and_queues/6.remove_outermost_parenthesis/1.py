def remove_outer_parentheses(s):
    count = 0
    ans = ""

    for symbol in s:
        if symbol == "(":
            count += 1

        if count > 1:
            ans += symbol

        if symbol == ")":
            count -= 1

    return ans
