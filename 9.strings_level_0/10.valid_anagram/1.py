def is_anagram(s, t):
    if len(s) != len(t):
        return False

    d = {}
    for i in range(len(s)):
        d[s[i]] = (d[s[i]] or 0) + 1
        d[t[i]] = (d[t[i]] or 0) - 1

    for key in d:
        if d[key] != 0:
            return False

    return True
