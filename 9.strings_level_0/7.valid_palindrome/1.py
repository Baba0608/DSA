def is_palindrome(s):
    i, j = 0, len(s) - 1
    while i < j:
        if not is_valid(s[i]):
            i += 1
        elif not is_valid(s[j]):
            j -= 1
        else:
            if s[i].lower() != s[j].lower():
                return False

            i += 1
            j -= 1

    return True


def is_valid(self, x):
    a = ord(x)
    return (
        (a >= ord("a") and a <= ord("z"))
        or (a >= ord("A") and a <= ord("Z"))
        or (a >= ord("0") and a <= ord("9"))
    )
